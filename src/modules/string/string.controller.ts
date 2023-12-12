import { MESSAGES } from "../../config/constants";
import { RedisManager } from "../../utils/redisMnager.utils";

class stringDataType {
  async getData(query: object) {
    try {
      const result = await RedisManager.redisChoice({ ...query });
      return MESSAGES.SUCCESS.DETAILS(result);
    } catch (error) {
      throw error;
    }
  }
  async data(query: object, payload: object) {
    try {
      const result = await RedisManager.redisChoice({ ...query, ...payload });
      return MESSAGES.SUCCESS.DETAILS(result);
    } catch (error) {
      throw error;
    }
  }
}
export const StringDataType = new stringDataType();
