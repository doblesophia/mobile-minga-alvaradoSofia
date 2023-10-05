import { loginReducer } from "./reducers/loginReducer.js";
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        user_reduce:loginReducer,
    }

    // Otros reductores aquÃ­...
});
export default store 