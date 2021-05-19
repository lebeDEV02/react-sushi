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
			case 'DECREASE_AMOUNT_OF_SUSHI':
				return{
					...state,
					totalPrice: state.totalPrice - action.payload[0].price,
					totalAmount: state.totalAmount - 1,
					currentItem: action.payload.length > 1 ? action.payload.pop() : action.payload,
				}
			case 'INCREASE_AMOUNT_OF_SUSHI':
				return{
					...state,
					totalPrice: state.totalPrice + action.payload[0].price,
					totalAmount: state.totalAmount + 1,
					items: {
					...state.items,
					[action.payload[0].id]: 
						[...state.items[action.payload[0].id], action.payload[0]],
				},
							}
			case 'DELETE_ALL_SUSHI':
				return{
					...state,
					items: {},
					totalPrice: 0,
					totalAmount: 0
				}
				case 'DELETE_SELECTED_SUSHI':
					const newItems = {...state.items}
					delete newItems[action.payload[0].id]
					return{
						...state,
						items: newItems,
						totalAmount: state.totalAmount - action.payload.length,
						totalPrice: state.totalPrice - action.payload[0].price*action.payload.length,
					}
			default: 
			return state;
	}
}

export default cart;