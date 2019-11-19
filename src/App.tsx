import * as React from 'react';
import './App.css';
import { DetailsList, IColumn, Toggle, TextField, Dropdown, IDropdownOption } from 'office-ui-fabric-react';
import ColumnKey from './ColumnKey';
import CommonUtils from './CommonUtils';
import IItem from './IItem';

export default class App extends React.Component {
  private items: IItem[] = [
    {
      id: 1,
      toggleFieldValue: true,
      textFieldValue: "First",
      dropdownValue: "yes",
    },
    {
      id: 2,
      toggleFieldValue: false,
      textFieldValue: "Second",
      dropdownValue: "no",
    },
  ];  

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
    const columnIndex: number = index as number;

    switch ((column as IColumn).key) {
      case ColumnKey.ToggleField:
        return (
          <Toggle
            checked={newItem.toggleFieldValue}
            onText="Yes"
            offText="No"
            onChange={(e, checked: boolean | undefined) => this.onChange("toggleFieldValue", checked as boolean, columnIndex)}
          />
        );

      case ColumnKey.TextField:
        return (
          <TextField
            value={newItem.textFieldValue}
            onChange={(e, newValue: string | undefined) => this.onChange("textFieldValue", newValue as string, columnIndex)}
          />
        );

      case ColumnKey.Dropdown:
        return (
          <Dropdown
            selectedKey={newItem.dropdownValue ? newItem.dropdownValue : undefined}
            onChange={(event, option?: IDropdownOption, i?: number) =>
              this.onChange("dropdownValue", (option as IDropdownOption).key as string, columnIndex)}
            placeholder="Select an option"
            options={CommonUtils.getDropdownOptions()}
            styles={{ dropdown: { width: 200 } }}
          />
        );

      default:
        return null;
    }
  }
}