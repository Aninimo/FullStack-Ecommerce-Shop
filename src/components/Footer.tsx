import { Clock1, Dumbbell, PhoneCall, Mail, MapPin } from 'lucide-react'

export function Footer(){
  return (
    <footer id='footer' className='bg-gray-800 p-4 sm:p-6 lg:p-8'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='flex items-center gap-2 mb-4 sm:mb-0'>
          <Dumbbell color='white' size={32} />
          <h1 className='text-white font-bold text-center sm:text-left'>
            PRL
          </h1>
        </div>
        <div>
          <h1 className='text-white text-center sm:text-left'>
            NEWSLETTER
          </h1>
          <input
            placeholder='Email'
            className='rounded p-2 mt-4'
          />
        </div>
      </div>
      <ul className='flex flex-col sm:flex-row justify-center sm:justify-between gap-4 text-white text-center sm:text-left mt-8'>
        <li className='flex flex-col justify-center items-center'>
          <PhoneCall size={24}/>
          (00) 0000-0000
        </li>
        <li className='flex flex-col justify-center items-center'> 
          <MapPin size={24}/>
          Chicago
        </li>
        <li className='flex flex-col justify-center items-center'>
          <Mail size={24}/>
          email@gmail.com
        </li>
        <li className='flex flex-col justify-center items-center'>
          <Clock1 size={24}/>
          Ma-Su 07:00-23:00
        </li>
      </ul>
    </footer>
  )
}
