import { MapStateToProps, MapDispatchToProps, connect, ConnectedComponent } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import IAllUsersPropsFromState from "./interfaces/IAllUsersPropsFromState";
import IAppState from "../duck/interfaces/IAppState";
import IAllUsersPropsFromDispatch from "./interfaces/IAllUsersPropsFromDispatch";
import allUsersGetUsers from "./duck/operations/allUsersGetUsers";
import IAllUsersProps from "./interfaces/IAllUsersProps";
import AllUsersComponent from "./allUsersComponent";
import IData from "../data/duck/interfaces/IData";
import IItem from "../models/IItem";

const getUsers = (ids: string[], users: IData<IItem>) => {
    if (ids && users) {
        return ids.map((id: string) => users[id]);
    }
    return [];
};

const mapStateToProps: MapStateToProps<IAllUsersPropsFromState, object, IAppState> =
    (state: IAppState): IAllUsersPropsFromState => ({
        isLoading: state.userState.isLoading,
        users: getUsers(state.userState.users, state.dataState.users),
    });

const mapDispatchToProps: MapDispatchToProps<IAllUsersPropsFromDispatch, object> =
    (dispatch: ThunkDispatch<IAppState, void, Action>): IAllUsersPropsFromDispatch => ({
        getData: () => dispatch(allUsersGetUsers()),
        dispatch,
    });

const AllUsersContainer: ConnectedComponent<typeof AllUsersComponent, Pick<IAllUsersProps, never> & object> =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllUsersComponent);

export default AllUsersContainer;

