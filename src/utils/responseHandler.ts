import _ from "lodash";
const Boom = require('boom');
import { Request, ResponseToolkit } from "@hapi/hapi";
import { loggers } from "../lib/logger";
import { APIResponse } from "./APIResponse";



export class ResponseHandler {

	constructor() { }

	_sendResponse(h: ResponseToolkit, result: any) {
		// send status code 200 and 201
		return h.response(result);
	}

	sendError(request: Request | any, error: any) {
		if (!error.statusCode) {
			// console.log("ERROR OCCURED=========>", error);
			loggers.error("Unhandled error=======>", error);
		}
		let errorToSend;
		if (error.statusCode) { // handled error
			if (
				!_.isEmpty(request) &&
				error.type !== "ERROR" &&
				error.type !== "FIELD_REQUIRED"
			) {
				error.message = request;
			}
			if (!error.output) {
				errorToSend = Boom.badRequest(error);
				errorToSend.output.statusCode = error.statusCode;
				errorToSend.output.payload = {
					...error
				};
			} else {
				// errorToSend = error.output.payload;
				errorToSend = Boom.badRequest(errorToSend);
				errorToSend.output.statusCode = error.output.statusCode;
				errorToSend.output.payload = {
					...error.output.payload
				};
			}
		} else { // unhaldled error
			errorToSend = Boom.badRequest(error);
		}
		return errorToSend;
	}

	sendSuccess(h: ResponseToolkit, result: any) {
		result = new APIResponse(result);
		return this._sendResponse(h, result);
	}
}

export const responseHandler = new ResponseHandler();