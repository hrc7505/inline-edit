import * as React from 'react';
import './App.css';
import { DetailsList, IColumn, Toggle, TextField, Dropdown } from 'office-ui-fabric-react';

enum IColumnKey {
  ToggleField = "toggleField",
  TextField = "textField",
  Dropdown = "dropdownField",
};

interface IItem {
  id: number;
  toggleFieldValue: boolean;
  textFieldValue: string;
  dropdownValue: string;
}

export default class App extends React.Component {
  private items = [
    {
      id: 1,
      toggleFieldValue: true,
      textFieldValue: "First",
      dropdownValue: "firstD",
    },
    {
      id: 2,
      toggleFieldValue: false,
      textFieldValue: "Second",
      dropdownValue: "SecondD",
    },
  ];

  public render() {
    return (
      <DetailsList
        items={this.items}
        setKey="set"
        columns={this.getColumns()}
        onRenderItemColumn={this.renderItemColumn as any}

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

  private renderItemColumn = (item: IItem, index: number, column: IColumn): React.ReactNode => {
    switch (column.key) {
      case IColumnKey.ToggleField:
        return (
          <Toggle
            checked={item.toggleFieldValue}
            onText="Yes"
            offText="No"
            onChange={(e, checked: boolean | undefined) => this.onChange("toggleFieldValue", checked as boolean, index)}
          />
        );

      case IColumnKey.TextField:
        return (
          <TextField
            value={item.textFieldValue}
            onChange={(e, checked: string | undefined) => this.onChange("textFieldValue", checked as string, index)}
          />
        );

      case IColumnKey.Dropdown:
        return (
          <Dropdown
         // selectedKey={selectedItem ? selectedItem.key : undefined}
        //  onChange={this._onChange}
          placeholder="Select an option"
          options={[
           // { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
            { key: 'apple', text: 'Apple' },
            { key: 'banana', text: 'Banana' },
            { key: 'orange', text: 'Orange', disabled: true },
            { key: 'grape', text: 'Grape' },
          //  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
       //     { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
            { key: 'broccoli', text: 'Broccoli' },
            { key: 'carrot', text: 'Carrot' },
            { key: 'lettuce', text: 'Lettuce' }
          ]}
          styles={{ dropdown: { width: 300 } }}
        />
          );

      default:
        return <span>nothing</span>;
    }
  }

  private getColumns(): IColumn[] {
    return [
      {
        key: IColumnKey.ToggleField,
        name: "Toggle Field",
        fieldName: IColumnKey.ToggleField,
        minWidth: 75,
        maxWidth:75,
      },
      {
        key: IColumnKey.TextField,
        name: "TextField Field",
        fieldName: IColumnKey.TextField,
        minWidth: 100,
        maxWidth:150,
      },
      {
        key: IColumnKey.Dropdown,
        name: "Dropdown Field",
        fieldName: IColumnKey.Dropdown,
        minWidth: 100,
        maxWidth:150,
      },
    ];
  }

}