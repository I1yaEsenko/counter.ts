import React from 'react';
import s from "../style.module.css";
import {Button} from "./Button";

type SetButtonType = {
   setValueHandler: () => void
   valueStart: number
   valueEnd: number
   setValueDisable:number
}

const SetButton = ({setValueHandler, valueStart, valueEnd, setValueDisable}: SetButtonType) => {

   const disabledSetButton = () =>
      valueStart > valueEnd || valueStart === valueEnd || valueStart < 0 || setValueDisable === valueStart

   return (
      <div className={s.buttonsWrapper}>
         <Button name={'Set'} callback={setValueHandler} disabled={disabledSetButton()}/>
      </div>
   );
};

export default SetButton;