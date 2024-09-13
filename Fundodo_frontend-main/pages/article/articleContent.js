import React from 'react'
import Image from 'next/image';
import scss from '@/pages/article/articleContent.module.scss';

export default function ArticleContent() {
  return (
    <>
        <div className={[scss.articleContent].join()}>
            <div className={[scss.contentCreater].join()}>
              <div className={[scss.userData].join()}>
                <Image
                  className={[scss.userIcon].join()}
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <div className={[scss.nicknameArea].join()}>
                  <p className={[scss.nickName].join()}>123123123</p>
                  <p className={[scss.creatTime].join()}>2024-07-22</p>
                </div>
              </div>
              <div>點</div>
            </div>
            <div className={[scss.articleTitle].join()}>我的狗拉屎在褲子上</div>
            <div className={[scss.mainContent].join()}>
              今天早晨本該是個平凡的日子，直到我親愛的狗狗決定為我的褲子增添一些"特色"。當時我正忙著準備上班，完全沒注意到我的毛茸茸小夥伴悄悄溜到了我身後。就在我彎腰繫鞋帶的那一刻，災難降臨了。
              一陣熟悉又令人不安的聲音傳來，我立刻意識到發生了什麼。轉身一看，我的褲子後部已經"榮幸"地成為了我家狗狗的臨時廁所。那一刻，我的表情一定精彩極了，介於想笑和想哭之間。
              看著我驚恐的表情，我的狗狗反而一臉無辜，似乎在說："怎麼了？我幫你裝飾了褲子啊！"他搖著尾巴，對自己的"傑作"感到自豪。我不得不佩服他的時機掌握得如此精準，正好選在我最沒防備的時候。
              接下來的半小時，我的浴室變成了一個小型洗衣房和寵物美容院。一邊清理褲子，一邊給狗狗洗澡，我開始思考這個早晨的哲學意義。也許這是生活給我的一個提醒，告訴我要時刻保持警惕，或者提醒我應該更經常帶狗狗出去散步。
              經過一番努力，褲子總算恢復了原狀，狗狗也乾淨得像個小天使。看著鏡子裡略顯狼狽的自己，我不禁笑了出來。這樣的意外雖然討厭，但也讓平凡的生活增添了一些"趣味"。
              最後，我換上乾淨的褲子，帶著一身清新的肥皂味和狗狗的歉意眼神出了門。這個經歷讓我深刻體會到，養狗不僅僅是享受他們的陪伴，更是要接受他們所有的"小驚喜"。
              回想起來，這個早晨雖然開始得不太順利，但卻給了我一個難忘的故事和一個重要的教訓：在生活中，我們要學會笑對突如其來的"狗狗禮物"，因為這些意外往往成為最珍貴的回憶。
            </div>
            <div className={[scss.artiInfo].join()}>
              <div className={[scss.artiTags].join()}>
                <div className={[scss.tag].join()}><p>狗狗</p></div>
                <div className={[scss.tag].join()}><p>寵物</p></div>
                <div className={[scss.tag].join()}><p>內有惡犬</p></div>
              </div>
            </div>
          </div>
    </>
  )
}
