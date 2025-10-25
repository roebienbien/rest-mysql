import { PrismaClient } from "../generated/prisma"; // matches your generator output
export const prisma = new PrismaClient();

// Gracefully close connection when app stops
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
