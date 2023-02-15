class Academy {
  constructor(name, start, end, subjects) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.students = [];
    this.subjects = subjects;
    this.numberOfClasses = subjects.length * 10;
  }

  printStudents() {
    console.log(this.students);
  }

  printSubjects() {
    console.log(this.subjects);
  }
}

class Subject {
  constructor(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
  }

  overrideClasses(num) {
    if (num < 3) {
      console.error("The number of classes cannot be smaller than 3.");
    } else {
      this.numberOfClasses = num;
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(this);
  }

  startSubject(subject) {
    if (this.academy === null) {
      console.error("The student is not enrolled in an academy.");
    } else if (!this.academy.subjects.includes(subject)) {
      console.error("The academy does not offer this subject.");
    } else {
      this.currentSubject = subject;
      subject.students.push(this);
    }
  }
}

const mathAcademy = new Academy(
  "Math Academy",
  new Date("2023-01-01"),
  new Date("2023-06-30"),
  []
);

const algebra = new Subject("Algebra", false, mathAcademy);
const geometry = new Subject("Geometry", true, mathAcademy);
const calculus = new Subject("Calculus", false, mathAcademy);

mathAcademy.subjects.push(algebra, geometry, calculus);
mathAcademy.numberOfClasses = mathAcademy.subjects.length * 10;

const jane = new Student("Jane", "Doe", 20);
jane.startAcademy(mathAcademy);
jane.startSubject(algebra);

console.log(mathAcademy.name);
console.log(mathAcademy.start);
console.log(mathAcademy.end);
console.log(mathAcademy.students);
console.log(mathAcademy.subjects);
console.log(mathAcademy.numberOfClasses);

console.log(jane.firstName);
console.log(jane.lastName);
console.log(jane.age);
console.log(jane.completedSubjects);
console.log(jane.academy);
console.log(jane.currentSubject);
