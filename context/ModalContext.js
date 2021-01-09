import React, { createContext, useState, useContext } from 'react'

const ModalContext = createContext()

export default function ModalProvider({ children }){

    const [ modalVisibility, setModalVisibility] = useState(false);

    return(
        <ModalContext.Provider
            value={{
                modalVisibility,
                setModalVisibility
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    const { modalVisibility, setModalVisibility } = context; 
    return { modalVisibility, setModalVisibility };
}