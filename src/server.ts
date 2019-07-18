/**
 * Created by lei.liu on 2019/7/17
 */
import "reflect-metadata";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as compress from "koa-compress";
import { createConnection } from "typeorm";
import apiRouter from "./routes/index";
import { accessLogger, logger } from "./logger";

createConnection().then(async() => {
    const app = new Koa();

    app.use(bodyparser());
    // logger
    app.use(accessLogger);

    // router
    app.use(apiRouter.routes());

    // compress
    app.use(compress());

    app.listen(3000);

    app.on("error", (err, ctx) => {
        logger.error("server error", err, ctx);
    });
}).catch((err) => {
    logger.error("typeorm connection error: ", err);
});
