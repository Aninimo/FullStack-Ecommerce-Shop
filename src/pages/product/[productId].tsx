import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowLeft, ShoppingBasket } from 'lucide-react';

import { Info } from '../../components/Info'
import useCart from '../../hooks/use-cart'
import getProduct from '../../actions/get-product'
import getProducts from '../../actions/get-products'

export default function ProductPage({ 
  product,
  suggestedProducts 
}: {
  product: any; 
  suggestedProducts: any[]; 
}){
  const router = useRouter()
  const cart = useCart()

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const goBack = () => {
    router.back();
  }

  return (
    <div>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <ArrowLeft size={32} onClick={goBack} className='cursor-pointer'/>
          <div className='mt-2 sm:mt-0' onClick={() => router.push('/Cart')}>
            <span className='w-2 h-2 p-2 relative bg-lime-300 rounded-full top-2 left-4'>
              {cart.items.length}
            </span>
            <ShoppingBasket size={32} className='cursor-pointer'/>
          </div>
        </div>
      </div>
      <Info data={product} />
      <h2 className='mt-4 sm:mt-12 text-2xl font-bold ml-4 sm:ml-8'>
        Related items
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {suggestedProducts.map((item) => (
        <Link href={`/product/${item.id}`} key={item.id}>
          <div>
            <img src={item.images?.[0]?.url} className='w-full' alt={item.name}/>
            <p className='mt-2 text-center'>{item.name}</p>
          </div>
         </Link>
         ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.params?.productId as string;

  try {
    const product = await getProduct(productId)
    const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  })

  if (!product) {
    return {
      notFound: true, 
    };
  }

    return {
      props: {
        product,
        suggestedProducts
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error)

    return {
      props: {
        product: null,
        suggestedProducts: []
      },
    };
  }
}
