# Hayasell API

Production-oriented modular monolith for Hayasell.

## Security baseline
- JWT access tokens with short TTL + rotating refresh sessions
- Global authentication guard; explicit public routes only
- OTP challenge flow with hashed codes and attempt limits
- Resource ownership checks at service layer
- Strict DTO validation (`whitelist` + `forbidNonWhitelisted`)
- CORS allowlist via `CORS_ORIGINS`
- Database foreign keys and unique constraints for core commerce integrity
- Serializable transaction for offer selection / deal creation
- Audit/event foundations via `OutboxEvent` and `AuditEvent`

## Development OTP
In `NODE_ENV=development`, OTP codes are printed to the server log. Production must connect the OTP delivery provider before enabling real customer authentication.

## Production requirements before launch
- Set a strong `JWT_SECRET` (32+ random bytes)
- Configure real OTP provider
- Configure HTTPS and production CORS origins
- Distributed command/auth rate limiting via Redis
- Durable outbox worker with retry/backoff and terminal failure state
- Add PostGIS-based candidate retrieval
- Add automated security/integration/E2E tests

## Strategic Differentiation Layer

Hayasell is intentionally not a traditional classifieds marketplace. Its core differentiator is demand-led commerce:

`Buyer Demand → Seller Capability → Intelligent Matching → Seller Offers → Deal → Trust/Data → Better Matching`

The current foundation includes Seller Capability Graph, Seller Demand Radar, deterministic opportunity scoring, Market Snapshot, and Publications as a separate discovery/liquidity domain. Publications are not Seller Offers and are not a forced full catalog/store.

AI remains auxiliary to the transaction core: it may improve understanding, normalization and recommendations, but it must not independently finalize prices, create unauthorized deals, change trust outcomes, or execute irreversible commerce actions.

### Liquidity Intelligence
The API now includes a deterministic Liquidity Engine foundation for network readiness, geographic liquidity zones, unserved-demand pressure, and seller opportunity targeting. It uses PostgreSQL-backed demand/supply data and does not introduce a separate graph database or AI dependency.
