// Import from Deno's standard library (asserts module)
import { assertEquals } from "https://deno.land/std@0.214.0/testing/asserts.ts";
import { add } from "./main.ts";

// Define a Deno test case
Deno.test("addTest", () => {
  assertEquals(add(2, 3), 5);
});
