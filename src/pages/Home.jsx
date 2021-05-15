import React from 'react'
import {Categories, SortPopup, SushiBlock, SushiPlaceholder} from "../components"
import {useSelector, useDispatch} from "react-redux";
import {setCategoryBy, setSortBy} from "../redux/actions/filters"
import {fetchSushi} from "../redux/actions/sushi"

function Home() {
	const dispatch = useDispatch();
			const items = useSelector(({sushi}) => sushi.items);
			const isLoaded = useSelector(({sushi}) => sushi.isLoaded);

	const sushiArr = ['Сеты','Вегетарианские','Горячие','Острые']
	const sortItems = [{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]

		React.useEffect(()=>{
			if(!items.length){
				dispatch(fetchSushi())
			}
	},[]);



	
	const onSelectCategory = React.useCallback((item) => {
		dispatch(setCategoryBy(item))
	})
	return (
		 <div className="container">
          <div className="content__top">
            <Categories items = {sushiArr} onClickItem={onSelectCategory}></Categories>
            <SortPopup items={sortItems}></SortPopup>
          </div>
          <h2 className="content__title">Все</h2>
          <div className="content__items">
				{isLoaded ? items.map(item => 
					(<SushiBlock key={item.id} name={item.name} img={item.imageUrl} price={item.price}></SushiBlock>)
				) : Array(10).fill(<SushiPlaceholder></SushiPlaceholder>)}
            </div>
        </div>
	)
}

export default Home
