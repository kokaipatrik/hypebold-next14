import '@/app/assets/scss/home.scss';

import Button from './components/Form/Button';
import ProductsHeader from './components/Homepage/ProductsHeader';

export default function Home() {
  return (
    <main className='home flex'>
      <div className='container relative mx-auto px-[20px] py-[40px] lg:py-[80px]'>
        <h1 className='text-center'>Buy, sell your best fashion.</h1>
        <p className='mt-[12px] text-center text-xl font-medium'>
          Create your own ecommerce profile and start sell
        </p>
        <Button
          type='submit'
          title='Explore products'
          className='btn btn-gradient arrow-right mx-auto mt-[40px] block'
        />
        <div className='absolute left-0 top-0 z-[-1] h-full w-full'>
          <ProductsHeader />
        </div>
      </div>
    </main>
  );
}
