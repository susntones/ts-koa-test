/**
 * Created by lei.liu on 2019/7/17
 */
import * as Router from "koa-router";
import { UserController } from "../controllers/user";

const router = new Router({ prefix: "/user" });

router.get("/:userId", UserController.getUser);
router.post("/", UserController.createUser);

export default router;
