const mongoose = require("mongoose")

const MONGO_URL = "mongodb://localhost:27017/studentApp"

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MONGO DB");
    })
    .catch((err) => {
        console.log(err);
    })

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    }
})


//instance method
studentSchema.methods.getDetails = function () {
    console.log(this.name);
    console.log(this.rollNo);
    console.log(this.branch);
}

//static method
studentSchema.statics.findByBranch = function (branch) {
    return this.find({ branch: branch })
}


const Student = mongoose.model("Student", studentSchema);
async function main() {

    const student1 = new Student({
        name: "Venkat",
        rollNo: "22B91A04L7",
        branch: "ECE",
        age: 20
    })

    await student1.save()

    console.log("Student Created");
    console.log(student1);

    const student2 = await Student.create({
        name: "Veera",
        rollNo: '22B91A0542',
        branch: "CSE",
        age: 23
    })

    console.log(student2);

    const students = await Student.find({})
    console.log("Students List");
    console.log(students);

    const student = await Student.findOne({
        rollNo: "22B91A04L7"
    })
    console.log("Found : " + student);

    await Student.updateOne(
        { rollNo: "22B91A04L7" },
        { $set: { branch: "MECH" } }
    )

    console.log("Details Updated");

    await Student.deleteOne({ rollNo: '22B91A04L7' })

    console.log("Student details deleted");

    //using instance method
    student2.getDetails()

    const eceStudents = await Student.find({ branch: "ECE" })
    console.log(eceStudents);

}
main();