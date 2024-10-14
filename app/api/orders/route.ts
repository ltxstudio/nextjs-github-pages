import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, items, total } = await req.json();
  
  const order = await prisma.order.create({
    data: {
      userId,
      total,
      orderItems: {
        create: items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      }
    },
    include: { orderItems: true }
  });
  
  return NextResponse.json(order, { status: 201 });
}
