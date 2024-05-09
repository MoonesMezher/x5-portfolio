import { useContext } from "react"
import { AdminContext } from "../context/AdminContext"

export const useAdminContext = () => {
    const context = useContext(AdminContext);

    if(!context) {
        throw Error("useAdminContext does not work");
    }

    return context
}