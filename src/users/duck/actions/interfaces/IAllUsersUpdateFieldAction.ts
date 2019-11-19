import AllUsersActionTypes from "../../actionTypes/AllUsersActionTypes";
import IAllUsersUpdateFieldDataPayload from "./IAllUsersUpdateFieldDataPayload";

export default interface IAllUsersUpdateFieldAction {
    type: AllUsersActionTypes.ALL_USERS_UPDATE_FIELD;
    payload: IAllUsersUpdateFieldDataPayload;
}