import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Woodland Toys | ${title}`;
    },[title])
}
export default useTitle;