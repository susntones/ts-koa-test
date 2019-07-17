/**
 * Created by lei.liu on 2019/7/17
 */
import * as Router from "koa-router";
import { logger } from "../logger";

const router = new Router({ prefix: "/user" });

router.get("/", async(ctx) => {
    logger.info("test");
    ctx.body = "Hello world";
});

export default router;
