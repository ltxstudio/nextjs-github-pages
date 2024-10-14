import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }) {
  const { id } = params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { products: true },
  });
  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
