import { IColumn, IDropdownOption, ColumnActionsMode } from "office-ui-fabric-react";

import IItem from "../models/IItem";
import ColumnKey from "../users/enums/ColumnKey";

const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default class CommonUtils {
    public static getColumns(): IColumn[] {
        return [
            {
                key: "index",
                name: "#",
                fieldName: "index",
                minWidth: 20,
                maxWidth: 20,
                columnActionsMode: ColumnActionsMode.disabled,
                onRender: (item?: IItem, index?: number, column?: IColumn) => (index as number) + 1,
            },
            {
                key: ColumnKey.ToggleField,
                name: "Toggle Field",
                fieldName: ColumnKey.ToggleField,
                minWidth: 100,
                maxWidth: 100,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
            },
            {
                key: ColumnKey.TextField,
                name: "TextField",
                fieldName: ColumnKey.TextField,
                minWidth: 100,
                maxWidth: 150,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
            },
            {
                key: ColumnKey.Dropdown,
                name: "Dropdown Field",
                fieldName: ColumnKey.Dropdown,
                minWidth: 200,
                maxWidth: 200,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
            },
            {
                key: ColumnKey.Edit,
                name: "Edit",
                fieldName: ColumnKey.Edit,
                minWidth: 100,
                maxWidth: 100,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
            },
        ];
    }

    public static getDropdownOptions(): IDropdownOption[] {
        return [
            { key: 'yes', text: 'Yes' },
            { key: 'no', text: 'No' },
            { key: 'none', text: 'None' },
        ]
    };

    public static getRandomItems(): IItem[] {
        const toggleValues = [true, false];
        const textFieldValues = ["Hello", "how are you", "what is your name?","Are you a developer?"];
        const dropdownValues = ["yes", "no", "none"];
        
        const items: IItem[] = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                id: "u-" + i.toString(),
                toggleFieldValue: getRandomItem(toggleValues),
                textFieldValue: getRandomItem(textFieldValues),
                dropdownValue: getRandomItem(dropdownValues),
            });
        }

        return items;
    }
}