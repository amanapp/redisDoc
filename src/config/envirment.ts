export const SERVER = Object.freeze({
  API_BASE_URL:'/api',
  REDIS: {
    HOST: process.env.REDIS_HOST,
    // PORT: process.env.REDIS_PORT,
    PORT: '6379',
    DB: process.env["REDIS_DB"],
  },
});
export const enum customMessage {
  REDIS_CONECTED = "REDIS_CONECTED_SUCCESSFULLY",
  REDIS_NOT_CONNECTED = "REDIS_NOT_CONNECTED",
}
