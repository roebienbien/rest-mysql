import { Request, Response } from "express";
import userService from "../services/user-service";
import { sendError, sendSuccess } from "../utils/response-handler";

export const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      return sendSuccess(res, 201, "User created successfully", user);
    } catch (error: any) {
      return sendError(res, error.message || "failed to create user");
    }
  },

  async getUsers(_req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      return sendSuccess(res, 200, "Users fetched successfuly", users);
    } catch (error: any) {
      return sendError(res, error.message || "failed to create user");
    }
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
      return sendSuccess(res, 200, "user updated successfully", user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      await userService.deleteUser(Number(req.params.id));
      return sendSuccess(res, 204, "user deleted successfully");
    } catch (err: any) {
      return sendError(res, "user not found");
    }
  },
};

export default userController;
