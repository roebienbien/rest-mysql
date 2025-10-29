import { prisma } from "../lib/db";
import type { CreateUserInput } from "../schemas/user-schema";
import bcrypt from "bcrypt";
import { omitPassword } from "../utils/omit-password";
// import prisma from "../lib/prisma";

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
    return omitPassword(user);
  },

  async getUsers() {
    // return prisma.user.findMany();
    const users = await prisma.user.findMany();
    return omitPassword(users);
  },

  async getUserById(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    return omitPassword(user);
  },

  async updateUser(id: number, data: { name?: string; email?: string }) {
    const updateUser = await prisma.user.update({ where: { id }, data });
    return omitPassword(updateUser);
  },

  async deleteUser(id: number) {
    const deleteUser = await prisma.user.delete({ where: { id } });
    return omitPassword(deleteUser);
  },
};

export default userService;
