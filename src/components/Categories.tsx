import Link from 'next/link';

import { Category } from '../types';

interface CategoryProps {
  data: Category[];
}

export function Categories({
  data
}: CategoryProps) {
  return (
    <div className='flex justify-center mb-8'>
      <div className='grid grid-cols-2 gap-8'>
        {data.map((item) => (
         <Link href={`/category/${item.id}`} key={item.id}>
          <div className={`w-full lg:w-64 md:w-64 sm:w-40 h-44 ${item.name === 'Man' ? 'bg-lime-300' : 'bg-gray-800 text-white'} p-4 rounded`} key={item.id}>
                <p className='font-bold mt-8 mb-8'>
                  {item.name}
                </p>
                <button className={`${item.name === 'Man' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-2`}>
                  Open store
                </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
