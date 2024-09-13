import scss from './index.module.scss';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/default';
import Section from './section';
import Breadcrumb from './breadcrumb';
import Select from './select';
import Aside from './aside';
import ProductGrid from './productGrid';

export default function ProductList() {
  
  return (
    <>
      <Head>
        <title>productList</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
        <Section />
        <div
          className={[
            'd-flex',
            scss.justifyContentBetween,
            scss.margin,
          ].join(' ')}
        >
          <Breadcrumb />
          <Select />
        </div>
        <div className={['d-flex', scss.gap, scss.my].join(' ')}>
          <Aside />
          <ProductGrid />
        </div>
        
      </main>
    </>
  );
}
ProductList.layout = DefaultLayout;