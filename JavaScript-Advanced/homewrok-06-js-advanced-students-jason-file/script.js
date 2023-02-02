fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then((response) => response.json())
  .then((data) => {
    const students = data;

    // all students with an average grade higher than 3
    const averageGradeOver3 = students.filter(
      (student) => student.averageGrade > 3
    );
    console.log(
      "All students with an average grade higher than 3:",
      averageGradeOver3
    );
    // all female student names with an average grade of 5
    const femaleStudentsWithGrade5 = students
      .filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      )
      .map((student) => student.firstName);
    console.log(
      "All female student names with an average grade of 5:",
      femaleStudentsWithGrade5
    );

    // all male student full names who live in Skopje and are over 18 years old
    const maleStudentsInSkopjeOver18 = students
      .filter(
        (student) =>
          student.gender === "Male" &&
          student.city === "Skopje" &&
          student.age > 18
      )
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(
      "All male student full names who live in Skopje and are over 18 years old:",
      maleStudentsInSkopjeOver18
    );

    // the average grades of all female students over the age of 24
    const femaleStudentsOver24 = students.filter(
      (student) => student.gender === "Female" && student.age > 24
    );
    const averageGradesOfFemaleOver24 =
      femaleStudentsOver24
        .map((student) => student.averageGrade)
        .reduce((total, grade) => total + grade, 0) /
      femaleStudentsOver24.length;
    console.log(
      "The average grades of all female students over the age of 24:",
      averageGradesOfFemaleOver24
    );

    // all male students with a name starting with B and average grade over 2
    const maleWithNameStartingWithBOver2 = students.filter(
      (student) =>
        student.gender === "Male" &&
        student.firstName[0] === "B" &&
        student.averageGrade > 2
    );
    console.log(
      "All male students with a name starting with B and average grade over 2:",
      maleWithNameStartingWithBOver2
    );
  });
