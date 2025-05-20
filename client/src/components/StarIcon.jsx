import React from 'react'
import { assets } from '../assets/assets.js'
const StarIcon = ({ filled }) => {

    return (
        <div>
            <img
                src={filled ? assets.starIconFilled : assets.starIconOutlined}
                alt="star"
                className="w-5 h-5"
            />
        </div>
    )
}

export default StarIcon