import { Reducer } from "redux";

import IAllUsersRequestDataAction from "./actions/interfaces/IAllUsersRequestDataAction";
import IAllUsersLoadDataAction from "./actions/interfaces/IAllUsersLoadDataAction";
import IAllUsersState from "./interfaces/IAllUsersState";
import AllUsersActionTypes from "./actionTypes/AllUsersActionTypes";
import IAllUsersUpdateFieldAction from "./actions/interfaces/IAllUsersUpdateFieldAction";

type Action = IAllUsersRequestDataAction | IAllUsersLoadDataAction |IAllUsersUpdateFieldAction;

const initialState: IAllUsersState = {
    isLoading: false,
    users: [],
};

const allUsersReducer: Reducer<IAllUsersState, Action> =
    (state: IAllUsersState | undefined, action: Action): IAllUsersState => {
        switch (action.type) {
            case AllUsersActionTypes.ALL_USERS_REQUEST_DATA:
                return {
                    ...state,
                    isLoading: true,
                } as IAllUsersState;

            case AllUsersActionTypes.ALL_USERS_LOAD_DATA:
                return {
                    ...state,
                    isLoading: false,
                    users: action.payload.users,
                } as IAllUsersState;

           /*  case AllUsersActionTypes.ALL_USERS_UPDATE_FIELD:
                return {
                    ...state,
                    isLoading: false,
                    users:{
                        ...state.users,
                    },
                } as IAllUsersState; */

            default:
                return state || initialState;
        }
    };

export default allUsersReducer;