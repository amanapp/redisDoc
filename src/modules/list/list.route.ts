import { ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { SERVER } from "../../config/envirment";
import { loggers } from "../../lib/logger";
import { Conditions } from "../../utils/conditions.utils";
import { ListDataType } from "./list.controller";

export const listRoute: ServerRoute[] = [
  {
    /**
     * @discription Get all api Description
     */
    method: "GET",
    path: `${SERVER.API_BASE_URL}/list`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        return h.response({ message: Conditions, statusCode: 200 }).code(200);
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
    path: `${SERVER.API_BASE_URL}/list`,
    handler: async (request: Request | any, h: ResponseToolkit) => {
      try {
        const payload: any = request.payload;
        const query: any = request.query;
        const result = await ListDataType.data(query, payload);
        return h
          .response({
            message: " sucessfull operation perform ",
            statusCode: 200,
          })
          .code(200);
      } catch (error: any) {
        loggers.error(error);
        return h.response({ error: "error", statusCode: 500 }).code(500);
      }
    },
  },
];
