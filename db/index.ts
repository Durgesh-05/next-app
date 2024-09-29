import { PrismaClient } from '@prisma/client';

// We create a singleton prisma client to avoid reinstantiating prisma client for every request
// If we dont do this we will face this error in dev mode
// Error: warn(prisma-client) There are already 10 instances of Prisma Client actively running.
// globalThis will check for instance if exist it will not create a new one for next js project use this as a boilerplate code for prisma client

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
