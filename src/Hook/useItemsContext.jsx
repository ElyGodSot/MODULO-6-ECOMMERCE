import { ItemsContext } from "../Context/ItemsContext";
import { useContext } from "react";

export const useItemsContext = ()=>{
    const context = useContext(ItemsContext)

    if(!context){
        throw new Error('useItempsContext  debe ser usado dentro de ItemsProvider')
    }
    return context
}
