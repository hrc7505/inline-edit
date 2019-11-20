import * as React from 'react';
import { ShimmeredDetailsList, IColumn } from 'office-ui-fabric-react';

import IAllUsersProps from './interfaces/IAllUsersProps';
import IUserModel from '../models/IUserModel';
import CommonUtils from '../utils/CommonUtils';
import EditableComponent from './editable/edtitableComponent';

export type EditedData = { [index: number]: { [key: string]: string | boolean } };

export default class AllUsersComponent extends React.Component<IAllUsersProps> {
  private editedData: EditedData = {};

  public render() {
    return (
      <div style={{ width: "100%", border: "1px solid #f3f2f1" }}>
        <ShimmeredDetailsList
          items={this.props.listItems}
          setKey="set"
          columns={CommonUtils.getColumns()}
          onRenderItemColumn={this.renderItemColumn}
          enableShimmer={this.props.isLoading}
        />
      </div>
    );
  }

  public componentDidMount() {
    this.props.getData();
  }

  private onChange = (key: string, value: boolean | string, index: number) => {
    this.editedData = {
      [index]: {
        ...this.editedData[index],
        [key]: value,
      }
    };

    this.forceUpdate();
  }

  private updateEditedData = (data: EditedData) => {
    this.editedData = data;
    this.forceUpdate();
  }

  private handleActionBtnClick = (itemIndex: number) => {
    let index: number;
    if (this.props.editingIndex !== itemIndex) {
      index = itemIndex;
      this.props.selectRowToEdit(index)
    } else {
      index = -1;
      this.props.updateModal({
        ...this.editedData[itemIndex],
        // Todo: Get from argument
        id: this.props.listItems[itemIndex].id
      } as unknown as IUserModel, itemIndex);
    }
  }

  private renderItemColumn = (item: IUserModel, index?: number, column?: IColumn): React.ReactNode => {
    return (
      <EditableComponent
        index={index as number}
        item={item as any}
        column={column as IColumn}
        isEditMode={this.props.editingIndex === index}
        onActionBtnClick={this.props.isRowLoading ? () => null : this.handleActionBtnClick}
        onChange={this.onChange}
        itemToShow={this.editedData[index as number]}
        updateEditedData={this.props.isRowLoading ? () => null : this.updateEditedData}
        isLoading={this.props.editingIndex === index && this.props.isRowLoading}
      />
    );
  }
}