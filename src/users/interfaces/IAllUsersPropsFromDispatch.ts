import IItem from "../../models/IItem";

export default interface IListPropsFromDispatch {
    getData: () => void;
    updateModal: (userModal: IItem, editingIndex: number) => void;
    selectRowToEdit: (editingIndex: number) => void;
}