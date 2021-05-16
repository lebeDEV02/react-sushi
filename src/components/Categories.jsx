import React from 'react'
import PropTypes from "prop-types"
const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

	return (
		<div className="categories">
              <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
					{items && items.map((item, index)=>{
						return (<li onClick={()=>onClickCategory(index)} key={`${item}_${index}`} className={activeCategory === index? 'active' : ''}>{item}</li>)
					})}
              </ul>
            </div>
	)
})
Categories.propTypes = {
	activeCategory: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.string),
	onClickCategory: PropTypes.func,
}

export default Categories
