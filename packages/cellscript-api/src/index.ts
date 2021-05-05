import { add } from "cellscript-util";
import { foo } from "cellscript-engine";

export function bar(a: number, b: number) {
  return foo(a, b) + add(a, b);
}
