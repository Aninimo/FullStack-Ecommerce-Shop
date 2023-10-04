import Link from 'next/link';
import { GetServerSidePropsContext } from 'next'; 
import getProducts from '../../actions/get-products';
import getCategory from '../../actions/get-category';
import { Product } from '../../types';

interface CategoryPageProps {
  products: Product[];
}

export default function CategoryPage({ products }: CategoryPageProps) {
  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8 pb-24'>
        <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
          <div className='mt-6 lg:col-span-4 lg:mt-0'>
            {products.length === 0 && <p>No products</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <div>
                    <img src={item.images?.[0]?.url} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const categoryId = context.params?.categoryId as string | undefined;

  try {
    const products: Product[] = await getProducts({
      categoryId: categoryId || '', 
    });

    let category = null;
    if (categoryId) {
      category = await getCategory(categoryId);
    }

    return {
      props: {
        products,
        category,
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);

    return {
      props: {
        products: [],
        category: null,
      },
    };
  }
}
