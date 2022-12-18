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

    useEffect(() => {
        if (props.un == "C") {
            setTemp(((temp - 32) / 1.8).toFixed());
        } else {
            
            setTemp((1.8 * temp + 32).toFixed());
        }
    }, [props.un]);

    return (
        <div>
            <div className="favcity-card">
                <span>
                    <p>{props.nome}</p>
                    <p>
                        {temp}º{props.un}
                    </p>
                </span>
            </div>
        </div>
    );
}

export default Card;
