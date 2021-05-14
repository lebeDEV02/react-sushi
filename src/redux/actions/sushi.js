import axios from 'axios';

export const fetchSushi = () => dispatch => {
	axios.get('http://localhost:8000/sushi')
		.then(({data})=>{
			dispatch(setSushi(data))
		});
}
export const setSushi = (items) => ({
	type: 'SET_SUSHI',
	payload: items,
})