import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <div>
            <li className="cards_item">
                <Link to="" className="cards_item_link">
                    <figure className="cards_item_pic_wrap">
                        <img src="/" alt="Travel Image" className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">

                        </h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem
