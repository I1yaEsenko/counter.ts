import React from 'react';
import s from '../style.module.css'
import {Button} from "./Button";

type ButtonsPropsType = {
   incCounter: () => void
   resetCounter: () => void
   valueCounter: number
   endValue: number
   message: string | null
   error: string | null
   settingsHandler: () => void
}

const CounterSingleButtons = ({
                                 incCounter,
                                 resetCounter,
                                 settingsHandler,
                                 valueCounter,
                                 endValue,
                                 message,
                                 error
                              }: ButtonsPropsType) => {
   const disabledButtonInc = () => valueCounter === endValue
   const disabledButtonReset = () => message !== '' || error !== ''

   return (
      <div className={s.buttonsWrapper}>
         <Button name={'inc'} callback={incCounter} disabled={disabledButtonInc()}/>
         <Button name={'reset'} callback={resetCounter} disabled={false}/>
         <Button name={'set'} callback={settingsHandler} disabled={false}/>
      </div>
   );
};

export default CounterSingleButtons;