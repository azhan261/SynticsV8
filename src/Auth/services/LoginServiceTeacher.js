import axios from 'axios';

const LoginServiceTeacher = data => (
	console.log(data, "teacher"),
	axios.post('https://syntics.co/teachers/login', data)
		.then(res => res.status, )
		
)

export default LoginServiceTeacher;
