import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = props.state.messagesData
      .map(message => <Message message={message.message} />);

   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
         </div>
      </div>
   );
}

export default Dialogs;