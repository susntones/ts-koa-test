/**
 * Created by lei.liu on 2019/7/18
 */
import { User } from '../entity/user';
import { getManager } from "typeorm";
import { logger } from "../logger";

export class UserService {
    public static async create(userObj: Object) {
        const userRepository = getManager().getRepository(User);
        const user = userRepository.create(userObj);
        await userRepository.save(user);
    }

    public static async getUser(userId: number) {
        logger.info(`get user: ${userId}`);
        return await User.findOne(userId);
    }
}
