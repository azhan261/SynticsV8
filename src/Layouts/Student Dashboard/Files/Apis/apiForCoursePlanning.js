//getting API for showing all the data
import axios from 'axios';
//getting API for showing all the data


export const getCoursePlannings = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings`)
		.then(res => res.data, )
)

export const getAssignmentPlannings = id => (
	console.log(id),
	axios.post(`https://syntics.co/assignmentPlannings`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade1 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-1/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade2 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-2/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade3 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-3/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade4 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-4/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade5 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-5/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade6 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-6/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade7 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-7/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade8 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-8/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade9 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-9/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade10 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-10/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade11 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-11/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade12 = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings/Students-Grade-12/${id}`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("https://syntics.co/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`https://syntics.co/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteCoursePlannings = (todo, id) => fetch(`https://syntics.co/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCoursePlanning = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())

