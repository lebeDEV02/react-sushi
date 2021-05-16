import React from 'react'
import {Categories, SortPopup, SushiBlock, SushiPlaceholder} from "../components"
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters"
import {addSushiToCart} from "../redux/actions/cart"
import {fetchSushi} from "../redux/actions/sushi"

function Home() {
	const dispatch = useDispatch();
			const items = useSelector(({sushi}) => sushi.items);
			const isLoaded = useSelector(({sushi}) => sushi.isLoaded);
	const {category, sortBy} = useSelector(({filters}) => filters)
	const sushiItems = useSelector(({cart}) => cart.items)

	const sushiArr = ['Сеты','Вегетарианские','Горячие','Острые']
	const sortItems = [{name: 'популярности', type: 'rating',order:'desc'},{name: 'цене', type: 'price',order:'desc'}, {name: 'алфавиту', type: 'name',order:'asc'}]
		React.useEffect(()=>{
				dispatch(fetchSushi(sortBy,category))
	},[category, sortBy]);


	const onSelectCategory = React.useCallback((item) => {
		dispatch(setCategory(item))
	})

		const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type))
	})

	const addSushiFromHomepage = obj => {
		dispatch(addSushiToCart(obj))
	}
	return (
		 <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} items = {sushiArr} onClickCategory={onSelectCategory}></Categories>
            <SortPopup activeSortType={sortBy.type} items={sortItems} onSelectSortType={onSelectSortType}></SortPopup>
          </div>
          <h2 className="content__title">Все</h2>
          <div className="content__items">
				{isLoaded ? items.map(item => 
					(<SushiBlock key={item.id} name={item.name} id={item.id} img={item.imageUrl} price={item.price} onAddSushi={addSushiFromHomepage} addedSushiCounter={sushiItems[item.id] && sushiItems[item.id].length}></SushiBlock>)
				) : Array(10).fill(0).map((_,index) => <SushiPlaceholder key={index}></SushiPlaceholder>)}
            </div>
        </div>
	)
}

export default Home
