import { ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { SERVER } from "../../config/envirment";
import { loggers } from "../../lib/logger";
import { Conditions } from "../../utils/conditions.utils";
import { responseHandler } from "../../utils/responseHandler";
import { BitmapDataType } from "./bitmap.controller";

export const bitmapRoute: ServerRoute[] = [
  {
    /**
     * @discription Get all api Description
     */
    method: "GET",
    path: `${SERVER.API_BASE_URL}/bitmap`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        // return h.response({ message: Conditions.bitmap, statusCode: 200 }).code(200);
      } catch (error: any) {
        loggers.error(error);
        return responseHandler.sendError(request, error);
      }
    },
  },

  {
    /**
     * @discription apply all api operation
     */
    method: "POST",
    path: `${SERVER.API_BASE_URL}/bitmap`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        const payload: any = request.payload;
        const query: any = request.query;
        const result = await BitmapDataType.data(query, payload);
        return responseHandler.sendSuccess(h, result);
      } catch (error: any) {
        loggers.error(error);
        return responseHandler.sendError(request, error);
      }
    },
  },
];
