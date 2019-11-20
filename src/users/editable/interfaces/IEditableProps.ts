import { IColumn } from "office-ui-fabric-react";

import IItem from "../../../models/IItem";
import FieldKey from "../enums/fieldKey";
import { EditedData } from "../../allUsersComponent";

export default interface IEditableProps {
    item: IItem;
    index: number;
    column: IColumn;
    isEditMode: boolean;
    onChange: (fieldKey: FieldKey, value: boolean | string, index: number) => void;
    onActionBtnClick: (itemIndex: number) => void;
    itemToShow: { [key: string]: string | boolean; };
    updateEditedData: (data: EditedData) => void;
    isLoading: boolean;
}