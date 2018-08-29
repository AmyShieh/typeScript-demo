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

let freeList: any = ""

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