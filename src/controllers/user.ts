/**
 * Created by lei.liu on 2019/7/18
 */
import { Context } from "koa";
import { logger } from "../logger";
import { UserService } from "../services/user";

export class UserController {

    public static async createUser(ctx: Context) {
        logger.info("createUser");
        await UserService.create(ctx.request.body);
        ctx.body = { code: '', success: true };
    }

    public static async getUser(ctx: Context) {
        logger.info("getUser");
        const userId = ctx.params.userId;
        const user = await UserService.getUser(userId);
        ctx.body = { success: true, user };
    }
}
