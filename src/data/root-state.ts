import rootReducer from "./root-reducer";
import { StateType } from 'typesafe-actions';


export type RootState = StateType<typeof rootReducer>; 