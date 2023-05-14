// Note: Prisma Client
// * https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution
// * this allows us to use prisma in our app without worrying about multiple instances of prisma being created

import {PrismaClient} from '@prisma/client'


const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;

