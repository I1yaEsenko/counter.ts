import React, {useEffect, useState} from 'react';
import s from "../../style.module.css";
import SetField from "../SetField";
import SetButton from "../SetButton";
import CounterField from "../CounterField";
import CounterButtons from "../CounterButtons";

export const CounterTwoWindowMode = () => {
   let [valueStart, setValueStart] = useState<number>(0)
   let [valueEnd, setValueEnd] = useState<number>(5)
   let [counter, setCounter] = useState<number>(valueStart)
   const [error, setError] = useState<string | null>(null)
   const [message, setMessage] = useState<string | null>('enter values counter and press "Set"')


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
      console.log(setCounter(valueStart))
      localStorage.setItem("valueStart", JSON.stringify(valueStart))
      localStorage.setItem("valueEnd", JSON.stringify(valueEnd))
      setCounter(valueStart)
      setMessage('')

   }

   return (
      <div className={s.wrapper}>
         <div className={s.mainBody}>
            <SetField
               changeStartValue={changeStartValue}
               changeEndValue={changeEndValue}
               setValueStart={valueStart}
               setValueEnd={valueEnd}
               setError={setError}
            />
            <SetButton
               valueStart={valueStart}
               valueEnd={valueEnd}
               setValueHandler={setValueHandler}
               setValueDisable={counter}
            />
         </div>

         <div className={s.mainBody}>
            <CounterField valueCounter={counter}
                          valueEnd={valueEnd}
                          message={message}
                          error={error}
            />
            <CounterButtons valueCounter={counter}
                            endValue={valueEnd}
                            message={message}
                            error={error}
                            incCounter={incCounter}
                            resetCounter={resetCounter}/>
         </div>
      </div>
   );
}

