import { createClient } from "redis";
import { loggers } from "../lib/logger";
import { SERVER, customMessage } from "../config/envirment";
// import { customMessage } from "../config/constant";

class RedisClient {
 public client:any;
  constructor() {
    this.client = createClient({
      socket: {
          host: SERVER.REDIS.HOST,
          port: parseInt(<string>SERVER.REDIS.PORT)
      },
  });
    this.client.on("error", (error:any) => loggers.info(`${customMessage.REDIS_NOT_CONNECTED}`));
  }

  async connect() {
    await this.client.connect();
    loggers.info(`${customMessage.REDIS_CONECTED}`)

  }
  async set(key: any, value: any,option?:any):Promise<any>  {
    return await this.client.set(key, value,option);
  }
  async get(key: string):Promise<any> {
    return await this.client.get(key);
  }
  async ttl(key: string):Promise<any> {
    return await this.client.ttl(key);
  }
  async incr(key: string, option?: any): Promise<any> {
    const result = await this.client.incr(key);
  
    if (option && option.ttl) {
      await this.client.expire(key, option.ttl);
    }
  
    return result;
  }
  async append(key: any, value: any){
    return await this.client.append(key,` ${value}`, (err: any, reply: any)=> {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }
  async decrease(key:string){
    return this.client.decr(key,(err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async decreaseBy(key:string, decrement: number){
    return this.client.decrby(key, decrement, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async getanddelete(key:string){
    return this.client.getdel(key, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }
  
  async getByRange(key: string, start: number, end: number){
    return this.client.getrange(key, start, end, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); // Should log "is is a"
        this.client.quit(); // Close the Redis connection
      }
    });
  }

  async increaseBy(key:string, increment: number){
    return this.client.incrby(key, increment, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async lcs(key1:string, key2: string){
    return this.client.lcs(key1, key2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async multipleGet(key1:string, key2: string){
    return this.client.mget(key1, key2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async multipleSet(key1:string, key2: string, value1: any, value2: any){
    return this.client.mset(key1, value1, key2, value2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async multipleSetNotExist(key1:string, key2: string, value1: any, value2: any){
    return this.client.msetnx(key1, value1, key2, value2, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async setex(key:string, value:any, expiresInSeconds: number){
    return this.client.setex(key, expiresInSeconds, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async setByRange(key:string, value:any, offset: number){
    return this.client.setrange(key, offset, value, (err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

  async getLength(key:string){
    return this.client.strlen(key,(err: any, reply: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply); 
        this.client.quit(); 
      }
    });
  }

}
export const redisClient = new RedisClient();
