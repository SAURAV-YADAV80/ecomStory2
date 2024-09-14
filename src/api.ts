import axios from 'axios';
import { Product } from './types/Products';
import { ProductListResponse } from './poductListPage';

export function getProductData(id: number): Promise<Product> {
  return axios.get<Product>(`https://myeasykart.codeyogi.io/product/${id}`).then(res => res.data);
}

export function getProductsByIds(ids: number[]): Promise<Product[]> {
  const commaIds = ids.join();
  return axios.get<Product[]>("https://myeasykart.codeyogi.io/products/bulk", {
    params: {
      ids: commaIds,
    }
  }).then(response => response.data);
}

export function getProductList(
  sortBy?: string,
  search?: string,
  page?: number,
  sortType?: 'asc' | 'desc'
): Promise<ProductListResponse> {
  let params: Record<string, string | undefined> = {};

  if (sortBy) {
    params.sortBy = sortBy;
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page.toString();
  }
  
  return axios.get<ProductListResponse>("https://myeasykart.codeyogi.io/products", {
    params,
  }).then(response => response.data);
}

export function saveCart(cart: any): Promise<any> {
  console.log('saveCart is called with', cart);
  return axios.post("https://myeasykart.codeyogi.io/carts", { data: cart }, {
    headers: {
      Authorization: localStorage.getItem("token") || '',
    },
  }).then(response => response.data);
}

export function getCart(): Promise<any[]> {
  return axios.get("https://myeasykart.codeyogi.io/carts", {
    headers: {
      Authorization: localStorage.getItem("token") || '',
    }
  }).then(response => response.data);
}