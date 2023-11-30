import { redisClient } from "./redis";

export class redisManager {
  async redisChoice(payload: any) {
    switch (payload.choice) {
      case '1': {
        const respose = await redisClient.set(payload.key, payload.value);
        return respose;
      }
      case '2': {
        const respose = await redisClient.get(payload.key);
        return respose;
      }
      case '3': {
        const respose = await redisClient.append(payload.key, payload.value);
        return respose;
      }
      case '4': {
        const respose = await redisClient.decrease(payload.key);
        return respose;
      }
      case '5': {
        const respose = await redisClient.decreaseBy(payload.key, payload.decrement);
        return respose;
      }
      case '6': {
        const respose = await redisClient.getanddelete(payload.key);
        return respose;
      }
      case '7': {
        const respose = await redisClient.getByRange(payload.key, parseInt(payload.start), parseInt(payload.end));
        return respose;
      }
      case '8': {
        const respose = await redisClient.incr(payload.key);
        return respose;
      }
      case '9': {
        const respose = await redisClient.increaseBy(payload.key, payload.increment);
        return respose;
      }
      case '10': {
        const respose = await redisClient.lcs(payload.key1, payload.key2);
        return respose;
      }
      case '11': {
        const respose = await redisClient.multipleGet(payload.key1, payload.key2);
        return respose;
      }
      case '12': {
        const respose = await redisClient.multipleSet(payload.key1, payload.key2, payload.value1, payload.value2);
        return respose;
      }
      case '13': {
        const respose = await redisClient.multipleSetNotExist(payload.key1, payload.key2, payload.value1, payload.value2);
        return respose;
      }
      case '14': {
        const respose = await redisClient.setex(payload.key, payload.value, payload.expiresInSeconds);
        return respose;
      }

      case '15': {
        const respose = await redisClient.setByRange(payload.key, payload.value, payload.offset);
        return respose;
      }
      case '16': {
        const respose = await redisClient.getLength(payload.key);
        return respose;
      }
      case '17': {
        const respose = await redisClient.hashSet(payload.key, payload.field, payload.value);
        return respose;
      }
      case '18': {
        const respose = await redisClient.deleteHashField(payload.key, payload.field);
        return respose;
      }
      case '19': {
        const respose = await redisClient.ExistFiledInHash(payload.key, payload.field);
        return respose;
      }
      case '20': {
        const respose = await redisClient.GetHashField(payload.key, payload.field);
        return respose;
      }
      case '21': {
        const respose = await redisClient.GetHash(payload.key);
        return respose;
      }
      case '22': {
        const respose = await redisClient.IncreaseHashFieldVal(payload.key, payload.field, payload.increment);
        return respose;
      }
      case '23': {
        const respose = await redisClient.IncreaseHashFieldFloatValue(payload.key, payload.field, payload.increment);
        return respose;
      }
      case '24': {
        const respose = await redisClient.HashAllField(payload.key);
        return respose;
      }
      case '25': {
        const respose = await redisClient.HashLength(payload.key);
        return respose;
      }
      case '26': {
        const respose = await redisClient.GetMultipleFieldFromHash(payload.key, payload.field1, payload.field2, payload.field3);
        return respose;
      }
      case '27': {
        const respose = await redisClient.GetRandomValuesFromHash(payload.key);
        return respose;
      }
      case '28': {
        const respose = await redisClient.ScanHash(payload.key, payload.cursor);
        return respose;
      }
      case '29': {
        const respose = await redisClient.HashFieldNotExist(payload.key, payload.field, payload.value);
        return respose;
      }
      case '30': {
        const respose = await redisClient.HashFieldLength(payload.key, payload.field);
        return respose;
      }
      case '31': {
        const respose = await redisClient.GetHashValues(payload.key);
        return respose;
      }
      case '32': {
        const respose = await redisClient.ListPushHead(payload.key, payload.value);
        return respose;
      }
      case '33': {
        const respose = await redisClient.ListPushTail(payload.key, payload.value);
        return respose;
      }
      case '34': {
        const respose = await redisClient.ListPopHead(payload.key);
        return respose;
      }
      case '35': {
        const respose = await redisClient.ListPopTail(payload.key);
        return respose;
      }
      case '36': {
        const respose = await redisClient.ListLength(payload.key);
        return respose;
      }
      case '37': {
        const respose = await redisClient.ListLength(payload.key);
        return respose;
      }
      case '38': {
        const respose = await redisClient.ListMove(payload.source, payload.destination, payload.to, payload.from);
        return respose;
      }
      case '39': {
        const respose = await redisClient.ListRange(payload.key, payload.to, payload.from);
        return respose;
      }
      case '40': {
        const respose = await redisClient.ListTrim(payload.key, payload.start, payload.end);
        return respose;
      }
      case '41': {
        const respose = await redisClient.ListTrim(payload.key, payload.start, payload.end);
        return respose;
      }
      case '42': {
        const respose = await redisClient.ListAppend(payload.key, payload.element);
        return respose;
      }
      case '43': {
        const respose = await redisClient.ListSet(payload.key, payload.index, payload.element);
        return respose;
      }
      case '44': {
        const respose = await redisClient.ListElementRemove(payload.key, payload.count, payload.element);
        return respose;
      }
      case '45': {
        const respose = await redisClient.ListElementRemove(payload.key, payload.count, payload.element);
        return respose;
      }
      case '46': {
        const respose = await redisClient.ListAppendL(payload.key, payload.element);
        return respose;
      }
      case '47': {
        const respose = await redisClient.ListPosition(payload.key, payload.element, payload.rank, payload.count, payload.len);
        return respose;
      }
      case '48': {
        const respose = await redisClient.ListInsert(payload.key, payload.referance, payload.pivat, payload.element);
        return respose;
      }
      case '49': {
        const respose = await redisClient.ListIndex(payload.key, payload.index);
        return respose;
      }
      case '50': {
        const respose = await redisClient.ListBlmove(payload.source, payload.destination,payload.to,payload.from,payload.timeout);
        return respose;
      }
      case '51': {
        const respose = await redisClient.ListBlpop(payload.timeout,payload.key);
        return respose;
      }
      case '52': {
        const respose = await redisClient.ListBrpop(payload.timeout,payload.key);
        return respose;
      }
      case '55': {
        const respose = await redisClient.AddSet(payload.key, payload.value);
        return respose;
      }
      case '56': {
        const respose = await redisClient.SetCardinality(payload.key);
        return respose;
      }
      case '57': {
        const respose = await redisClient.DifferenceBtwSets(payload.key);
        return respose;
      }
      case '58': {
        const respose = await redisClient.StoreSetDifference(payload.key, payload.keys);
        return respose;
      }
      case '59': {
        const respose = await redisClient.SetIntersect(payload.key);
        return respose;
      }
      case '60': {
        const respose = await redisClient.SetIntersectStore(payload.key, payload.keys);
        return respose;
      }
      case '61': {
        const respose = await redisClient.IsSetMember(payload.key, payload.member);
        return respose;
      }
      case '62': {
        const respose = await redisClient.SetAllMember(payload.key);
        return respose;
      }
      case '63': {
        const respose = await redisClient.IsSetMembers(payload.key, payload.members);
        return respose;
      }
      case '64': {
        const respose = await redisClient.MoveSetMember(payload.source, payload.destination, payload.member);
        return respose;
      }
      case '65': {
        const respose = await redisClient.PopSetMember(payload.key, payload.option);
        return respose;
      }
      case '66': {
        const respose = await redisClient.SetRandomNumber(payload.key, payload.option);
        return respose;
      }
      case '67': {
        const respose = await redisClient.RemoveSpecificMemberFromSet(payload.key, payload.member);
        return respose;
      }
      case '68': {
        const respose = await redisClient.ScanSet(payload.key, payload.cursor);
        return respose;
      }
      case '69': {
        const respose = await redisClient.UnionOfSet(payload.key);
        return respose;
      }
      case '70': {
        const respose = await redisClient.StoreUnionOfSet(payload.key, payload.keys);
        return respose;
      }
    }
  }
}

export const RedisManager = new redisManager();