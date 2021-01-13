import React, { createContext, useState, useContext } from 'react'

const TimeContext = createContext()

export default function TimeProvider({ children }){

    const [ timeConfigs, setTimeConfigs ] = useState({
        pomodoro: 25*60,
        shortBreak: 5*60,
        longBreak: 15*60
    });

    return(
        <TimeContext.Provider
            value={{
                timeConfigs,
                setTimeConfigs
            }}
        >
            {children}
        </TimeContext.Provider>
    )
}

export function useTime() {
    const context = useContext(TimeContext)
    const { timeConfigs, setTimeConfigs } = context; 
    return { timeConfigs, setTimeConfigs };
}