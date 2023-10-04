import { Product } from '../types'

const URL='https://full-stack-ecommerce-dashboard.vercel.app/api/650ccc0ab7bfd9b0b3b62959/products'

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
