import {createStore} from 'redux'


// Action declaration
const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'


// Action Creators

export function increment(){
    return {
        type:INCREMENT,
        text:'incrementing value'
    }
}

export function decrement(){
    return {
        type:DECREMENT,
        text:'decrement value'
    }
}




// Reducers

var counter =function(state=0,action){
 //console.log(action)
    switch(action.type){

        case INCREMENT:
        return state + 1;
       

        case DECREMENT:
        return state -1;
       
        default:
        return state
    }


}


//store


function configureStore(){
    const store=createStore(counter);
    return store;
}

export const store= configureStore();
