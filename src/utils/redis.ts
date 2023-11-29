import { createClient } from "redis";
import { loggers } from "../lib/logger";
import { SERVER, customMessage } from "../config/envirment";
// import { customMessage } from "../config/constant";

class RedisClient {
  public client: any;
  constructor() {
    this.client = createClient({
      socket: {
        host: SERVER.REDIS.HOST,
        port: parseInt(<string>SERVER.REDIS.PORT)
      },
    });
    this.client.on("error", (error: any) => loggers.info(`${customMessage.REDIS_NOT_CONNECTED}`));
  }

  async connect() {
    await this.client.connect();
    loggers.info(`${customMessage.REDIS_CONECTED}`)

  }
  async set(key: any, value: any, option?: any): Promise<any> {
    return await this.client.set(key, value, option);
  }
  async get(key: string): Promise<any> {
    return await this.client.get(key);
  }
  async ttl(key: string): Promise<any> {
    return await this.client.ttl(key);
  }
  async incr(key: string, option?: any): Promise<any> {
    const result = await this.client.incr(key);

    if (option && option.ttl) {
      await this.client.expire(key, option.ttl);
    }

    return result;
  }
  async append(key: any, value: any) {
    return await this.client.append(key, ` ${value}`, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }
  async decrease(key: string) {
    return this.client.decr(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async decreaseBy(key: string, decrement: any) {
    return this.client.DECRBY(key, decrement, (err: any, reply: any) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(reply);
      }
    });
  }

  async getanddelete(key: string) {
    return this.client.GETDEL(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async getByRange(key: string, start: number, end: number) {
    return this.client.GETRANGE(key, start, end, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async increaseBy(key: string, increment: number) {
    return this.client.INCRBY(key, increment, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async lcs(key1: string, key2: string) {
    return this.client.lcs(key1, key2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async multipleGet(key1: string, key2: string) {
    let arr = [];
    arr.push(key1);
    arr.push(key2);
    return this.client.MGET(key1, key2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async multipleSet(key1: string, key2: string, value1: any, value2: any) {
    let arr = [];
    arr.push(key1);
    arr.push(value1);
    arr.push(key2);
    arr.push(value2);
    return this.client.MSET(arr, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async multipleSetNotExist(key1: string, key2: string, value1: any, value2: any) {
    let arr = [];
    arr.push(key1);
    arr.push(value1);
    arr.push(key2);
    arr.push(value2);
    return this.client.MSETNX(arr, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async setex(key: string, value: any, expiresInSeconds: number) {
    return this.client.SETEX(key, expiresInSeconds, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async setByRange(key: string, value: any, offset: number) {
    return this.client.SETRANGE(key, offset, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async getLength(key: string) {
    return this.client.STRLEN(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async hashSet(key: string, field: any, val: any) {
    return this.client.HSET(key, field, val, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async deleteHashField(key: string, field: any) {
    return this.client.HDEL(key, field, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async ExistFiledInHash(key: string, field: any) {
    return this.client.HEXISTS(key, field, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async GetHashField(key: string, field: any) {
    return this.client.HGET(key, field, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async GetHash(key: string) {
    return this.client.HGETALL(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async IncreaseHashFieldVal(key: string, field: any, increment: any) {
    return this.client.HINCRBY(key, field, increment, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async IncreaseHashFieldFloatValue(key: string, field: any, increment: any) {
    return this.client.HINCRBYFLOAT(key, field, increment, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async HashAllField(key: string) {
    return this.client.HKEYS(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async HashLength(key: string) {
    return this.client.HLEN(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async GetMultipleFieldFromHash(key: string, field1: string, field2: string, field3: string) {
    let arr = [];
    arr.push(field1);
    arr.push(field2);
    arr.push(field3);
    return this.client.HMGET(key, arr, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async GetRandomValuesFromHash(key: string) {
    return this.client.HRANDFIELD(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async ScanHash(key: string, cursor: number) {
    return this.client.HSCAN(key, cursor, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async HashFieldNotExist(key: string, field: any, value: any) {
    return this.client.HSETNX(key, field, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async HashFieldLength(key: string, field: any) {
    return this.client.HSTRLEN(key, field, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async GetHashValues(key: string) {
    return this.client.HVALS(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async AddSet(key: string, value: any) {
    return this.client.SADD(key, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async SetCardinality(key: string) {
    return this.client.SCARD(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async DifferenceBtwSets(key: any) {
    return this.client.SDIFF(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async StoreSetDifference(key: any, keys: any) {
    return this.client.SDIFFSTORE(key, keys, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async SetIntersect(key: any) {
    return this.client.SINTER(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async SetIntersectStore(key: any, keys:any) {
    return this.client.SINTERSTORE(key, keys, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async IsSetMember(key: any, member:any) {
    return this.client.SISMEMBER(key, member, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async SetAllMember(key: any) {
    return this.client.SMEMBERS(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async IsSetMembers(key: any, members: any) {
    return this.client.SMISMEMBER(key, members, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async MoveSetMember(source: any, destination:any, member: any) {
    return this.client.SMOVE(source, destination, member, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async PopSetMember(key: any, option?: any) {
    if(option){
      return this.client.SPOP(key, option.count, (err: any, reply: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    }
    else{
      return this.client.SPOP(key, (err: any, reply: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    }
  }

  async SetRandomNumber(key: any, option?: any) {
    if(option){
      return this.client.SRANDMEMBER(key, option.count, (err: any, reply: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    }
    else{
      return this.client.SRANDMEMBER(key, (err: any, reply: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    }
  }

  async RemoveSpecificMemberFromSet(key: any, member: any) {
    return this.client.SREM(key, member, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async ScanSet(key: any, cursor: any) {
    return this.client.SSCAN(key, cursor, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async UnionOfSet(key: any) {
    return this.client.SUNION(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

  async StoreUnionOfSet(key: any, keys: any) {
    return this.client.SUNIONSTORE(key, keys, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    });
  }

}
export const redisClient = new RedisClient();
