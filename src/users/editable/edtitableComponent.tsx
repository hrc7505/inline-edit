import * as React from "react";
import { Toggle, TextField, Dropdown, IDropdownOption, ActionButton, Spinner, SpinnerSize } from 'office-ui-fabric-react';

import IEditableProps from "./interfaces/IEditableProps";
import ColumnKey from "../enums/ColumnKey";
import CommonUtils from "../../utils/CommonUtils";
import FieldKey from "./enums/fieldKey";

export default class EditableComponent extends React.Component<IEditableProps> {
    public render() {
        const { index, column, isEditMode, item, itemToShow } = this.props;
        let compoToRender;

        switch (column.key) {
            case ColumnKey.ToggleField:
                compoToRender = (
                    !isEditMode
                        ? (item[FieldKey.ToggleFieldValue] ? "Yes" : "No")
                        : <Toggle
                            checked={itemToShow[FieldKey.ToggleFieldValue] as boolean}
                            onText="Yes"
                            offText="No"
                            onChange={(e, checked?: boolean) => this.props.onChange(FieldKey.ToggleFieldValue, checked as boolean, index)}
                        />
                );
                break;

            case ColumnKey.TextField:
                compoToRender = (
                    !isEditMode
                        ? item[FieldKey.TextFieldValue]
                        : <TextField
                            value={itemToShow[FieldKey.TextFieldValue] as string}
                            onChange={(e, newValue?: string) => this.props.onChange(FieldKey.TextFieldValue, newValue as string, index)}
                        />
                );
                break;

            case ColumnKey.Dropdown:
                if (!isEditMode) {
                    const option = CommonUtils.getDropdownOptions().find((option: IDropdownOption) => option.key === item[FieldKey.DropdownValue]);
                    return option ? option.text : null;
                }

                compoToRender = (
                    <Dropdown
                        selectedKey={itemToShow[FieldKey.DropdownValue] as string}
                        onChange={(e, option?: IDropdownOption, i?: number) =>
                            this.props.onChange(FieldKey.DropdownValue, (option as IDropdownOption).key as string, index)}
                        placeholder="Select an item"
                        options={CommonUtils.getDropdownOptions()}
                        styles={{ dropdown: { width: 200 } }}
                    />
                );
                break;

            case ColumnKey.Edit:
                compoToRender = this.props.isLoading
                    ? (
                        <Spinner
                            label="Saving..."
                            labelPosition="right"
                            styles={{ root: { justifyContent: "flex-start" } }}
                            size={SpinnerSize.small}
                        />
                    )
                    : (
                        <ActionButton
                            iconProps={{ iconName: !isEditMode ? 'edit' : "save" }}
                            onClick={this.handleActionBtnClick}
                        >
                            {!isEditMode ? "Edit" : "Save"}
                        </ActionButton>
                    );
                break;

            default:
                compoToRender = null;
                break;
        }

        return (
            <div style={{ pointerEvents: this.props.isLoading ? "none" : "auto" }}>
                {compoToRender}
            </div>
        );
    }

    private handleActionBtnClick = () => {
        if (!this.props.isEditMode) {
            this.props.updateEditedData({
                [this.props.index]: {
                    [FieldKey.ToggleFieldValue]: this.props.item.toggleFieldValue,
                    [FieldKey.TextFieldValue]: this.props.item.textFieldValue,
                    [FieldKey.DropdownValue]: this.props.item.dropdownValue,
                }
            });
        }
        this.props.onActionBtnClick(this.props.index);
    }
}