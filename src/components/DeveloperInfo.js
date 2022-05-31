import React from 'react';

const DeveloperInfo = (props) => {
    return (
        <div class="cardImage">
            <img src={props.imgSrc} alt={props.altImg} />
            <h1>{ props.name }</h1>
        </div>
    );
}

export default DeveloperInfo;