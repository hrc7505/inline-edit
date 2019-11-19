import * as React from 'react';
import { DetailsList, IColumn, Toggle, TextField, Dropdown, IDropdownOption, ActionButton } from 'office-ui-fabric-react';

import ColumnKey from './ColumnKey';
import CommonUtils from './CommonUtils';
import IItem from './IItem';

export default class List extends React.Component {
  private editableItemIndex: number = -1;
  private items: IItem[] = CommonUtils.getRandomItems();

  public render() {
    return (
      <DetailsList
        items={this.items}
        setKey="set"
        columns={CommonUtils.getColumns()}
        onRenderItemColumn={this.renderItemColumn}
      />
    );
  }

  onChange = (key: string, value: boolean | string, index: number) => {
    this.items[index] = {
      ...this.items[index],
      [key]: value,
    };

    this.forceUpdate();
  }

  private renderItemColumn = (item?: IItem, index?: number, column?: IColumn): React.ReactNode => {
    const newItem: IItem = item as IItem;
    const itemIndex: number = index as number;

    switch ((column as IColumn).key) {
      case ColumnKey.ToggleField:
        return (
          this.editableItemIndex !== itemIndex
            ? (newItem.toggleFieldValue ? "Yes" : "No")
            : <Toggle
              checked={newItem.toggleFieldValue}
              onText="Yes"
              offText="No"
              onChange={(e, checked: boolean | undefined) => this.onChange("toggleFieldValue", checked as boolean, itemIndex)}
            />
        );

      case ColumnKey.TextField:
        return (
          this.editableItemIndex !== itemIndex
            ? newItem.textFieldValue
            : <TextField
              value={newItem.textFieldValue}
              onChange={(e, newValue: string | undefined) => this.onChange("textFieldValue", newValue as string, itemIndex)}
            />
        );

      case ColumnKey.Dropdown:
        if (this.editableItemIndex !== itemIndex) {
          const option = CommonUtils.getDropdownOptions().find((option: IDropdownOption) => option.key === newItem.dropdownValue);
          return option ? option.text : null
        }

        return (
          <Dropdown
            selectedKey={newItem.dropdownValue ? newItem.dropdownValue : undefined}
            onChange={(event, option?: IDropdownOption, i?: number) =>
              this.onChange("dropdownValue", (option as IDropdownOption).key as string, itemIndex)}
            placeholder="Select an item"
            options={CommonUtils.getDropdownOptions()}
            styles={{ dropdown: { width: 200 } }}
          />
        );

      case ColumnKey.Edit:
        return (
          <ActionButton
            iconProps={{ iconName: this.editableItemIndex !== itemIndex ? 'edit' : "save" }}
            onClick={() => {
              this.editableItemIndex = this.editableItemIndex !== itemIndex ? itemIndex : -1;
              this.forceUpdate();
            }}
          >
            {this.editableItemIndex !== itemIndex ? "Edit" : "Save"}
          </ActionButton>
        );

      default:
        return null;
    }
  }
}