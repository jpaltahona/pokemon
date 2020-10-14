import React from 'react';

function Card(props) {

    return (
        <div className={`card ` + props.type[0].type.name} onClick={props.onChange}>
            <div className="infoGrid">
                <div className="infoGrid__general">
                    <h2>{props.name}</h2>
                    <ul>
                    {props.type.map(i => <li>{i.type.name}</li>)}
                    </ul>
                </div>
                <div className="infoGrid__img">
                    <img src={props.images.front_default} alt={props.name}/>
                </div>
            </div>
        </div>
    )
}

export default Card;
