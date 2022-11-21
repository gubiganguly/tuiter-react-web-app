import React from "react";
import TuitItem from "./tuit-item.js"
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../../services/tuits-thunks.js";
import { useEffect } from "react";

const TuitList = () => {
  const { tuits, loading } = useSelector(state => state.tuitData)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  return (
    <ul className="list-group">
      {
        loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      {
        tuits.map(tuit =>
          <TuitItem
            key={tuit._id} tuit={tuit} />) 
      }
    </ul>
  );
};
export default TuitList;