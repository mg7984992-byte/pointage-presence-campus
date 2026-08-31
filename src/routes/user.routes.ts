import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware, adminOnly } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware); // toutes les routes users nécessitent d'être connecté

router.get("/me", UserController.getMe);
router.get("/", adminOnly, UserController.getAll);
router.get("/:id", UserController.getOne);
router.put("/:id", UserController.update);
router.delete("/:id", adminOnly, UserController.remove);

export default router;
