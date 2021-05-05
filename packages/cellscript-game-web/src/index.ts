import { add } from "cellscript-util";
import { bar } from "cellscript-api";

export function quz(a: number, b: number): number {
  return bar(a, b) + 2 * add(a, b);
}
