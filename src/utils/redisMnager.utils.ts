import { redisClient } from "./redis";

export class redisManager {
  async redisChoice(payload: any) {
    console.log("Payload&&&&&&&&", payload);
    switch (payload.choice) {
      case '1': {
        return await redisClient.set(payload.key, payload.value);
      }
      case '2': {
        return await redisClient.get(payload.key);
      }
      case '3': {
        return await redisClient.append(payload.key, payload.value);
      }
      case '4': {
        return await redisClient.decrease(payload.key);
      }
      case '5': {
        return await redisClient.decreaseBy(payload.key, payload.decrement);
      }
      case '6': {
        return await redisClient.getanddelete(payload.key);
      }
      case '7': {
        return await redisClient.getByRange(payload.key, parseInt(payload.start), parseInt(payload.end));
      }
      case '8': {
        return await redisClient.incr(payload.key);
      }
      case '9': {
        return await redisClient.increaseBy(payload.key, payload.increment);
      }
      case '10': {
        return await redisClient.lcs(payload.key1, payload.key2);
      }
      case '11': {
        return await redisClient.multipleGet(payload.key1, payload.key2);
      }
      case '12': {
        return await redisClient.multipleSet(payload.key1, payload.key2, payload.value1, payload.value2);
      }
      case '13': {
        return await redisClient.multipleSetNotExist(payload.key1, payload.key2, payload.value1, payload.value2);
      }
      case '14': {
        return await redisClient.setex(payload.key, payload.value, payload.expiresInSeconds);
      }

      case '15': {
        return await redisClient.setByRange(payload.key, payload.value, payload.offset);
      }
      case '16': {
        return await redisClient.getLength(payload.key);
      }
    }
  }
}

export const RedisManager = new redisManager();