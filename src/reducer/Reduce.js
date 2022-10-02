// import changeNumber from "./ChangeNumber.js";

// import {combineReducers} from 'redux'

// const rootReducers = combineReducers({
//     changeNumber,
// })

// export default rootReducers

import {INCREMENT_NUM} from "../action/Action";
const intialState={
    count:0
}

const counterReducer=(state=intialState,action)=>{
switch (action.type){

    case INCREMENT_NUM: 
    return { 
        ...state,
        count:state.count+1
    }
    break;

    default:
        return state;
        break;
    
}
}

export default counterReducer;
