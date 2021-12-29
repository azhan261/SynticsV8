//getting API for showing all the data
import axios from 'axios';
export const getPersonalInfos = () => fetch("https://syntics.co/personalInfos").then(res => res.json())

//getting API for inserting the data
export const createPersonalInfos= (todo) => fetch("https://syntics.co/personalInfos/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePersonalInfos = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPersonalInfo = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())