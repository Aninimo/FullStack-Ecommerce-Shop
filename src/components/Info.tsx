import useCart from '../hooks/use-cart'
import { Product } from '../types'

interface InfoProps {
  data: Product
}

export function Info({
  data
}: InfoProps){
  const cart = useCart()
  
  const onAddToCart = () => {
    cart.addItem(data)
  }
  
  return(
    <div>
      <div className='flex flex-col md:flex-row gap-4'>
        <img 
          src={data.images?.[0]?.url}
          className='w-full md:w-68'
        />
        <div className='p-4'>
          <p>
            {data.name}
          </p>
          <p>${data.price}</p>
          <div className='flex flex-col md:flex-row items-center gap-x-4 mt-4 mb-4'>
            <h3 className='font-semibold text-black'>Size:</h3>
            <div>
              {data?.size?.value}
            </div>
          </div>
          <div className='flex flex-col items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Color:</h3>
            <div className='h-6 w-6 rounded-full border border-gray-600' style={{ backgroundColor: data?.color?.value }} />
          </div>
          <button 
            onClick={onAddToCart}
            className='bg-lime-300 p-2 px-8 rounded mt-4'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
