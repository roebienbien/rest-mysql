import { prisma } from "../lib/db";

const userService = {
  async createUser(data: { name: string; email: string }) {
    return prisma.user.create({ data });
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
