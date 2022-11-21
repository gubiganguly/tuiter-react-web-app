import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { updateTuitThunk } from '../../../services/tuits-thunks';
import { useDispatch } from 'react-redux';

const TuitStats = ({ likes, liked, retuits, replies, tuit }) => {

    var color = liked ? "red" : ''
    var heart = liked ? "solid" : "regular"

    const dispatch = useDispatch()
    const likeHandler = () => {
        dispatch(updateTuitThunk(
            {
                ...tuit,
                likes: tuit.likes + 1
            }))
    }

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
                <i onClick={likeHandler} className={`fa-${heart} fa-heart`} style={{ color: `${color}` }} ></i>
                <span> {likes}</span>
            </div>
            <div className='col'>
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default TuitStats