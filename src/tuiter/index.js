import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";

const store = configureStore(
  {
    reducer: {
      who: whoReducer,
      tuitData: tuitsReducer
    }
  }
);

function Tuiter() {
  const location = useLocation()

  return (

      <Provider store={store}>
        <div className="row mt-2">
          <NavigationSidebar active={location.pathname.split("/")[2]} />
          <Routes>
          <Route exact path="/" element={<ExploreComponent/>} /> 
            <Route exact path="/home" element={<HomeComponent/>} /> 
            <Route exact path="/explore" element={<ExploreComponent/>} /> 
          </Routes>
        
          <WhoToFollowList />
        </div>
      </Provider>
  );
}

export default Tuiter