// Define the Person class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(newAge) {
        this._age = newAge;
    }
}

// Define the Student class that extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage
const student = new Student("Alice", 20);
console.log(student.name);    // Output: Alice
student.study();              // Output: Alice is studying

const teacher = new Teacher("Mr. Smith", 40);
console.log(teacher.name);    // Output: Mr. Smith
teacher.teach();              // Output: Mr. Smith is teaching

// Using the setter to change age
student.age = 21;
console.log(student._age);    // Output: 21
