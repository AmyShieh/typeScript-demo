// import * as React from 'react';
// export interface HelloProps {
//     compiler: string;
//     framework: string;
// }
//
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and { props.framework }</h1>

import * as React from "react";

let isDone: boolean = false;
let decimal: number = 7;
let color: string = "skyblue";
let list: Array<number> = [7,1,9];
let list1: number[] = [1,9,9,4];
let mixture: [string, number];
mixture = ['aliveAmy', 24];
mixture[2] = "keepAlive";

enum Color { Red, Green, Blue}
let c: Color = Color.Blue;

let notSure: any = 4;
notSure = "maybe a string instead.";

let freeList: any[] = ["alive", "amy", 24];
freeList[1] = "amyShieh";

function warnUser(): void {
    console.log("this is my warning message");
}

let unusable: void = undefined;

let unusable1: void = null;

let u: undefined = undefined;
let n: null = null;

// function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// function returing never must have unreachable end point
function infiniteLoop(): never {
    while(true) {

    }
}

// object is a type that represent the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined.
// With object type, APIs like Object.create can be better represented. For example:

declare function create(o: object | null): void;
create({ prop: 0 }); //ok
create(null); //ok

// create(42) // error
// create("string") //Error
// create(false); //Error
// create(undefined) //Error

// Type assertions
// Sometimes you'll end up in a situation where you'll know more about a value than typescript does.
// Usually this will happen when you know the type of some entity could be more special than its current type.
// Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
// A type assertions is like a type cast in other languages, but performs no special checking or restructuring of data.
// It has no runtime impact, and is used purely by the compiler.
// Typescript assumes that you, the programmer, have performed any special checks that you need.

// Type assertions have two forms.
// One is the "angle-bracket" syntax:

let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// 不知道该行为什么报错， 先做完最后再来回顾
// 注解：The two samples are equivalent, Using one over the other is mostly a choice of preference;
// however, when using TypeScript with JSX, only as -style assertions are allowed.


{/*and the other is the as - syntax*/}

let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;


export interface HelloProps {compiler: string; framework: string;}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        console.log(c);
        return (
            <div>
                <p style={{ color }}>{isDone ? "ture" : 'false'}</p>
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
            </div>
        )
    }
}