import NotificationManager from "react-notifications/lib/NotificationManager";

export const simpleNotification = (msg,type) => {
    if(type === "SUCCESS"){
        NotificationManager.success(msg, type);
    }else{
         NotificationManager.error(msg, type);
    }
        
};