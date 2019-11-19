import IData from "./IData";
import IItem from "../../../models/IItem";

export default interface IDataState {
    users: IData<IItem>;
}