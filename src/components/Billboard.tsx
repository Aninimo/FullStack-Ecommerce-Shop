import { Billboard } from '../types'

interface BillboardProps {
  data: Billboard;
}

export function Billboard({
  data
}: BillboardProps) {
  return ( 
    <div className='flex justify-between bg-gray-300 p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden mt-8 mb-8'>
      <img src={data?.imageUrl}/>  
      <div className='font-bold text-2xl sm:text-3xl lg:text-4xl max-w-lg mt-8 sm:mt-12'>
        {data.label}
      </div>
    </div>
  )
}
