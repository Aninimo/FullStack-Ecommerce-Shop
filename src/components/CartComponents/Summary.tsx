import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast'

import useCart from '../../hooks/use-cart';

export function Summary() {
  const router = useRouter();
  const { success, canceled } = router.query;
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (success) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (canceled) {
      toast.error('Something went wrong.');
    }
  }, [success, canceled, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      const response = await fetch(`https://test.aninimi2.repl.co/api/64fa5c0211931183f22cd2c9/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds: items.map((item) => item.id),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location = data.url;
      } else {
        console.error('Error during checkout:', response.status);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div
      className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>
        Order summary
      </h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          <p>{totalPrice}</p>
        </div>
      </div>
      <button 
        onClick={onCheckout}
        disabled={items.length === 0}
        className='w-full mt-6 bg-lime-300 rounded'>
        Checkout
      </button>
    </div>
  );
}
