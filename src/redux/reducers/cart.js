const initialState = {
	items: {},
	totalPrice: 0,
	totalAmount: 0,
}

const cart = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_SUSHI_TO_CART':
			return{
				...state,
				items: {
					...state.items,
					[action.payload.id]: 
						!state.items[action.payload.id]? [action.payload] : [...state.items[action.payload.id], action.payload],
				},
				totalAmount: state.totalAmount + 1,
				totalPrice: state.totalPrice + action.payload.price 
			}
		case 'SET_TOTAL_AMOUNT':
			return{
				...state,
				totalAmount:action.payload,
			}
			default: 
			return state;
	}
}

export default cart;