import { IColumn, IDropdownOption, DropdownMenuItemType } from "office-ui-fabric-react";
import ColumnKey from "./ColumnKey";

export default class CommonUtils {
    public static getColumns(): IColumn[] {
        return [
            {
                key: ColumnKey.ToggleField,
                name: "Toggle Field",
                fieldName: ColumnKey.ToggleField,
                minWidth: 100,
                maxWidth: 100,
            },
            {
                key: ColumnKey.TextField,
                name: "TextField Field",
                fieldName: ColumnKey.TextField,
                minWidth: 100,
                maxWidth: 150,
            },
            {
                key: ColumnKey.Dropdown,
                name: "Dropdown Field",
                fieldName: ColumnKey.Dropdown,
                minWidth: 100,
                maxWidth: 150,
            },
        ];
    }

    public static getDropdownOptions(): IDropdownOption[] {
        return [
            { key: 'selectItem', text: 'Select Item', itemType: DropdownMenuItemType.Header },
            { key: 'yes', text: 'Yes' },
            { key: 'no', text: 'No' },
            { key: 'none', text: 'None' },
        ]
    };
}