//getting API for showing all the data
import axios from 'axios';

export const getAnswersTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers`)
		.then(res => res.data, )
)

export const getAnswersMCQTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/MCQ-answers`)
		.then(res => res.data, )
)

export const getAnswersBlanksTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Blanks-answers`)
		.then(res => res.data, )
)

export const getAnswersPronunciationTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Pronunciation-answers`)
		.then(res => res.data, )
)

export const getAnswersQATest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/QA-answers`)
		.then(res => res.data, )
)

export const getAnswersHandWritingTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Handwriting-answers`)
		.then(res => res.data, )
)


export const getAnswersGrade1Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-1`)
		.then(res => res.data, )
)

export const getAnswersGrade2Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-1`)
		.then(res => res.data, )
)

export const getAnswersGrade3Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-3`)
		.then(res => res.data, )
)

export const getAnswersGrade4Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-4`)
		.then(res => res.data, )
)

export const getAnswersGrade5Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-5`)
		.then(res => res.data, )
)

export const getAnswersGrade6Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-6`)
		.then(res => res.data, )
)

export const getAnswersGrade7Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-7`)
		.then(res => res.data, )
)

export const getAnswersGrade8Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-8`)
		.then(res => res.data, )
)


export const getAnswersGrade9Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-9`)
		.then(res => res.data, )
)

export const getAnswersGrade10Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-10`)
		.then(res => res.data, )
)


export const getAnswersGrade11Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-11`)
		.then(res => res.data, )
)

export const getAnswersGrade12Test = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-12`)
		.then(res => res.data, )
)


export const getAnswersGrade1ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-1-test`)
		.then(res => res.data, )
)


export const getAnswersGrade2ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-2-test`)
		.then(res => res.data, )
)


export const getAnswersGrade3ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-3-test`)
		.then(res => res.data, )
)



export const getAnswersGrade4ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-4-test`)
		.then(res => res.data, )
)


export const getAnswersGrade5ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-5-test`)
		.then(res => res.data, )
)


export const getAnswersGrade6ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-6-test`)
		.then(res => res.data, )
)



export const getAnswersGrade7ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-6-test`)
		.then(res => res.data, )
)


export const getAnswersGrade8ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-8-test`)
		.then(res => res.data, )
)


export const getAnswersGrade9ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-9-test`)
		.then(res => res.data, )
)

export const getAnswersGrade10ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-10-test`)
		.then(res => res.data, )
)


export const getAnswersGrade11ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-11-test`)
		.then(res => res.data, )
)

export const getAnswersGrade12ForTestTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/Grade-12-test`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:3005/answers-test/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReviewTest = (todo, id) => fetch(`https://syntics.co/answers-test/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data

export const getAnswerTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificByIdTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/id/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificQuestionTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/question/${id}`)
		.then(res => res.data, )
)
