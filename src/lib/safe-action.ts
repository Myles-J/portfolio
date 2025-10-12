import {
	createSafeActionClient,
	DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import * as z from "zod";
export const safeAction = createSafeActionClient({
	handleServerError(e) {
		if (e instanceof Error) {
			return e.message;
		}

		return DEFAULT_SERVER_ERROR_MESSAGE;
	},
	defineMetadataSchema() {
		return z.object({
			actionName: z.string(),
		});
	},
	defaultValidationErrorsShape: "flattened",
}).use(async ({ next, clientInput, metadata }) => {
	console.log("LOGGING MIDDLEWARE");

	const startTime = performance.now();

	// Here we await the action execution.
	const result = await next();
	const endTime = performance.now();

	console.log("Result ->", result);
	console.log("Client input ->", clientInput);
	console.log("Metadata ->", metadata);
	console.log("Action execution took", endTime - startTime, "ms");

	// And then return the result of the awaited action.
	return result;
});
