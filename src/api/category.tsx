import { CategoryType } from "../pages/types/category";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";

export const list = ()=>{
    const url = `/category`;
    return instance.get(url);
}
export const remove = (id:number) =>{
    const url =`/category/${id}`
    return instance.delete(url)
}