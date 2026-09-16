const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://hayasell-api.onrender.com';

export async function createRequest(payload: { productName: string }) {
  const res = await fetch(`${API_URL}/api/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`فشل إرسال الطلب: ${res.status}`);
  }
  return res.json();
}

export { API_URL };
