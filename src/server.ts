/**
 * Created by lei.liu on 2019/7/17
 */
import * as Koa from "koa";
import apiRouter from "./routes/index";
import { accessLogger } from "./logger";

const app = new Koa();

app.use(accessLogger);
app.use(apiRouter.routes());
app.listen(3000);
