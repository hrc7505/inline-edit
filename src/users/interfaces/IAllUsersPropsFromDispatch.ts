import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import IAppState from "../../duck/interfaces/IAppState";

export default interface IListPropsFromDispatch {
    getData: () => void;
    dispatch: ThunkDispatch<IAppState, void, Action>;
}