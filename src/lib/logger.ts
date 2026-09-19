/**
 * Standard project logger for DJM Energia Solar.
 * All logging should pass through this module to satisfy quality/no-direct-console.
 */
export const logger = {
  info: (...args: unknown[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("[INFO]", ...args);
    }
  },
  warn: (...args: unknown[]) => {
    console.warn("[WARN]", ...args);
  },
  error: (...args: unknown[]) => {
    console.error("[ERROR]", ...args);
  },
};
