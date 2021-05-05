import { add } from "cellscript-util";
import { multiply } from "cellscript-redux";

export function foo(a: number, b: number): number {
  return multiply(a, b) - add(a, b);
}
