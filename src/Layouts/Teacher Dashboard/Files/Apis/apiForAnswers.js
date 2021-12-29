//getting API for showing all the data
import axios from 'axios';

export const getAnswers = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers`)
		.then(res => res.data, )
)

export const getAnswersMCQ = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/MCQ-answers`)
		.then(res => res.data, )
)

export const getAnswersBlanks = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Blanks-answers`)
		.then(res => res.data, )
)

export const getAnswersPronunciation = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Pronunciation-answers`)
		.then(res => res.data, )
)

export const getAnswersQA = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/QA-answers`)
		.then(res => res.data, )
)

export const getAnswersHandWriting = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Handwriting-answers`)
		.then(res => res.data, )
)


export const getAnswersGrade1 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-1`)
		.then(res => res.data, )
)

export const getAnswersGrade2 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-1`)
		.then(res => res.data, )
)

export const getAnswersGrade3 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-3`)
		.then(res => res.data, )
)

export const getAnswersGrade4 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-4`)
		.then(res => res.data, )
)

export const getAnswersGrade5 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-5`)
		.then(res => res.data, )
)

export const getAnswersGrade6 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-6`)
		.then(res => res.data, )
)

export const getAnswersGrade7 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-7`)
		.then(res => res.data, )
)

export const getAnswersGrade8 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-8`)
		.then(res => res.data, )
)


export const getAnswersGrade9 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-9`)
		.then(res => res.data, )
)

export const getAnswersGrade10 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-10`)
		.then(res => res.data, )
)


export const getAnswersGrade11 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-11`)
		.then(res => res.data, )
)

export const getAnswersGrade12 = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-12`)
		.then(res => res.data, )
)


export const getAnswersGrade1ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-1-test`)
		.then(res => res.data, )
)


export const getAnswersGrade2ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-2-test`)
		.then(res => res.data, )
)


export const getAnswersGrade3ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-3-test`)
		.then(res => res.data, )
)



export const getAnswersGrade4ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-4-test`)
		.then(res => res.data, )
)


export const getAnswersGrade5ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-5-test`)
		.then(res => res.data, )
)


export const getAnswersGrade6ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-6-test`)
		.then(res => res.data, )
)



export const getAnswersGrade7ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-6-test`)
		.then(res => res.data, )
)


export const getAnswersGrade8ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-8-test`)
		.then(res => res.data, )
)


export const getAnswersGrade9ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-9-test`)
		.then(res => res.data, )
)

export const getAnswersGrade10ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-10-test`)
		.then(res => res.data, )
)


export const getAnswersGrade11ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-11-test`)
		.then(res => res.data, )
)

export const getAnswersGrade12ForTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/Grade-12-test`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:3005/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReview = (todo, id) => fetch(`https://syntics.co/answers/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})
export const updateAnserReviewAssignment = (todo, id) => fetch(`https://syntics.co/assignmentAnswers/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})    

//getting API for getting specific data

export const getAnswer = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecific = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificById = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/id/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificQuestion = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/question/${id}`)
		.then(res => res.data, )
)
export const getAnswerSpecificAssignment = id => (
	console.log(id),
	axios.post(`https://syntics.co/assignmentAnswers/specific/question/${id}`)
		.then(res => res.data, )
)


export const getAnswerTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificByIdTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/id/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificQuestionTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers/specific/question/${id}`)
		.then(res => res.data, )
)