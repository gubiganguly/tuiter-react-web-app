import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../tuits-reducer";

const PostSummaryItem = ({ post }) => {

    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={50} className="float-start rounded-circle" src={`/images/${post.image}`} />
                </div>
                <div className="col-11 ps-4">
                    <div>
                        <i className="bi bi-x-lg float-end"onClick={() => deleteTuitHandler(post._id)}></i>
                        <span className="fw-bolder">{post.userName}  </span>
                        <i className="fa-solid fa-check bg-primary rounded-circle text-light p-1" style={{ fontSize: 10 }}></i>
                        <span>  {post.handle} · {post.time}</span>
                    </div>
                    <div>{post.tuit}</div>
                    <TuitStats likes={post.likes} liked={post.liked} retuits={post.retuits} replies={post.replies} />
                </div>

            </div>
        </li>
    );
};
export default PostSummaryItem;