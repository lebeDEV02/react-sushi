import React from 'react'

const Categories = React.memo(function Categories({items, onClickItem}) {
	const [activeItem, setActiveItem] = React.useState(null);

	const onAction = (index) => {
		setActiveItem(index);
		onClickItem(index);
	}
	return (
		<div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onAction(null)}>Все</li>
					{items && items.map((item, index)=>{
						return (<li onClick={()=>onAction(index)} key={`${item}_${index}`} className={activeItem === index? 'active' : ''}>{item}</li>)
					})}
              </ul>
            </div>
	)
})

export default Categories
