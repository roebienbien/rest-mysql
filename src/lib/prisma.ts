import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params: any, next: (params: any) => Promise<any>) => {
  const result = await next(params);

  if (params.model === "User") {
    const omitPassword = (user: any) => {
      if (user && typeof user === "object" && "password" in user) {
        const { password, ...rest } = user;
        return rest;
      }
      return user;
    };

    if (Array.isArray(result)) {
      return result.map(omitPassword);
    }

    return omitPassword(result);
  }

  return result;
});

export default prisma;
