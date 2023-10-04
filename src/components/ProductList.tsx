import { MouseEvent } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

import useCart from '../hooks/use-cart';
import { Product } from '../types';

interface ProductListProps {
  items: Product[];
}

export function ProductList({ items }: ProductListProps) {
  const cart = useCart();

  const onAddToCart = (event: MouseEvent<HTMLButtonElement>, item: Product) => {
    event.stopPropagation();
    cart.addItem(item);
  };

  return (
    <div className='bg-gray-300 p-4' id='shop'>
      <h1 className='font-bold mb-8'>BEST SELLERS</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <a>
              <div className='p-2'>
                <div className='flex justify-center'>
                  <img src={item.images?.[0]?.url} className='w-full h-auto' alt={item.name} />
                </div>
                <p className='mt-2 text-center'>{item.name}</p>
                <div className='flex justify-between mt-2'>
                  <p className='font-semibold'>${item.price}</p>
                  <button
                    className='bg-lime-300 p-2'
                    onClick={(event: MouseEvent<HTMLButtonElement>) => onAddToCart(event, item)}>
                    <Plus />
                  </button>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
