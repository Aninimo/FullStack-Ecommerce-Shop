import { Color } from '../types'

const URL = 'https://full-stack-ecommerce-dashboard.vercel.app/api/650ccc0ab7bfd9b0b3b62959/colors'

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getColors
