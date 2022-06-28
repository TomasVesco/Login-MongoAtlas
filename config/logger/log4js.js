import log4js from 'log4js';

log4js.configure({
    appenders: {
        console: { type: "console" },
        infoFile: { type: "file", filename: "./build/src/logs/info.log"},
        warnFile: { type: "file", filename: "./build/src/logs/warn.log" },
        errorFile: { type: "file", filename: "./build/src/logs/error.log" },
        logConsole: { type: "logLevelFilter", appender: "console", level: "info" },
        logInfo: { type: "logLevelFilter", appender: "infoFile", level: "info" },
        logWarn: { type: "logLevelFilter", appender: "warnFile", level: "warn" },
        logError: { type: "logLevelFilter", appender: "errorFile", level: "error" },
    },
    categories: {
        default: { appenders: ["logConsole"], level: "info" },
        info: { appenders: ["logInfo"], level: "info" },
        warn: { appenders: ["logWarn"], level: "warn" },
        error: { appenders: ["logError"], level: "error"}
    }
});

export default log4js;