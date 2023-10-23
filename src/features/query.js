import {API } from "@/common/api"

export async function getProducts(skip){
    const data = await API.get(`/get-product?skip=${skip}`);
    return data;
}

