import { add } from "@cellscript/util";

export function subtract(a: number, b: number): number {
  return add(a, -b);
}
