import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET() {
  // db logic
  return NextResponse.json({
    name: 'Durgesh Dubey',
    email: 'durgesh@google.com',
  });
}

export async function POST(req: NextRequest) {
  // Fetch body
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
    select: {
      username: true,
      id: true,
    },
  });
  return NextResponse.json(
    {
      message: 'User created successfully',
      data: user,
    },
    { status: 201 }
  );
}
