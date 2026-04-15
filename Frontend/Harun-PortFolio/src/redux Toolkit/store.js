import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./projectSlice.js";
import singleProjectReducer from "./simgleProject.js"

const store=configureStore({
 reducer:{
    projects:projectReducer,
    singleProject:singleProjectReducer
 }
})

export default store;