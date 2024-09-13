import DefaultLayout from '@/components/layout/default';
import scss from './member.module.scss';
import logo from '@/public/logo_temp.png';
import Image from 'next/image';
import Link from 'next/link';

export default function MemberPage() {

  
  return (
    <>
      <main className={scss.container}>
        <div className={scss.text}>
          <h3>
            會員註冊成功 <br />
          </h3>
          <p>
            歡迎加入Fundod翻肚肚 <br />
          </p>
          <p>
            您現在已登入 <br />
          </p>
          <p>
            <span>請到信箱點選認證信 </span>
            <br />
          </p>
        </div>
        <div className={scss.btnBox}>
          <button className={scss.bSecondary2}>立即購物</button>
          <Link href="/member/peopleInfo"><button className={scss.bSecondary}>完善會員資料</button></Link>
        </div>
      </main>
    </>
  );
}
MemberPage.layout = DefaultLayout;
