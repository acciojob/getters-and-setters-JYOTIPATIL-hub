//complete this code

// Do not change the code below this line
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        if (age >= 0) {
            this._age = age;
        } else {
            console.error("Age cannot be negative.");
        }
    }
}

class Student extends Person {
    study() {
        console.log(`${this._name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this._name} is teaching.`);
    }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.name); // Output: John
person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
