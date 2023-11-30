import { RedisManager } from "../../utils/redisMnager.utils";

class stringDataType {
  async data(query: object, payload: object) {
    try {
      const result = await RedisManager.redisChoice({ ...query, ...payload });
    } catch (error) {
        throw error;
    }
  }
}
export const StringDataType = new stringDataType();
