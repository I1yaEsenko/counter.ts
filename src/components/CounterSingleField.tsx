import React from 'react';
import s from '../style.module.css'

type FieldPropsType = {
   valueCounter: number
   valueEnd: number
}
const CounterSingleField = ({valueCounter, valueEnd}: FieldPropsType) => {

   return (
      <div
         className={valueCounter === valueEnd ?
            `${s.counterNumber} ${s.red} ${s.mainField}`
            : `${s.counterNumber} ${s.mainField}`}>
         {valueCounter}</div>)

};

export default CounterSingleField;



