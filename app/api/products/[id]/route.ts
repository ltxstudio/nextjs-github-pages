import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });
  if (product) {
    return NextResponse.json(product, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
