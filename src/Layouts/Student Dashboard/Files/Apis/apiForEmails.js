//getting API for showing all the data
import axios from 'axios';
export const getEmails = () => fetch("https://syntics.co/personalInfos").then(res => res.json())

//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("https://syntics.co/personalInfos/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getEmail = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())