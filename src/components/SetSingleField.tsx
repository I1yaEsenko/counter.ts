import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../style.module.css";

type SetFiledType = {
   changeEndValue: (value: number) => void
   changeStartValue: (value: number) => void
   setError:(value:string)=>void
   setValueEnd: number
   setValueStart: number
}


const SetField = ({setValueEnd, setValueStart, changeEndValue, changeStartValue, setError}: SetFiledType) => {



   const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let startValue = (e.currentTarget.value)
      changeStartValue(JSON.parse(startValue))
      JSON.parse(startValue) > setValueEnd || JSON.parse(startValue) < 0 || JSON.parse(startValue) === setValueEnd
         ? setError('Incorrect value') : setError('')
   }

   const setEndValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let endValue = (e.currentTarget.value)
      changeEndValue(JSON.parse(endValue))
      JSON.parse(endValue) === setValueStart || JSON.parse(endValue) < setValueStart
         ? setError('Incorrect value') : setError('')
   }

   const errorStartHandler =
      setValueStart < 0 ||
      setValueEnd < setValueStart ||
      setValueStart === setValueEnd
         ? `${s.error} ${s.setInput}` : `${s.setInput}`


   const errorEndHandler =
      setValueEnd < setValueStart ||
      setValueStart === setValueEnd
         ? `${s.error} ${s.setInput}`  : `${s.setInput}`

   return (
      <>
         <div className={`${s.mainField} ${s.setField}`}>
            <div className={s.styleValue}>Max value:
               <input className={errorEndHandler}
                      type={"number"}
                      onInput={setEndValueHandler}
                      value={setValueEnd}
               />
            </div>
            <div className={s.styleValue}>Start value:
               <input className={errorStartHandler}
                      type={"number"}
                      onInput={setStartValueHandler}
                      value={setValueStart}
               />
            </div>
         </div>

      </>
   );
};

export default SetField;