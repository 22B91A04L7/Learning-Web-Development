
function verifyStudent(hallTicket) {

    return new Promise((resolve, reject) => {
        console.log("Checking Student..!")
        setTimeout(() => {
            if (hallTicket === "22B91A04L7") {
                resolve("Student Verified..!")
            }
            else {
                reject("Invalid Hall Ticket")
            }
        }, 2000)
    })
}

const studentsDetails = {
    id: '22B91A04L7',
    name: "Venkat",
    marks: 92
}




function fetchMarks(hallTicket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching marks ....")
            if (hallTicket === studentsDetails.id) {
                resolve(studentsDetails.marks)
            }
            else {
                reject("Invalid student ID")
            }
        }, 2000)
    })
}

function calculateGrade(marks) {
    return new Promise((resolve, reject) => {
        console.log("Calculating grade")
        setTimeout(() => {
            if (marks > 80) {
                resolve("Grade A")
            }
            else {
                resolve("Grade B")
            }
        }, 1000)
    })
}

async function checkResult(hallTicket) {
    try {
        const msg = await verifyStudent(hallTicket)
        console.log(msg)
        const marks = await fetchMarks(hallTicket)
        console.log(`Marks : ${marks}`)
        const grade = await calculateGrade(marks)
        console.log(grade)
        console.log("Congratulations..!")
    }
    catch (e) {
        console.log(e);
    }
}


let hallTicket = "22B91A04L7";
checkResult(hallTicket)