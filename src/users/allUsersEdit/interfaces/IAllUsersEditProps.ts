import { IColumn } from "office-ui-fabric-react";

import { EditedData } from "../../allUsersComponent";

export default interface IAllUsersEditProps {
    item: { [key: string]: string | boolean; };
    index: number;
    column: IColumn;
    isEditMode: boolean;
    onChange: (fieldKey: string, value: boolean | string, index: number) => void;
    onActionBtnClick: (itemIndex: number) => void;
    itemToShow: { [key: string]: string | boolean; };
    updateEditedData: (data: EditedData) => void;
    isLoading: boolean;
}