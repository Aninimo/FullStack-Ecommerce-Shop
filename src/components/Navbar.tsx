import Link from 'next/link'
import { Dumbbell, ShoppingBasket } from 'lucide-react'

import useCart from '../hooks/use-cart'

export function Navbar(){
  const cart = useCart()
  return(
    <nav className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Dumbbell size={32}/>
        <h1 className='font-bold'>
          PRL
        </h1>
      </div>
      <ul className='flex gap-4'>
        <li>
          <a href='#shop'>
            Shop
          </a>
        </li>
        <li>
          <a href='#footer'>
            Contacts
          </a>
        </li>
      </ul>
      <Link href='/Cart'>
        <div>
          <span className='w-2 h-2 p-2 relative bg-lime-300 rounded-full left-4'>
            {cart.items.length}
          </span>
         <ShoppingBasket size={24}/>
        </div>
      </Link>
    </nav>
  )
}
