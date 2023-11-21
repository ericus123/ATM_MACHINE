import { NotificationManager } from "react-notifications";


export const simpleNotification = (msg, type) => {
    if (type === "SUCCESS") {
        NotificationManager.success(msg, type);
    } else {
        NotificationManager.error(msg, type);
    }

};