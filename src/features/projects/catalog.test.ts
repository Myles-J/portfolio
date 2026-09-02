import assert from "node:assert/strict";
import { test } from "node:test";
import { caseStudyHref, caseStudyNeighbors, projectBySlug } from "./catalog";

test("caseStudyNeighbors wraps among case-study projects only", () => {
	assert.equal(caseStudyNeighbors("filmfever").previous?.slug, "pokedex");
	assert.equal(caseStudyNeighbors("filmfever").next?.slug, "gatherr");
	assert.equal(caseStudyNeighbors("gatherr").previous?.slug, "filmfever");
	assert.equal(caseStudyNeighbors("gatherr").next?.slug, "pokedex");
	assert.equal(caseStudyNeighbors("pokedex").previous?.slug, "gatherr");
	assert.equal(caseStudyNeighbors("pokedex").next?.slug, "filmfever");
});

test("catalog is the single github host", () => {
	assert.match(projectBySlug("gatherr")?.githubLink ?? "", /Myles-J/);
	assert.equal(caseStudyHref("gatherr"), "/case-study/gatherr");
});
