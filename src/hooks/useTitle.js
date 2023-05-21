import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Woodland Toys`;
    },[title])
}
export default useTitle;