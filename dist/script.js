// Гринчук Тарас
// Лабораторна робота № 9.1
// Варіант №4
var Specialty;
(function (Specialty) {
    Specialty[Specialty["ComputerScience"] = 0] = "ComputerScience";
    Specialty[Specialty["Physics"] = 1] = "Physics";
    Specialty[Specialty["Mathematics"] = 2] = "Mathematics";
})(Specialty || (Specialty = {}));
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createStudents(numStudents) {
    var students = [];
    var surnames = ["Іванов", "Петров", "Сидоров", "Козлов", "Смірнов"];
    var specialties = [Specialty.ComputerScience, Specialty.Physics, Specialty.Mathematics];
    for (var i = 0; i < numStudents; i++) {
        var student = {
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
function calculateExcellentStudents(students) {
    return students.filter(function (student) { return student.physics === 5 && student.math === 5 && student.informatics === 5; }).length;
}
function calculatePhysicsGradePercentage(students, grade) {
    var studentsWithGrade = students.filter(function (student) { return student.physics === grade; }).length;
    return (studentsWithGrade / students.length) * 100;
}
function displayStudents(students) {
    console.log("№\tПрізвище\t\tКурс\tСпеціальність\tФізика\tМатематика\tІнформатика");
    students.forEach(function (student, index) {
        console.log("".concat(index + 1, "\t").concat(student.surname.padEnd(15, " "), "\t").concat(String(student.course).padEnd(5, " "), "\t").concat(Specialty[student.specialty].padEnd(15, " "), "\t").concat(String(student.physics).padEnd(10, " "), "\t").concat(String(student.math).padEnd(10, " "), "\t").concat(String(student.informatics).padEnd(10, " ")));
    });
}
var numberOfStudents = Number(prompt("Number of students: "));
var students = createStudents(numberOfStudents);
var excellentStudents = calculateExcellentStudents(students);
var physicsGradePercentage = calculatePhysicsGradePercentage(students, 5);
console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0456\u0432, \u044F\u043A\u0456 \u0432\u0447\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \"\u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E\": ".concat(excellentStudents));
console.log("\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0456\u0432, \u044F\u043A\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0437 \u0444\u0456\u0437\u0438\u043A\u0438 \u043E\u0446\u0456\u043D\u043A\u0443 \"5\": ".concat(physicsGradePercentage.toFixed(2), "%"));
displayStudents(students);
