import React, {useEffect, useState} from 'react';
import s from "../../style.module.css";
import SetField from "../SetField";
import CounterSingleButtons from "../CounterSingleButtons";
import CounterSingleField from "../CounterSingleField";
import SetSingleButton from "../SetSingleButton";
import SetSingleField from "../SetSingleField";

export const CounterSingleWindowMode = () => {

   let [valueStart, setValueStart] = useState<number>(0)
   let [valueEnd, setValueEnd] = useState<number>(5)
   let [counter, setCounter] = useState<number>(valueStart)
   const [error, setError] = useState<string | null>(null)
   const [message, setMessage] = useState<string | null>('enter values counter and press "Set"')
   const [settings, setSettings] = useState<boolean>(true)

   useEffect(() => {
      let valueStartAsString = localStorage.getItem("valueStart")
      let valueEndAsString = localStorage.getItem("valueEnd")
      if (valueStartAsString) {
         let newValueStart = JSON.parse(valueStartAsString)
         setValueStart(newValueStart)
         setCounter(newValueStart)
      }
      if (valueEndAsString) {
         let newValueEnd = JSON.parse(valueEndAsString)
         setValueEnd(newValueEnd)
      }
   }, [])

   const incCounter = () => {
      setCounter(counter + 1)
   }

   const resetCounter = () => {
      setCounter(valueStart)
   }

   const changeStartValue = (value: number) => {
      setValueStart(value)
   }

   const changeEndValue = (value: number) => {
      setValueEnd(value)
   }

   const setValueHandler = () => {
      localStorage.setItem("valueStart", JSON.stringify(valueStart))
      localStorage.setItem("valueEnd", JSON.stringify(valueEnd))
      setCounter(valueStart)
      setMessage('')
      setSettings(true)
   }
   const settingsHandler = () => {
      setSettings(false)
   }
   return (
      <div className={s.wrapper}>

         {settings ? (
            <div className={s.mainBody}>
               <CounterSingleField valueCounter={counter}
                                   valueEnd={valueEnd}
               />
               <CounterSingleButtons valueCounter={counter}
                                     endValue={valueEnd}
                                     message={message}
                                     error={error}
                                     incCounter={incCounter}
                                     resetCounter={resetCounter}
                                     settingsHandler={settingsHandler}/>
            </div>) : (
            <div className={s.mainBody}>
               <SetSingleField
                  changeStartValue={changeStartValue}
                  changeEndValue={changeEndValue}
                  setValueStart={valueStart}
                  setValueEnd={valueEnd}
                  setError={setError}
               />
               <SetSingleButton
                  valueStart={valueStart}
                  valueEnd={valueEnd}
                  setValueHandler={setValueHandler}
               />
            </div>
         )}


      </div>
   );
}

