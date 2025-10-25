import { Request, Response } from "express";
import userService from "../services/user-service";

export const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to create user" });
    }
  },

  async getUsers(_req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  },

  async getUserById(req: Request, res: Response) {
    const user = await userService.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  },

  async updateUser(req: Request, res: Response) {
    try {
      const user = await userService.updateUser(
        Number(req.params.id),
        req.body,
      );
      res.json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      await userService.deleteUser(Number(req.params.id));
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default userController;
