import { prisma } from "../lib/db";
import type { CreateUserInput } from "../schemas/user-schema";
import bcrypt from "bcrypt";

const userService = {
  async createUser(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });
    // Don't return password to the client
    const { password, ...safeUser } = user;
    return safeUser;
  },

  async getUsers() {
    return prisma.user.findMany();
  },

  async getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  },

  async updateUser(id: number, data: { name?: string; email?: string }) {
    return prisma.user.update({ where: { id }, data });
  },

  async deleteUser(id: number) {
    return prisma.user.delete({ where: { id } });
  },
};

export default userService;
