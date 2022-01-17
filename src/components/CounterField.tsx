import React from 'react';
import s from '../style.module.css'

type FieldPropsType = {
   valueCounter: number
   valueEnd: number
   message: string | null
   error: string | null
}
const CounterField = ({valueCounter, valueEnd, message, error}: FieldPropsType) => {


   return (
      (message !== '' && error !== 'Incorrect value' ? <div className={`${s.counterText} ${s.mainField}`}>{message}</div>
         : error !== '' ? <div className={`${s.errorMessage} ${s.mainField}`}>{error}</div> :
            <div
               className={valueCounter === valueEnd ?
                  `${s.counterNumber} ${s.red} ${s.mainField}`
                  : `${s.counterNumber} ${s.mainField}`}>
               {valueCounter}</div>)

   );


};

export default CounterField;



