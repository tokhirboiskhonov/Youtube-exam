import React from "react";
import { Context } from "../Context/Localization";

const useLanguages = ()=>{
    const ctx = React.useContext(Context)

    return [ctx.lang, ctx.setLang];
}
export default useLanguages;