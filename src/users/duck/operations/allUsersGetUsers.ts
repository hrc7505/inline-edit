import { Dispatch } from "redux";

import allUsersRequestData from "../actions/allUsersRequestData";
import allUsersLoadData from "../actions/allUsersLoadData";
import IItem from "../../../models/IItem";
import CommonUtils from "../../../utils/CommonUtils";
import IDataCreateUpdateDataPayload from "../../../data/duck/actions/interfaces/IDataCreateUpdateDataPayload";
import dataCreateUpdateUsers from "../../../data/duck/actions/dataCreateUpdateUsers";

const allUsersGetUsers = () => (
    async (dispatch: Dispatch) => {
        // Request data
        dispatch(allUsersRequestData());
        const timeoutId = setTimeout(() => {
            // Delaying to show spinner in the screen.

            // Random item list.
            const items: IItem[] = CommonUtils.getRandomItems();

            // Dispatch ids to component specific reducer
            dispatch(allUsersLoadData({
                users: items.map((item: IItem) => item.id)
            }));

            const payload: IDataCreateUpdateDataPayload<IItem> = {
                data: {}
            };

            items.forEach((user: IItem): void => {
                payload.data[user.id] = user;
            });

            // Dispatch models to data specific reducer
            dispatch(dataCreateUpdateUsers(payload));

            // Clearing timer.
            clearTimeout(timeoutId);
        }, 3000);
    }
);

export default allUsersGetUsers;