import { Router } from "express";
import userController from "../controller/user-controller";
import { validateResource } from "../middleware/validate-resource";
import { createUserSchema } from "../schemas/user-schema";

const router = Router();

router.post("/", validateResource(createUserSchema), userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
