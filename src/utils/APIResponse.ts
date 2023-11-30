"use strict";

import { MESSAGES } from "../config/constants";



export class APIResponse {

	/**
	 * @description you can un comment time as according to your need
	 * type is also deleted according to the need
	 */
	constructor(result: any) {
		let self: any = {};

		if (typeof result === "object" && result.hasOwnProperty("statusCode")
			// && result.hasOwnProperty("message")
		) {
			self = result ? result : "";
		} else {
			self = MESSAGES.SUCCESS.DEFAULT;
			self.data = result ? result : "";
		}

		return self;
	}
}