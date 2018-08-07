import { B } from "./local.namespace";
import { log } from "./dec";

console.log("A");

export class A{
    @log(() => B)
    static member: B = new B();
}