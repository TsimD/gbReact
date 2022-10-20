import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./reducers/messagesReducer";
import {chatsReducer} from "./reducers/chatsReducer";

export const reducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer
})


export const store = createStore(reducer);