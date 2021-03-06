import { combineReducers } from 'redux';
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { userFamilyTree } from "./user.reducer";
import { modal } from "./utils.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    userFamilyTree,
    modal,
    alert
});

export default rootReducer;