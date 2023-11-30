import { RedisManager } from "../../utils/redisMnager.utils";

class listDataType {
  async data(query: object, payload: object) {
    try {
      const result = await RedisManager.redisChoice({ ...query, ...payload });
    } catch (error) {
        throw error;
    }
  }
}
export const ListDataType = new listDataType();
