import { Navbar } from '../components/Navbar'
import { Billboard } from '../components/Billboard'
import { Categories } from '../components/Categories'
import { ProductList } from '../components/ProductList'
import { Footer } from '../components/Footer'
import getBillboard from '../actions/get-billboard'
import getCategories from '../actions/get-categories'
import getProducts from '../actions/get-products'
import { 
  Billboard as BillboardType,
  Product as ProductType,
  Category as CategoryType } from '../types'

interface MyComponentProps {
  billboard: BillboardType;
  products: ProductType[]; 
  categories: CategoryType[]; 
}

export default function MyComponent({ 
  billboard,
  products,
  categories,
}: MyComponentProps) {
  return (
    <div className='w-full'>
      <Navbar/>
      <div className='flex-col justify-center items-center p-4'>
        <Billboard 
          data={billboard}
        />
        <Categories data={categories}/>     
        <ProductList items={products} />
      </div>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const billboard = await getBillboard('64fdbd30cc87a32c0db054cb')
    const products = await getProducts({ isFeatured: true })
    const categories = await getCategories()

    return {
      props: {
        billboard,
        products,
        categories,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados:', error);

    return {
      props: {
        billboard: null,
        products: [],
        categories: [],
      },
    };
  }
}
