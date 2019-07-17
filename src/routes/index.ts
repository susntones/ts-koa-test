/**
 * Created by lei.liu on 2019/7/17
 */
import * as Router from "koa-router";
import user from "./user";

const apiRouter = new Router({ prefix: '/v1/api' });

apiRouter.use(user.routes());

export default apiRouter;
