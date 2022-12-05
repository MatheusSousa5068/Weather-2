import React from 'react'

import cloud from '../../assets/cloud-solid.png'

export default function Header() {
    return (
        <header>
            <div id="title">
                <img id="logo" src={cloud} />
                <h1> 
                    WEATHERME
                </h1>
            </div>
      </header>
    )
}