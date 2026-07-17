function Student(name, roll_no, marks) {
    const student = {}
    student.name = name
    student.roll_no = roll_no
    student.marks = marks

    student.displayInfo = function () {
        console.log(`Name : ${this.name}`)
        console.log(`Roll No : ${this.roll_no}`)
        console.log(`Marks : ${this.marks}`)
    }

    student.isPass = function () {
        if (this.marks >= 35) {
            console.log("Pass")
            return true;
        }
    }
    return student;
}

const student1 = Student("venkat", 56, 78)
student1.displayInfo()
student1.isPass()