/**
 * Created by lei.liu on 2019/7/17
 */
import * as log4js from "koa-log4";
import * as path from "path";
// @ts-ignore
import * as log4js_extend from "log4js-extend";

log4js.configure({
    appenders: {
        access: {
            type: "dateFile",
            pattern: "-yyy-MM-dd.log",
            filename: path.join("./logs/", "access.log"),
        },
        out: {
            type: "console",
        },
        application: {
            type: "dateFile",
            pattern: "-yyy-MM-dd.log",
            filename: path.join("./logs/", "application.log"),
        },
    },
    categories: {
        default: { appenders: ["out"], level: "info" },
        access: { appenders: ["access"], level: "info" },
        application: { appenders: ["application"], level: "info" },
    }
});

log4js_extend(log4js, {
    path: __dirname,
    format: "at @name (@file:@line:@column)"
});

export const accessLogger = log4js.koaLogger(log4js.getLogger("access"));
export const logger = log4js.getLogger("application");
