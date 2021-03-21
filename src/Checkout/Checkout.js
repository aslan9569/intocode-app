import React from 'react';
import logo from "./shopping-cart-solid.svg"
function Checkout(props) {

    /*
    В текущем компоненте подсчитай количество товаров в базе, у которых свойство bought равно true. Для решения тебе понадобится метод .filter и свойство length.
     Выведи этот подсчет вместо нолика, которые мы изначально ставили в этом компоненте.


     */


    const filterDatabase = props.database.filter((item) => {
        if (item.bought === true) {
            return true;
        } else {
            return false;
        };
    });



    return (
        <div className="checkout">
            <img src={logo} alt="Logotype"/>
            <span className="counter">{filterDatabase.length}</span>

        </div>
    );
}

export default Checkout;