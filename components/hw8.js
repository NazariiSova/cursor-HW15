class Student {

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

    }

    marks = [5, 4, 4, 5];
    isActive = true;

    getInfo() {
        return `студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    getAverageMark() {
        let num = 0;
        this.marks.forEach((el) => {
            num += el
        });

        return num / this.marks.length;
    }

    get getStudentMarks() {
        if (this.isActive == true) {
            return this.marks;
        }
        return null;

    }

    set setStudentMarks(value) {
        if (this.isActive == true) {
            this.marks.push(value);
            return this.marks;
        }
        return null;

    }

    dismiss() {
        this.isActive = false;
    }

    recover() {
        this.isActive = true;
    }

}


const person = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");



export const personGetInfo = person.getInfo();