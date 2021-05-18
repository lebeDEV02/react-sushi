export const addSushiToCart = (sushiObj) => ({
	type: 'ADD_SUSHI_TO_CART',
	payload: sushiObj,
})

export const decreaseAmountOfPosition = (obj) => ({
	type: 'DECREASE_AMOUNT_OF_SUSHI',
	payload: obj
})
export const increaseAmountOfPosition = (obj) => ({
	type: 'INCREASE_AMOUNT_OF_SUSHI',
	payload: obj
})