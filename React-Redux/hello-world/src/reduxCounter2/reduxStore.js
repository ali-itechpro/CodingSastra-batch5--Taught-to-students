import {createStore} from 'redux'

//Actions declaration
const INCREMENT ='INCREMENT'
const DECREMENT='DECREMENT'


//Action Creators Increment
export function ActionIncrement(){
    return {
        type:INCREMENT
    }
}

export function ActionDecrement(){
    return {
        type:DECREMENT
    }
}

//Reducers 

const counter = function(state=0, action){
    //console.log(action.type);

    switch(action.type){
        case 'INCREMENT':
        return state + 1;
        

        case 'DECREMENT':
        return state -1;
        

        default:
         return state
    }


}


function configureStore(){
    const store=createStore(counter)
    return store;
}

export  const store = configureStore();





