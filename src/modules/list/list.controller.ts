import { MESSAGES } from "../../config/constants";
import { RedisManager } from "../../utils/redisMnager.utils";

class listDataType {
  async data(query: object, payload: object) {
    try {
      const result = await RedisManager.redisChoice({ ...query, ...payload });
      console.log(result);
      return MESSAGES.SUCCESS.DETAILS(result);
    } catch (error) {
        throw error;
    }
  }
}
export const ListDataType = new listDataType();
