import DataActionTypes from "../../actionTypes/dataActionTypes";
import IDataCreateUpdateDataPayload from "./IDataCreateUpdateDataPayload";
import IItem from "../../../../models/IItem";

export default interface IDataCreateUpdateUsersAction {
    type: DataActionTypes.DATA_CREATE_UPDATE_USERS;
    payload: IDataCreateUpdateDataPayload<IItem>;
} 