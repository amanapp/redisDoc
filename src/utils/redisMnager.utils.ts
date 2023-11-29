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
      case '17': {
        return await redisClient.hashSet(payload.key, payload.field, payload.value);
      }
      case '18': {
        return await redisClient.deleteHashField(payload.key, payload.field);
      }
      case '19': {
        return await redisClient.ExistFiledInHash(payload.key, payload.field);
      }
      case '20': {
        return await redisClient.GetHashField(payload.key, payload.field);
      }
      case '21': {
        return await redisClient.GetHash(payload.key);
      }
      case '22': {
        return await redisClient.IncreaseHashFieldVal(payload.key, payload.field, payload.increment);
      }
      case '23': {
        return await redisClient.IncreaseHashFieldFloatValue(payload.key, payload.field, payload.increment);
      }
      case '24': {
        return await redisClient.HashAllField(payload.key);
      }
      case '25': {
        return await redisClient.HashLength(payload.key);
      }
      case '26': {
        return await redisClient.GetMultipleFieldFromHash(payload.key, payload.field1, payload.field2, payload.field3);
      }
      case '27': {
        return await redisClient.GetRandomValuesFromHash(payload.key);
      }
      case '28': {
        return await redisClient.ScanHash(payload.key, payload.cursor);
      }
      case '29': {
        return await redisClient.HashFieldNotExist(payload.key, payload.field, payload.value);
      }
      case '30': {
        return await redisClient.HashFieldLength(payload.key, payload.field);
      }
      case '31': {
        return await redisClient.GetHashValues(payload.key);
      }
    }
  }
}

export const RedisManager = new redisManager();