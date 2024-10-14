import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { amount, currency } = await req.json();
  const response = await axios.post('https://apirone.com/api/v2/invoices', {
    currency,
    amount,
  });
  return NextResponse.json(response.data, { status: 201 });
}
