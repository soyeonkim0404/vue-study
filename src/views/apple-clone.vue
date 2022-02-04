<template>
  <div class="contents">
    <div class="row">
      <nav class="global-nav">
        <div class="global-nav-links">
          <a href="#" class="global-nav-item">Rooms</a>
          <a href="#" class="global-nav-item">Ideas</a>
          <a href="#" class="global-nav-item">Stores</a>
          <a href="#" class="global-nav-item">Contact</a>
        </div>
      </nav>
      <nav class="local-nav">
        <div class="local-nav-links">
          <a href="#" class="product-name">AirMug Pro</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
      <section class="scroll-section" id="scroll-section-0">
        <h1>AirMug Pro</h1>
        <div class="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
        </div>
        <div class="sticky-elem main-message a">
          <p>온전히 빠져들게 하는<br />최고급 세라믹</p>
        </div>
        <div class="sticky-elem main-message b">
          <p>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
        </div>
        <div class="sticky-elem main-message c">
          <p>온종일 편안한<br />맞춤형 손잡이</p>
        </div>
        <div class="sticky-elem main-message d">
          <p>새롭게 입가를<br />찾아온 매혹</p>
        </div>
      </section>
      <section class="scroll-section" id="scroll-section-1">
        <p class="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est
          ipsa minima, eligendi error cum vel dolorum pariatur officia facilis
          ipsam voluptatibus ad quasi porro quod quisquam quidem tempora
          accusantium accusamus, quaerat aliquam velit exercitationem incidunt?
          Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam
          dolorum a vero repellat dolor, inventore ab odit totam molestias
          expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt
          ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit
          sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat
          aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium
          enim beatae sint architecto cum numquam inventore rerum animi sed
          nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat
          error officiis magnam dolorum iste aspernatur at est! Quo,
          consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati
          voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente
          dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint
          error laborum eveniet labore nam ducimus quisquam in repudiandae
          impedit excepturi dignissimos tenetur libero placeat rerum maxime
          tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas
          nesciunt iste, facilis mollitia illo qui placeat temporibus inventore
          obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem,
          deleniti nobis accusantium, aspernatur beatae.
        </p>
      </section>
      <section class="scroll-section" id="scroll-section-2">
        <div class="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
        </div>
        <div class="sticky-elem main-message a">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div class="sticky-elem desc-message b">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <div class="pin"></div>
        </div>
        <div class="sticky-elem desc-message c">
          <p>디자인 앤 퀄리티 오브 스웨덴,<br />메이드 인 차이나</p>
          <div class="pin"></div>
        </div>
      </section>
      <section class="scroll-section" id="scroll-section-3">
        <p class="mid-message">
          <strong>Retina 머그</strong><br />
          아이디어를 광활하게 펼칠<br />
          아름답고 부드러운 음료 공간.
        </p>
        <canvas class="image-blend-canvas" width="1920" height="1080"></canvas>
        <p class="canvas-caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
          fuga quae perspiciatis veniam impedit et, ratione est optio porro.
          Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
          Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
          inventore a rerum distinctio vero illo magni possimus temporibus
          dolores neque adipisci, repudiandae repellat. Ducimus accusamus
          similique quas earum laborum. Autem tempora repellendus asperiores
          illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
          rerum neque error deleniti quis, et, quibusdam, est autem voluptate
          rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
          perferendis iusto explicabo animi eos ratione obcaecati.
        </p>
      </section>
      <footer class="footer">2020, 1분코딩</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'apple-clone',
  data() {
    return {
      sceneInfo: [
        {
          type: 'sticky',
          heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
          scrollHeight: 0,
          objs: {
            container: document.querySelector('#scroll-section-0'),
          },
        },
        {
          type: 'normal',
          heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
          scrollHeight: 0,
          objs: {
            container: document.querySelector('#scroll-section-0'),
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.contents {
  overflow-x: hidden;
}
.global-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
}
.local-nav {
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;
}
.local-nav-sticky .local-nav {
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  /* for iPhone */
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  -moz-backdrop-filter: saturate(180%) blur(15px);
  -o-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
}
.global-nav-links,
.local-nav-links {
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
}
.global-nav-links {
  justify-content: space-between;
}
.local-nav-links .product-name {
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
}
.local-nav-links a {
  font-size: 0.8rem;
}
.local-nav-links a:not(.product-name) {
  margin-left: 2em;
}
.scroll-section {
  position: relative;
  padding-top: 50vh;
}
#scroll-section-0 h1 {
  position: relative;
  top: -10vh;
  z-index: 5;
  font-size: 4rem;
  text-align: center;
}
.main-message {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  opacity: 0;
}
.main-message p {
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
}
.main-message small {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1.2rem;
}
#scroll-section-2 .main-message {
  font-size: 3.5rem;
}
</style>
