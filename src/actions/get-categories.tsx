import { Category } from '../types';

const URL = 'https://full-stack-ecommerce-dashboard.vercel.app/api/650ccc0ab7bfd9b0b3b62959/categories';

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json(); 

  return data;
};

export default getCategories;
