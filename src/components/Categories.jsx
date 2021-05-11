import React from 'react'

function Categories({items}) {
	const [activeItem, setActiveItem] = React.useState(null);
	return (
		<div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
					{items && items.map((item, index)=>{
						return (<li onClick={() => setActiveItem(index)} key={`${item}_${index}`} className={activeItem === index? 'active' : ''}>{item}</li>)
					})}
              </ul>
            </div>
	)
}

export default Categories
