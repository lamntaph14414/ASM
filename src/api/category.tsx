import instance from "./instance";

export const list = ()=>{
    const url = `category`;
    return instance.get(url);
}
export const remove = (id:number) =>{
    const url =`category/${id}`
    return instance.delete(url)
}
export const read = (id) => {
    const url = `category/${id}`;
    return instance.get(url);
}
export const create = (category) =>{
    const url =`category`
    return instance.post(url,category);
}
export const update = (category) => {
    const url = `category/${category._id}`;
    return instance.put(url, category);
}
export const get = (id:number) =>{
    const url = `category/${id}`
    return instance.get(url);
}
export const relateProduct = (idCate, idPro)=>{
    const url = `category/${idCate}/${idPro}`;
    return instance.get(url);
}