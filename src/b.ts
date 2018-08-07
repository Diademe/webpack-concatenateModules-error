import { A } from "./local.namespace";
import { log } from "./dec";

console.log("B");

export class B {
    @log
    member: A;
}