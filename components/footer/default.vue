<template>
  <footer class="text-white">
    <div class="content bg-dark-black pt-7 sm:pt-0">
      <div
        class="xl:container md:container ls sm:container 2xl:container mob-ver mob-cont flex-wrap mx-auto pt-16 pb-43 flex gap-y-4 justify-between px-4"
      >
        <div class="connection">
          <div class="title">
            <p class="font-semibold text-base-3.5 mb-3">
              {{ footerInfo.connectionTitle }}
            </p>
          </div>
          <ul>
            <li
              class="font-normal text-base-1 mb-2.5"
              v-for="(item, index) in footerInfo.connection"
              :key="index"
            >
              {{ item.title }}
              <a :href="item.href">
                {{ item.text }}
              </a>
            </li>
          </ul>
          <div class="flex items-center gap-4 mt-8">
            <a
              :href="item.link"
              v-for="(item, index) in footerInfo.connectionIcons"
              :key="index"
            >
              <img :src="item.src" :alt="item.alt" class="im" />
            </a>
          </div>
        </div>
        <div>
          <p class="font-semibold text-base-3.5 mb-3">
            {{ footerInfo.menuTitle }}
          </p>
          <ul>
            <li
              class="font-normal text-base-1 mb-2.5"
              v-for="(item, index) in footerInfo.menu"
              :key="index"
            >
              <NuxtLink :to="item.link">
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-base-3.5 mb-3">
            {{ footerInfo.supportTitle }}
          </p>
          <ul>
            <li
              class="font-normal text-base-1 mb-2.5"
              v-for="(item, index) in footerInfo.support"
              :key="index"
            >
              <NuxtLink
                :to="
                  item.text === 'Видеоматериалы'
                    ? item.link + '#video'
                    : item.link
                "
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-base-3.5 mb-3">
            {{ footerInfo.payment }}
          </p>
          <div class="icons flex gap-6 items-center">
            <div v-for="(item, index) in footerInfo.paymentIcons" :key="index">
              <img :src="item.src" :alt="item.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black md:zero">
      <p class="py-4 text-center text-base-0.5">Golden Travel 2023</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footerInfo: {
        connectionTitle: "Связаться с нами",
        connection: [
          {
            title: "Телефон",
            text: "+992 933 93 93 93",
            href: "tel: 992 933 93 93 93",
          },
          {
            title: "E-mail",
            text: "info@goldentravel.tj",
            href: "mailto: info@goldentravel.tj",
          },
        ],
        connectionIcons: [
          {
            src: "/footer/facebook.svg",
            alt: "Facebook",
            link: "https://www.facebook.com/gttours.tj",
          },
          {
            src: "/footer/instagram.svg",
            alt: "Instagram",
            link: "https://www.instagram.com/gttours.tj/",
          },
          {
            src: "/footer/teleg.svg",
            alt: "Telegram",
            link: "https://t.me/goldentraveltours",
          },
        ],
        menuTitle: "Меню",
        menu: [
          {
            text: "О нас",
            link: "/aboutUs",
          },
          {
            text: "Новости",
            link: "/allNews",
          },
          {
            text: "Вакансии",
            link: "/vacancy",
          },
          {
            text: "Условия пользования",
            link: "/terms",
          },
        ],
        supportTitle: "Поддержка",
        support: [
          {
            text: "ЧАВО",
            link: "/FAQ",
          },
          {
            text: "Видеоматериалы",
            link: "/FAQ",
          },
          {
            text: "Стать партнером",
            link: "/become-partner",
          },
          {
            text: "Реклама",
            link: "/advertisement",
          },
        ],
        payment: "Способы оплаты",
        subtitle: "Golden Travel 2023",
        paymentIcons: [
          {
            src: "/footer/visa.svg",
            alt: "Visa",
          },
          {
            src: "/footer/mastercard.svg",
            alt: "Mastercard",
          },
          {
            src: "/footer/paypal.svg",
            alt: "Paypal",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.im:hover {
  opacity: 0.9;
}
@media screen and (max-width: 600px) {
  .mob-ver {
    padding-bottom: 3.75em;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .container div {
    width: 100%;
  }
  .content div > div:nth-child(3),
  .content div > div:nth-child(4) {
    width: 100%;
  }
}
</style>
