/**
 * Created by amyqing719@gmail.com on 28/08/2018.
 */
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + person.lastName;
}

let user = new Student("alive", "~", "Amy");

document.body.innerHTML = greeter(user)