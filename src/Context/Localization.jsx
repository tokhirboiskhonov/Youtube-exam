import React from "react";

const Context = React.createContext(null);

function Provider({children}) {
    const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'en' )

    React.useEffect(()=>{
        if(lang){
            localStorage.setItem('lang', lang)
        }else{
            localStorage.removeItem('lang')
        }
    })

    return <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>
}

export { Context, Provider };