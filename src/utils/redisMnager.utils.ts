import { redisClient } from "./redis";

export class redisManager {
  async redisChoice(payload: any) {
    console.log("Payload&&&&&&&&", payload);
    switch (payload.choice) {
      case '1': {
        return await redisClient.set(payload.key, payload.value);
        break;
      }
      case '2': {
        return await redisClient.get(payload.key);
        break;
      }
      case '3': {
        return await redisClient.append(payload.key, payload.value);
        break;
      }
      case '4': {
        return await redisClient.decrease(payload.key);
        break;
      }
      case '5': {
        return await redisClient.decreaseBy(payload.key, payload.decrement);
        break;
      }
      case '6': {
        await redisClient.getanddelete(payload.key);
        break;
      }
      case '7': {
        await redisClient.getByRange(payload.key, payload.start, payload.end);
        break;
      }
      case '8': {
        await redisClient.incr(payload.key);
        break;
      }
      case '9': {
        await redisClient.increaseBy(payload.key, payload.increment);
        break;
      }
      case '10': {
        await redisClient.lcs(payload.key1, payload.key2);
        break;
      }
      case '11': {
        await redisClient.multipleGet(payload.key1, payload.key2);
        break;
      }
      case '12': {
        await redisClient.multipleSet(payload.key1, payload.key2, payload.value1, payload.value2);
        break;
      }
      case '13': {
        await redisClient.multipleSetNotExist(payload.key1, payload.key2, payload.value1, payload.value2);
        break;
      }
      case '14': {
        await redisClient.setex(payload.key, payload.value, payload.expiresInSeconds);
        break;
      }

      case '15': {
        await redisClient.setByRange(payload.key, payload.value, payload.offset);
        break;
      }
      case '16': {
        await redisClient.getLength(payload.key);
        break;
      }
    }
  }
}

export const RedisManager = new redisManager();