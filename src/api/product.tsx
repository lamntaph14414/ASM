import instance from "./instance";
import {isAuthenticate} from '../utils/localstorage'
const { token, user} = isAuthenticate();

export const list = () => {
    const url = `products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `products/${id}/${user._id}`;;
    return instance.delete(url,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const create = (product) => {
    const url = `products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (id: number) => {
    const url = `products/${id}`;
    return instance.get(url);
}
export const update = (product) => {
    const url = `products/${product.id}/${user._id}`;
    return instance.put(url, product, {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}