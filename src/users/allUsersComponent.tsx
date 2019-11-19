import * as React from 'react';
import { DetailsList, IColumn, Toggle, TextField, Dropdown, IDropdownOption, ActionButton, Spinner } from 'office-ui-fabric-react';

import IAllUsersProps from './interfaces/IAllUsersProps';
import IItem from '../models/IItem';
import ColumnKey from './enums/ColumnKey';
import CommonUtils from '../utils/CommonUtils';
import dataCreateUpdateUsers from '../data/duck/actions/dataCreateUpdateUsers';

export default class AllUsersComponent extends React.Component<IAllUsersProps> {
  private editableItemIndex: number = -1;

  public render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div style={{ maxWidth: 850, width: "100%", border: "1px solid #f3f2f1" }}>
        <DetailsList
          items={this.props.users}
          setKey="set"
          columns={CommonUtils.getColumns()}
          onRenderItemColumn={this.renderItemColumn}
        />
      </div>
    );
  }

  public componentDidMount() {
    this.props.getData();
  }

  private onChange = (key: string, value: boolean | string, index: number) => {
    /* this.props.users[index] = {
      ...this.props.users[index],
      [key]: value,
    }; */
    this.props.dispatch(dataCreateUpdateUsers({
      data: {
        [this.props.users[index].id]:{
          ...this.props.users[index],
          [key]: value,
        }
      }
    }) as any);
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