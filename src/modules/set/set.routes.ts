import { ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { SERVER } from "../../config/envirment";
import { loggers } from "../../lib/logger";
import { Conditions } from "../../utils/conditions.utils";
import { SetDataType } from "./set.controller";
import { responseHandler } from "../../utils/responseHandler";

export const setRoute: ServerRoute[] = [
  {
    /**
     * @discription Get all api Description
     */
    method: "GET",
    path: `${SERVER.API_BASE_URL}/set`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        return h.response({ message: Conditions.set, statusCode: 200 }).code(200);
      } catch (error: any) {
        loggers.error(error);
        return h.response({ error: "error", statusCode: 500 }).code(500);
      }
    },
  },

  {
    /**
     * @discription apply all api operation
     */
    method: "POST",
    path: `${SERVER.API_BASE_URL}/set`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        const payload: any = request.payload;
        const query: any = request.query;
        const result = await SetDataType.data(query, payload);
        return responseHandler.sendSuccess(h, result);
      } catch (error: any) {
        loggers.error(error);
        return responseHandler.sendError(request, error);
      }
    },
  },
];
