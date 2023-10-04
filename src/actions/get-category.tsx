import { Category } from '../types'

const URL='https://full-stack-ecommerce-dashboard.vercel.app/api/650ccc0ab7bfd9b0b3b62959/categories'

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json()
}

export default getCategory
