import { B } from "./local.namespace";
import { log } from "./dec";

console.log("A");

export class A{
    @log
    member: B;
}