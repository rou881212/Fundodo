import React from 'react';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/default';
import styles from '@/pages/hotel/detail/index.module.scss';
import SelectDetail from './selectDetail';
import HotelImg from './hotelImg';


export default function HotelPage() {
  return (
    <>
      <Head>
        <title>立即預定</title>
      </Head>
      {/* <div className={styles.pageContainer}> */}
        <div className={styles.container}>
          <HotelImg />
          <div className={styles.wrapper}>
            <SelectDetail />
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

HotelPage.layout = DefaultLayout;
