import * as cowsay from "cowsay"

export default function sayHello(name: string){
    let output: string = cowsay.say({ text: `Hello ${name}!` });
    console.log(output);
}