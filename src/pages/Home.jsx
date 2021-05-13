import React from 'react'
import {Categories, SortPopup, SushiBlock} from "../components"
function Home({sushi}) {
	return (
		 <div className="container">
          <div className="content__top">
            <Categories  items={[
					'Сеты',
					'Вегетарианские',
					'Горячие',
					'Острые'
				]}></Categories>
            <SortPopup items={[{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]}></SortPopup>
          </div>
          <h2 className="content__title">Все</h2>
          <div className="content__items">
				{sushi && sushi.map(item => 
					(<SushiBlock key={item.id} name={item.name} img={item.imageUrl} price={item.price}></SushiBlock>)
				)}
            </div>
        </div>
	)
}

export default Home
