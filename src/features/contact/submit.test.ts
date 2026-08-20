import assert from "node:assert/strict";
import { test } from "node:test";
import { submitContact } from "./submit";

const message = {
	name: "Ada",
	email: "ada@example.com",
	message: "hello",
};

test("submitContact sends mail when captcha passes", async () => {
	const sent: unknown[] = [];
	const result = await submitContact(message, "token", {
		captcha: { verify: async () => true },
		mail: {
			send: async (m) => {
				sent.push(m);
				return { rejected: [] };
			},
		},
	});
	assert.deepEqual(result, { success: true });
	assert.deepEqual(sent, [message]);
});

test("submitContact does not send mail when captcha fails", async () => {
	await assert.rejects(
		() =>
			submitContact(message, "bad", {
				captcha: { verify: async () => false },
				mail: {
					send: async () => {
						throw new Error("should not send");
					},
				},
			}),
		/error occurred while sending/,
	);
});

test("submitContact fails when mail rejects", async () => {
	await assert.rejects(
		() =>
			submitContact(message, "token", {
				captcha: { verify: async () => true },
				mail: { send: async () => ({ rejected: ["x"] }) },
			}),
		/Email not sent/,
	);
});
