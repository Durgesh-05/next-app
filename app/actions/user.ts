'use server';

import prisma from '@/db';

// In nextjs to avoid call server from server we use direct fucntions and we can use this fns in client side to to direct call the server without using axios or fetch this is what server actions are used for
// We create a Isolated Function and can use it in client and server side to avoid call server from server and without creating logic in api just abstract it as a function and use it in client and server side
// Treat server actions like abstract functions

export const userSignup = async (username: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
    select: {
      username: true,
      id: true,
    },
  });

  return {
    message: 'User created successfully',
    data: user,
  };
};
