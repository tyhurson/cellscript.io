import { add } from "@cellscript/util";

export function multiply(a: number, b: number): number {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = add(result, a);
  }
  return result;
}
