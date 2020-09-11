import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>

            <img src={img} alt="" />
            
            <div className="searchResult-stars">
                        <StarIcon className="searchResult-star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>

            <div className='searchResult-info'>
                <div className="searchResult-infoTop">
                        <div className="toppy">
                            <p>{location}</p>
                            <FavoriteBorderIcon className="searchResult-heart" />
                        </div>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult-infoBottom">
                    
                    <div className='searchResult-price'>
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult