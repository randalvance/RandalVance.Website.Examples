class Greeter {

    constructor(private greeting: string, private name: string) {
    }

    greet () {
        console.log(`${this.greeting}, ${this.name}!`);
    }
}

var greeter: Greeter = new Greeter('Hello', 'TypeScript');

greeter.greet();