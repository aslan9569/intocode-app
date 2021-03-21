import React from 'react';

function Button(props) {
    return (
        <div className="card-button" onClick={() => props.setBought(props.id)}>
            <button className="btn" onClick={() => props.setBought(props.id)} disabled={props.bought}  >
                {props.bought ? "Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;