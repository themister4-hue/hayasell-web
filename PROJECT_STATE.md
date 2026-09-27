# HAYASELL — PROJECT STATE

## Current checkpoint
**Phase:** 3.3 — Commercial Platform Core / Subscription Domain
**Implementation status:** CODED, NOT VERIFIED
**Verification gate:** RED / NOT PASSED

## Source baseline
Implemented from:
`HAYASELL_PHASE2C_LIQUIDITY_ENGINE.zip`

## Architecture
Hayasell remains a NestJS modular monolith with PostgreSQL/Prisma, Redis, Outbox events, audit logging and modular domain boundaries. No microservices rewrite was introduced.

## Phase 3 commercial architecture
Commercial boundaries are explicitly separated:

`User Account != Seller Profile != Plan != Subscription != Payment != Entitlement`

Buyer and Seller commercial lifecycles are independent.

### Buyer Membership
- First year is free.
- Subsequent membership is 100 DZD/year according to the approved commercial model.
- Unpaid buyer periods are a Buyer-only concept and are not Seller debt.
- Account/data are retained when membership expires.
- Buyer membership arrears/period ledger belongs to the later billing/membership ledger phase.

### Seller Subscription
- Seller trial: 6 months.
- Seller paid subscription is separate from Buyer membership.
- No unpaid-year accumulation for sellers.
- Expired seller subscription does not delete SellerProfile, Products, Publications, deals, ratings, followers or history.
- Reactivation after expiry will require the payment/billing domain; Phase 3.3 does not grant paid access without a payment event.

## Phase 3.2 catalog foundation implemented with Phase 3.3
Models:
- Plan
- PlanVersion
- PlanPrice
- PlanEntitlement

Plan versions are immutable in principle once used by subscriptions. Historical subscriptions reference a concrete PlanVersion.

Initial catalog bootstrap:
- BUYER
- BUSINESS
- BUSINESS_PRO
- LARGE_PRO
- AI_ASSISTANT

Commercial prices encoded as integer minor units:
- Buyer: 100 DZD/year
- Business: 400 DZD/month
- Business: 1000 DZD/3 months

No provider-specific payment IDs are stored in the plan catalog.

## Phase 3.3 subscription domain implemented
Models:
- Subscription
- SubscriptionTransition

Subscription states:
- TRIALING
- ACTIVE
- PAST_DUE
- CANCELING
- EXPIRED
- CANCELED

Subscription transitions are server-side state-machine controlled.

Important invariants:
- One live subscription per user + subscription kind is enforced at DB level by a partial unique index and protected by transactional logic.
- Seller trial creation requires SellerProfile.
- Buyer first-year membership is provisioned once for a new account.
- Cancellation-at-period-end records `cancelRequestedAt`; `canceledAt` is reserved for actual cancellation.
- Period expiry is explicit and emits an Outbox event.
- Subscription transitions are immutable history records.
- Idempotency keys may be attached to state transitions.
- Financial/provider webhooks are NOT handled here; that belongs to Phase 3.4.

## Events introduced
- BuyerMembershipStarted
- SellerTrialStarted
- SellerSubscriptionActivated
- SubscriptionCanceling
- SubscriptionPastDue
- SubscriptionExpired
- SubscriptionCanceled
- SubscriptionStatusChanged

## API introduced
- `GET /api/v1/subscriptions/me`
- `POST /api/v1/subscriptions/seller/trial`
- `POST /api/v1/subscriptions/seller/:id/cancel`

No seller reactivation endpoint grants paid access in Phase 3.3. Paid reactivation belongs to Phase 3.4 Billing/Payment.

## Security / integrity
- State transitions are server-authoritative.
- Ownership is checked before subscription mutation.
- Serializable transactions are used for first-provisioning paths.
- Outbox events are created in the same transaction as subscription state changes.
- Audit records are written for API-triggered subscription transitions.
- No `isPaid`, `isPremium`, `isSellerActive` or scattered plan-name checks were introduced.

## Existing architecture retained
The Phase 2C intelligence/liquidity foundation remains intact. No rewrite was performed.

## Verification status — IMPORTANT
The full gate has NOT passed in the current environment.

Attempted diagnostic:
`tsc -p apps/api/tsconfig.json --noEmit`

Result: dependency/generated-client failures because `node_modules` and generated Prisma Client are unavailable in this environment.

Therefore DO NOT claim:
- Prisma generate passed
- migration applied successfully
- build passed
- Jest tests passed
- production readiness

Required final verification when a networked/dev environment is available:

`install → prisma generate → migrate → build → unit tests → integration tests → authorization/security tests`

## Next phase
**Phase 3.4 — Billing Ledger + Payment Abstraction**

This phase must introduce payment-provider abstraction, billing ledger, webhook/event inbox, signature verification, idempotent payment processing, reconciliation and only then paid seller activation/renewal.
