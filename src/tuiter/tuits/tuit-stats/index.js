import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

const TuitStats = ({likes, liked, retuits, replies}) => {

    var color = liked ? "red" : ''
    var heart = liked ? "solid" : "regular"

    return (
        <div className='row mt-3'>
            <div className='col'>
                <i className="fa-regular fa-comment"></i>
                <span> {replies}</span>
            </div>
            <div className='col'>
                <i className="fa-sharp fa-solid fa-retweet"></i>
                <span> {retuits}</span>
            </div>
            <div className='col'>
                <i className={`fa-${heart} fa-heart`} style={{color: `${color}`}}></i>
                <span> {likes}</span>
            </div>
            <div className='col'>
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default TuitStats