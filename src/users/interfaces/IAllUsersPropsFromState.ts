import IItem from "../../models/IItem";

export default interface IListPropsFromState {
    isLoading: boolean;
    listItems: IItem[];
    editingIndex: number;
    isRowLoading: boolean;
}