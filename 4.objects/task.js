function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.marks ? this.subject = subjectName : console.log('Студент отчислен.Добавление предмета невозможно!!!')
}

Student.prototype.addMarks = function (...marks) {
    this.marks ? this.marks.push(...marks) : console.log('Студент отчислен.Добавление оценок невозможно!!!')
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length > 0) {
        return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
