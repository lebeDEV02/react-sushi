import React from 'react'
import { Link } from "react-router-dom";
function EmptyCart() {
	return (
		<div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не заказывали ещё суши.<br />
              Для того, чтобы заказать суши, перейди на главную страницу.
            </p>
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
	)
}

export default EmptyCart
