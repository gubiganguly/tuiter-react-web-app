import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../tuits-reducer";
import { deleteTuitThunk } from "../../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {

    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={50} className="float-start rounded-circle" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-11 ps-4">
                    <div>
                        <i className="bi bi-x-lg float-end"onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bolder">{tuit.userName}  </span>
                        <i className="fa-solid fa-check bg-primary rounded-circle text-light p-1" style={{ fontSize: 10 }}></i>
                        <span>  {tuit.handle} · {tuit.time}</span>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats likes={tuit.likes} liked={tuit.liked} retuits={tuit.retuits} replies={tuit.replies}  tuit={tuit}/>
                </div>

            </div>
        </li>
    );
};
export default TuitItem; 