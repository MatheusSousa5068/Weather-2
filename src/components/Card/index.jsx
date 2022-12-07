import React, { useEffect, useState } from "react";


function Card(props) {
    const [temp, setTemp] = useState(25);
    useEffect(() => {
        axios
            .get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.nome}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`
            )
            .then((response) => {
                setTemp(response.data.days[0].temp.toFixed());
            });
    }, []);
    
    return (
        <div>
            <div class="favcity-card">
                <span>
                    <p>{props.nome}</p>
                    <p>{temp}ºC</p>
                </span>
            </div>
        </div>
    );
}

export default Card;
