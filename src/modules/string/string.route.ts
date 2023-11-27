import { ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { SERVER } from "../../config/envirment";
import { loggers } from "../../lib/logger";
import { RedisManager } from "../../utils/redisMnager.utils";
import { Conditions } from "../../utils/conditions.utils";

export const stringRoute: ServerRoute[] = [ {
  /**
   * @discription 
   */
  method: "GET",
  path: `${SERVER.API_BASE_URL}`,
  handler: async (request: Request | any, h: ResponseToolkit) => {
    try {
      return h.response({message:Conditions,statusCode:200}).code(200);

    } catch (error:any) {
     loggers.error(error);
     return h.response({error:'error' ,statusCode:500}).code(500);
    }
  },
},

  {
    /**
     * @discription 
     */
    method: "POST",
    path: `${SERVER.API_BASE_URL}/set`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        const payload:any = request.payload;
        const query:any = request.query;
        loggers.info(`data payload :: ${payload}`);
        const result = await RedisManager.redisChoice({...query, ...payload})
        console.log(result);
        loggers.info(`result info :: ${result}`);
        return h.response({message:'Add data sucessfully !!' ,statusCode:200}).code(200);

      } catch (error:any) {
       loggers.error(error);
       return h.response({error:'error' ,statusCode:500}).code(500);
      }
    },
  },
];
