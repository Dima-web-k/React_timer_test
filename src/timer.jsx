import { useEffect, useState } from 'react'
import style from './timer.module.css'

export default function Timer() {
    const workTime = 1
    const restTime = 1
    const [timerType, setType] = useState('work')
    const [Min, setMin] = useState(workTime)
    const [Sec, setSec] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {

            if (Sec === 0 & Min === 0){
                if (timerType === "work"){
                    setMin(restTime)
                    setType('rest')
                }
                else{
                    setMin(workTime)
                    setType('work')
                }
            }
            else if (Sec === 0){ 
                    setMin(Min-1)
                    setSec(59)
            } 
            else{
                setSec(Sec-1) 
            }

        }, 1000)
        return ()  => {
        clearInterval(id)
        }
        

    })

    return (
        <>
        <h1> Time to <span className={style.timerType}> {timerType} </span> ! </h1>
        <p className={style.timer}>{Min} : {Sec}</p>
        </>
    )
}