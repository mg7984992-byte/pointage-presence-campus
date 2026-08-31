import { Router } from "express";
import { PointageController } from "../controllers/pointage.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware); // toutes les routes de pointage nécessitent d'être connecté

router.post("/sessions", PointageController.createSession);
router.get("/sessions", PointageController.listSessions);
router.get("/sessions/:id", PointageController.getSession);
router.patch("/sessions/:id/fermer", PointageController.closeSession);

router.post("/sessions/:id/arrivee", PointageController.pointerArrivee);
router.post("/sessions/:id/depart", PointageController.pointerDepart);
router.get("/sessions/:id/presences", PointageController.listPresencesBySession);

router.get("/mes-presences", PointageController.mesPresences);

export default router;
