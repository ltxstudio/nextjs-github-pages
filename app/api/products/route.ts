import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, price } = await req.json();
  const product = await prisma.product.create({
    data: { name, price },
  });
  return NextResponse.json(product, { status: 201 });
}

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
}
