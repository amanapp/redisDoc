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
        port: parseInt(<string>SERVER.REDIS.PORT),
      },
    });
    this.client.on("error", (error: any) =>
      loggers.info(`${customMessage.REDIS_NOT_CONNECTED}`)
    );
  }

  async connect() {
    await this.client.connect();
    loggers.info(`${customMessage.REDIS_CONECTED}`);
  }
  async set(key: any, value: any, option?: any){
    try{
      const result = await this.client.set(key, value, option);
      return result;
    }
    catch(error){
      throw error;
    }
  }
  async get(key: string){
    try{
      const result = await this.client.get(key);
      return result;
    }
    catch(error){
      throw error;
    }
    };

  async ttl(key: string) {
    try{
      const result = await this.client.ttl(key);
      return result;
    }
    catch(error){
      throw error
    }
  }
  async incr(key: string) {
    try{
      const result = await this.client.incr(key);
      return result;
    }
    catch(error){
      throw error;
    }
  }
  async append(key: any, value: any) {
    try{
      const result = await this.client.append(key,` ${value}`)
      return result;
    }
    catch(error){
      throw error;
    }
  }
  async decrease(key: string) {
    try{
      const result = await this.client.decr(key)
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async decreaseBy(key: string, decrement: any) {
    try{
      const result = await this.client.DECRBY(key, decrement);
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async getanddelete(key: string) {
    try{
      const result = await this.client.GETDEL(key)
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async getByRange(key: string, start: number, end: number) {
    try{
      const result = await this.client.GETRANGE(key, start, end)
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async increaseBy(key: string, increment: number) {
    try{
      const result = await this.client.INCRBY(key, increment)
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async lcs(key1: string, key2: string) {
    try{
      const result = await this.client.lcs(key1, key2);
      return result;
    }
    catch(error){
      throw error;
    }
  }

  async multipleGet(key1: string, key2: string) {
    try {
      let arr = [];
      arr.push(key1);
      arr.push(key2);
      const result = await this.client.MGET(key1, key2)
      return result;
    } 
    catch (error) {
      throw error;
    }
    
  }

  async multipleSet(key1: string, key2: string, value1: any, value2: any) {
    try {
      let arr = [];
      arr.push(key1);
      arr.push(value1);
      arr.push(key2);
      arr.push(value2);
      const result = await this.client.MSET(arr);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async multipleSetNotExist(
    key1: string,
    key2: string,
    value1: any,
    value2: any
  ) {
    try {
      let arr = [];
      arr.push(key1);
      arr.push(value1);
      arr.push(key2);
      arr.push(value2);
      const result = await this.client.MSETNX(arr);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async setex(key: string, value: any, expiresInSeconds: number) {
    try {
      const result = await this.client.SETEX(key,expiresInSeconds,value)
      return result;
    } catch (error) {
      throw error;
    }
  }

  async setByRange(key: string, value: any, offset: number) {
    try {
      const result = await this.client.SETRANGE(key, offset, value);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLength(key: string) {
    try {
      const result = await this.client.STRLEN(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async hashSet(key: string, field: any, val: any) {
    try {
      const result = await this.client.HSET(key, field, val);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteHashField(key: string, field: any) {
    try {
      const result = await this.client.HDEL(key, field);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async ExistFiledInHash(key: string, field: any) {
    try {
      const result = await this.client.HEXISTS(key, field);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async GetHashField(key: string, field: any) {
    try {
      const result = await this.client.HGET(key, field);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async GetHash(key: string) {
    try {
      const result = await this.client.HGETALL(key);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async IncreaseHashFieldVal(key: string, field: any, increment: any) {
    try {
      const result = await this.client.HINCRBY(key,field,increment)
      return result;
    } catch (error) {
      throw error;
    }
  }

  async IncreaseHashFieldFloatValue(key: string, field: any, increment: any) {
    try {
      const result = await this.client.HINCRBYFLOAT(key,field,increment);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async HashAllField(key: string) {
    try {
      const result = await this.client.HKEYS(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async HashLength(key: string) {
    try {
      const result = await this.client.HLEN(key);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async GetMultipleFieldFromHash(
    key: string,
    field1: string,
    field2: string,
    field3: string
  ) {
    try {
      let arr = [];
      arr.push(field1);
      arr.push(field2);
      arr.push(field3);
      const result = await this.client.HMGET(key, arr);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async GetRandomValuesFromHash(key: string) {
    try {
      const result = await this.client.HRANDFIELD(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ScanHash(key: string, cursor: number) {
    try {
      const result = await this.client.HSCAN(key, cursor);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async HashFieldNotExist(key: string, field: any, value: any) {
    try {
      const result = await this.client.HSETNX(key, field, value);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async HashFieldLength(key: string, field: any) {
    try {
      const result = await this.client.HSTRLEN(key, field);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async GetHashValues(key: string) {
    try {
      const result = await this.client.HVALS(key);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListPushHead(key: string, value: any) {
    try {
      const result = await this.client.LPUSH(key, value);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListPushTail(key: string, value: string) {
    try {
      const result = await this.client.RPUSH(key, value);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListPopHead(key: string) {
    try {
      const result = await this.client.LPOP(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async AddSet(key: string, value: any) {
    try {
      const result = await this.client.SADD(key, value);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async ListPopTail(key: string) {
    try {
      const result = await this.client.RPOP(key);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async SetCardinality(key: string) {
    try {
      const result = await this.client.SCARD(key);
      return result;
    } catch (error) {
      throw error;
    }
    
  }
  async ListLength(key: string) {
    try {
      const result = await this.client.LLEN(key);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async DifferenceBtwSets(key: any) {
    try {
      const result = await this.client.SDIFF(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListMove(
    source: string,
    destination: string,
    to: string,
    from: string
  ) {
    try {
      const result = await this.client.LMOVE(source,destination,to,from);
      return result;
    } catch (error) {
      throw error;
    }
  }


  async StoreSetDifference(key: any, keys: any) {
    try {
      const result = await this.client.SDIFFSTORE(key, keys);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async SetIntersect(key: any) {
    try {
      const result = await this.client.SINTER(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async SetIntersectStore(key: any, keys: any) {
    try {
      const result = await this.client.SINTERSTORE(key, keys);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async IsSetMember(key: any, member: any) {
    try {
      const result = await this.client.SISMEMBER(key, member);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async SetAllMember(key: any) {
    try {
      const result = await this.client.SMEMBERS(key);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async IsSetMembers(key: any, members: any) {
    try {
      const result = await this.client.SMISMEMBER(key, members);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async MoveSetMember(source: any, destination: any, member: any) {
    try {
      const result = await this.client.SMOVE(source, destination, member);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async PopSetMember(key: any, option?: any) {
    try {
      if (option) {
        const result = await this.client.SPOP(key, option.count)
        return result;
      }
      else {
        const result = await this.client.SPOP(key)
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async ListRange(key: string, to: number, from: number) {
    try {
      const result = await this.client.LRANGE(key, to, from);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async SetRandomNumber(key: any, option?: any) {
    try {
      if (option) {
        const result = await this.client.SRANDMEMBER(key, option.count)
        return result;
      }
      else {
        const result = await this.client.SRANDMEMBER(key)
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async RemoveSpecificMemberFromSet(key: any, member: any) {
    try {
      const result = await this.client.SREM(key, member);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListTrim(key: string, start: number, end: number) {
    try {
      const result = await this.client.LTRIM(key, start, end);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ScanSet(key: any, cursor: any) {
    try {
      const result = await this.client.SSCAN(key, cursor);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListAppend(key: string, element: object) {
    try {
      const result = await this.client.RPUSHX(key, element);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async UnionOfSet(key: any) {
    try {
      const result = await this.client.SUNION(key);;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListSet(key: string, index: string, element: string) {
    try {
      const result = await this.client.LSET(key, index, element);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListElementRemove(key: string, count: string, element: string) {
    try {
      const result = await this.client.LREM(key, count, element);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListAppendL(key: string, element: object) {
    try {
      const result = await this.client.LPUSHX(key, element);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListPosition(key: string, element: string, rank: string, count: string, len: string) {
    try {
      const result = await this.client.LPOS(key, element, rank, count, len);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListInsert(key: string, referance: string, pivat: string, element: string) {
    try {
      const result = await this.client.LINSERT(key, referance, pivat, element);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListIndex(key: string, index: string) {
    try {
      const result = await this.client.LINDEX(key, index);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ListBlmove(source: string, destination: string,to:string,from:string,timeout:string) {
    try {
      const result = await this.client.BLMOVE(source, destination,to,from,timeout);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async ListBlpop(timeout: number,key:object) {
    try {
      const result = await this.client.BLPOP(key,timeout);
      return result;
    } catch (error) {
      throw error;
    }
  }
  /** @description pop element in list
   * @description 
   * @param timeout 
   * @param key 
   * @returns 
   */
  async ListBrpop(timeout: number,key:object) {
    try {
      const result = await this.client.BRPOP(key,timeout);
      return result;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description store the union of sets in new set
   * @param key 
   * @param keys 
   * @returns 
   */
  async StoreUnionOfSet(key: any, keys: any) {
    try {
      const result = await this.client.SUNIONSTORE(key, keys);
      return result;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description store the geospatial value
   * @param key 
   * @param data 
   * @returns 
   */
 async geoAdd(key :string ,data:object ){
  try {
    const result = await this.client.GEOADD(key, data);
    return result;
  } catch (error) {
    throw error;
  }
 }
 /**
  * @description compare to member geospatial location value 
  * @param key 
  * @param member1 
  * @param member2 
  * @param optional 
  * @returns 
  */
 async geoDist(key :string ,member1:string,member2:string,optional:string ){
  try {
    const result = await this.client.GEODIST(key, member1,member2,optional);
    return result;
  } catch (error) {
    throw error;
  }
 }
 /**
  * @description compare to member geospatial location value and give result in hash value
  * @param key 
  * @param member 
  * @returns 
  */
 async geoHash(key :string ,member:object ){
  try {
    const result = await this.client.GEOHASH(key, member);
    return result;
  } catch (error) {
    throw error;
  }
 }
 /**
  * @discription give  member geospatial location value
  * @param key 
  * @param member 
  * @returns 
  */
 async geoPos(key :string ,member:object ){
  try {
    const result = await this.client.GEOPOS(key, member);
    return result;
  } catch (error) {
    throw error;
  }
 }
 /**
  * @discription seraching in geospatial location
  * @param key 
  * @param longitude 
  * @param latitude 
  * @param radius 
  * @param unit 
  * @returns  result in arary 
  */
 async geoSearch(key :string ,longitude:string, latitude:string,radius:string,unit:string){
  try {
    const result = await this.client.GEOSEARCH(key, 
      {
      longitude,latitude,
    },{
      radius,unit
    });
    return result;
  } catch (error) {
    throw error;
  }
 }
 async bitmapSetbit(key :string ,offset:string,value:string){
  try {
    const result = await this.client.SETBIT(key,offset,value);
    return result;
  } catch (error) {
    throw error;
  }
 }
 async bitmapGetbit(key :string ,offset:string){
  try {
    const result = await this.client.GETBIT("kites","7");
    return result;
  } catch (error) {
    throw error;
  }
 }
 async bitmapBitcount(key :string ,start:string,end:string,form:string){
  try {
    const result = await this.client.BITCOUNT(key,start,end,form);
    return result;
  } catch (error) {
    throw error;
  }
 }
 async bitmapBittop(operater:string,destkey:string,key:object){
  try {
    const result = await this.client.BITOP(operater,destkey,key);
    return result;
  } catch (error) {
    throw error;
  }
 }
 async sorted_setZAdd(key:string,score:string,member:string){
  try {
    console.log(member);
    const result = await this.client.ZADD('keyabcd',[score,'member']);
    return result;
  } catch (error) {
    throw error;
  }
 }
}
export const redisClient = new RedisClient();
