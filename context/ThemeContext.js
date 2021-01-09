import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export default function ThemeProvider({ children }){

    const [ theme, setTheme ] = useState('#04c9be');

    return(
        <ThemeContext.Provider
            value={{

                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    const { theme, setTheme } = context; 
    return { theme, setTheme };
}