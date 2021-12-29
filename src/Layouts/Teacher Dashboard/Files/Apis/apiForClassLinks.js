//getting API for showing all the data
import axios from 'axios';

export const getLinks = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createLinks = (todo) => fetch("https://syntics.co/live-class-link/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReview = (todo, id) => fetch(`https://syntics.co/live-class-link/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data

export const getLink = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/${id}`)
		.then(res => res.data, )
)

export const getLinksSpecific = (grade, subject) => (
	console.log(grade, subject),
	axios.post(`https://syntics.co/live-class-link/specific/subject-grade/${grade}&${subject}`)
		.then(res => res.data, )
)

export const getLinksSpecificById = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/specific/id/${id}`)
		.then(res => res.data, )
)

export const getLinksSpecificQuestion = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/specific/question/${id}`)
		.then(res => res.data, )
)


export const getLinksTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/${id}`)
		.then(res => res.data, )
)

export const getLinksSpecificTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/specific/${id}`)
		.then(res => res.data, )
)

export const getLinksSpecificByIdTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/specific/id/${id}`)
		.then(res => res.data, )
)

export const getLinksSpecificQuestionTest = id => (
	console.log(id),
	axios.post(`https://syntics.co/live-class-link/specific/question/${id}`)
		.then(res => res.data, )
)