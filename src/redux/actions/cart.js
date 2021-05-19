export const addSushiToCart = (sushiObj) => ({
	type: 'ADD_SUSHI_TO_CART',
	payload: sushiObj,
})

export const decreaseAmountOfSushi = (obj) => ({
	type: 'DECREASE_AMOUNT_OF_SUSHI',
	payload: obj
})
export const increaseAmountOfSushi = (obj) => ({
	type: 'INCREASE_AMOUNT_OF_SUSHI',
	payload: obj
})
export const deleteAllSushi = () => ({
	type: 'DELETE_ALL_SUSHI'
})

export const deleteSelectedSushi = (obj) => ({
	type: 'DELETE_SELECTED_SUSHI',
	payload: obj
})