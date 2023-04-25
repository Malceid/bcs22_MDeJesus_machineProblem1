/*
	Program: Computation of Grades using Function
	Programmer: Mark Jaiver G. De Jesus
	Section: BCS22
	Start Date: April 17, 2023
	End Date: Epril 20, 2023
*/

//Initialize empty array
const studentGrade = [];




//For loop to iterate through n amount of students (Time Complexity is O(n))
for (let i = 1; i <= 5; i++) {
	//Creates a new object for every array element per iteration
	studentGrade[i] = {}
	let studentName = prompt("Enter student name: ")
	studentGrade[i]["Student Name"] = studentName 
	calcEnabling(studentName, i)
	calcSummative(studentName, i)
	calcExamG(studentName, i)
	calcFinGrade(studentName, i)	
	console.table(studentGrade)
}


//Calculate the avg of 5 enabling assessments and then put it in studentGrade[i] with the property of "Class Participation"
function calcEnabling(name, count) {
	let mean = 0
	for (let i = 1; i <= 5; i++) {
		score = parseInt(prompt(`Enter Enabling score ${i} for ${name}: `))
		mean += score
		
	}

	mean /= 5
	//parseInt turns the coercion of toFixed from string to number, toFixed is to round off number to nearest natural number without decimals
	return studentGrade[count]["Class Participation"] = parseInt(mean.toFixed(0))

}

//Collects user input for 3 summative assessments and then put it in studentGrade[i] with the property of "Summative Assessment"
function calcSummative(name, count) {
	let mean = 0
	for (let i = 1; i <= 3; i++) {
		score = parseInt(prompt(`Enter Summative score ${i} for ${name}: `))
		mean += score
		
	}

	mean /= 3
	return studentGrade[count]["Summative Assessment"] = parseInt(mean.toFixed(0))

}

//Collects user input for the Final Grade
function calcExamG(name, count) {
	let score = parseInt(prompt(`Enter Final Exam grade for ${name} `))
	return studentGrade[count]["Exam Grade"] = score
}


//Calculates the final grade
function calcFinGrade(name, count) {
	let finGrade = parseInt(((studentGrade[count]["Class Participation"] * 0.3) + (studentGrade[count]["Summative Assessment"] * 0.3) + (studentGrade[count]["Exam Grade"] * 0.4)).toFixed(0))
	studentGrade[count]["Grade Score"] = finGrade

	//Function that selects the appropriate letter to assign based on the final grade
	function calcLetGrade(score) {
		if (score >= 90) {
			return studentGrade[count]["Letter Grade"] = 'A'
		} else if (score >= 80) {
			return studentGrade[count]["Letter Grade"] = 'B'
		} else if (score >= 70) {
			return studentGrade[count]["Letter Grade"] = 'C'
		} else if (score >= 60) {
			return studentGrade[count]["Letter Grade"] = 'D'
		} else {
			return studentGrade[count]["Letter Grade"] = 'F'
		}
	}
	return calcLetGrade(finGrade)
}








