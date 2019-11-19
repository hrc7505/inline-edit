import IItem from "../../models/IItem";

export default interface IListPropsFromState {
    isLoading: boolean;
    users: IItem[];
}