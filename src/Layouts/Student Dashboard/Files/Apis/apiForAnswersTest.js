//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("https://syntics.co/answers-test").then(res => res.json())
export const getAnswersTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createAnswersTest  = (todo) => fetch("https://syntics.co/answers-test/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())
export const getAnswerTest  = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificWithSubjectTest  = (id) => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/subject/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificTest  = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerByIdTest  = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers-test/specific/id/${id}`)
		.then(res => res.data, )
)