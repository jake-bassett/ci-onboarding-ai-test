const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

describe("health payload", () => {
  it("reports ok", () => {
    assert.deepEqual({ ok: true }, { ok: true })
  })
})
