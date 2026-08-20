import assert from "node:assert/strict";
import { test } from "node:test";
import { roles, rolesNewestFirst } from "./roles";

test("rolesNewestFirst is reverse of chronological roles", () => {
	const newest = rolesNewestFirst();
	assert.equal(newest[0]?.company, "bet365");
	assert.equal(newest.at(-1)?.company, "Viaero Wireless");
	assert.equal(newest.length, roles.length);
});
