import IAllUsersUpdateFieldDataPayload from "./interfaces/IAllUsersUpdateFieldDataPayload";
import IAllUsersUpdateFieldAction from "./interfaces/IAllUsersUpdateFieldAction";
import AllUsersActionTypes from "../actionTypes/AllUsersActionTypes";

const allUsersUpdateField = (payload: IAllUsersUpdateFieldDataPayload): IAllUsersUpdateFieldAction => ({
    type: AllUsersActionTypes.ALL_USERS_UPDATE_FIELD,
    payload,
});

export default allUsersUpdateField;