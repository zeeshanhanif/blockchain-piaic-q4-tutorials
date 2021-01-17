import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE, UPDATE_NAME } from "./action";

const intialState = {
    counter: 0,
    user : {
        name: "Qasim",
        age: 23
    }
}
export const counterReducer = (state=intialState, action)=>{
    switch(action.type){
        case INCREMENT: {
            return {
                ...state, counter: state.counter+1
            };
        }
        case DECREMENT: {
            return {
                ...state, counter: state.counter-1
            };
        }
        case INCREMENT_BY_VALUE: {
            return {
                ...state, counter: state.counter+ action.data
            };
        }
        case UPDATE_NAME: {
            return {
                ...state, user: {...state.user, name: action.data}
            };
        }
        default : {
            return state
        }
    }

}