//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("https://syntics.co/answers").then(res => res.json())

export const getAnswers = id => (
	console.log(id),
	axios.post(`https://syntics.co/answers`)
		.then(res => res.data, )
)



//getting API for inserting the data
export const createAnswers = (todo) => fetch("https://syntics.co/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())
export const getAnswer = id => (
	console.log(id),
	axios.post(`https://syntics.co/${id}`)
		.then(res => res.data, )
)
