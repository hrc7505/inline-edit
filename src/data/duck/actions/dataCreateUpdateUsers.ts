import IDataCreateUpdateUsersAction from "./interfaces/IDataCreateUpdateUsersAction";
import IDataCreateUpdateDataPayload from "./interfaces/IDataCreateUpdateDataPayload";
import IItem from "../../../models/IItem";
import DataActionTypes from "../actionTypes/dataActionTypes";

const dataCreateUpdateUsers =
    (payload: IDataCreateUpdateDataPayload<IItem>): IDataCreateUpdateUsersAction => ({
        type: DataActionTypes.DATA_CREATE_UPDATE_USERS,
        payload,
    });

export default dataCreateUpdateUsers;