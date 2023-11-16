// Гринчук Тарас
// Лабораторна робота № 9.1
// Варіант №4

interface Student {
   surname: string;
   course: number;
   specialty: Specialty;
   physics: number;
   math: number;
   informatics: number;
}

enum Specialty {
   ComputerScience,
   Physics,
   Mathematics,
}

function getRandomInt(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStudents(numStudents: number): Student[] {
   const students: Student[] = [];
   const surnames = ["Іванов", "Петров", "Сидоров", "Козлов", "Смірнов"];
   const specialties = [Specialty.ComputerScience, Specialty.Physics, Specialty.Mathematics];

   for (let i = 0; i < numStudents; i++) {
      const student: Student = {
         surname: surnames[getRandomInt(0, surnames.length - 1)],
         course: getRandomInt(1, 4),
         specialty: specialties[getRandomInt(0, specialties.length - 1)],
         physics: getRandomInt(3, 5),
         math: getRandomInt(3, 5),
         informatics: getRandomInt(3, 5),
      };
      students.push(student);
   }
   return students;
}

function calculateExcellentStudents(students: Student[]): number {
   return students.filter((student) => student.physics === 5 && student.math === 5 && student.informatics === 5).length;
}

function calculatePhysicsGradePercentage(students: Student[], grade: number): number {
   const studentsWithGrade = students.filter((student) => student.physics === grade).length;
   return (studentsWithGrade / students.length) * 100;
}

function displayStudents(students: Student[]): void {
   console.log("№\tПрізвище\t\tКурс\tСпеціальність\tФізика\tМатематика\tІнформатика");
   students.forEach((student, index) => {
      console.log(
         `${index + 1}\t${student.surname.padEnd(15, " ")}\t${String(student.course).padEnd(5, " ")}\t${Specialty[student.specialty].padEnd(15," ")}\t${String(student.physics).padEnd(10, " ")}\t${String(student.math).padEnd(10, " ")}\t${String(student.informatics).padEnd(10," " )}`
      );
   });
}

const numberOfStudents = Number(prompt("Number of students: "));
const students = createStudents(numberOfStudents);
const excellentStudents = calculateExcellentStudents(students);
const physicsGradePercentage = calculatePhysicsGradePercentage(students, 5);

console.log(`Кількість студентів, які вчаться на "відмінно": ${excellentStudents}`);
console.log(`Відсоток студентів, які отримали з фізики оцінку "5": ${physicsGradePercentage.toFixed(2)}%`);

displayStudents(students);
