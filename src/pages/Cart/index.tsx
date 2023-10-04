import { useEffect, useState } from 'react'

import { Summary } from '../../components/CartComponents/Summary'
import { CartItem } from '../../components/CartComponents/CartItem'
import useCart from '../../hooks/use-cart'

export default function Cart(){
  const [isMounted, setIsMounted] = useState(false)

  const cart = useCart()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return(
    <div className='p-4'>
      <Summary />
      <ul>
       {cart.items.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  )
}
