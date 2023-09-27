<template>
  <div
    class="tours container py-10 xl:container sm:container md:container ls mob-cont"
  >
    <navbarTours />
    <div>
      <div class="flex gap-4 justify-between flex-wrap">
        <div class="flex gap-x-4 justify-between w-full xl:w-auto">
          <img :src="url" alt="Images" class="w-full" />
          <div class="flex flex-col gap-y-4 justify-between">
            <div>
              <img src="../images/tour1.png" alt="img" />
            </div>
            <div>
              <img src="../images/tour2.png" alt="img" />
            </div>
            <div>
              <img src="../images/tour3.png" alt="img" />
            </div>
          </div>
        </div>
        <div
          class="shadow-3xl p-4 sm:p-7 flex flex-col justify-between rb w-full xl:w-auto"
        >
          <div class="flex gap-x-4">
            <Mark class="p-3">4.5</Mark>
            <div>
              <h2 class="font-medium text-lg">{{ "Турция, Каппадокия" }}</h2>
              <p class="text-zero text-xs">Турция, Каппадокия</p>
            </div>
          </div>
          <div class="pt-3 sm:pt-0">
            <h2 class="font-medium">Время и длительность тура</h2>
            <div class="hidden xl:flex justify-between text-zero text-xs">
              <p>Заезд 22 окт, Пт</p>
              <p>6 ночей</p>
              <p>Обратно 27 окт, Ср</p>
            </div>
            <div
              class="flex text-blackTwo xl:hidden gap-x-1 items-center text-xs"
            >
              <p>Заезд 22 окт, Пт</p>
              <p>-</p>
              <p>Обратно 27 окт, Ср</p>
              <span class="text-zero">(6 ночей)</span>
            </div>
          </div>
          <div>
            <h2 class="font-medium">Отель</h2>
            <div class="flex items-center">
              <p class="text-zero text-xs mr-3">Sultan Cave Suites</p>
              <div class="flex gap-1">
                <Star v-for="(_, id) in 5" :key="id" />
              </div>
            </div>
          </div>
          <div class="flex">
            <div v-for="to in powers" class="mr-18">
              <h2 class="font-medium">{{ to.title }}</h2>
              <p class="text-xs text-zero whitespace-nowrap">{{ to.text }}</p>
            </div>
          </div>
          <div class="flex justify-between pt-4 sm:pt-0">
            <div>
              <h2 class="font-bold">3 963 TJS</h2>
              <p class="text-zer text-xs">Доступно 25 мест</p>
            </div>
            <ButtonSec
              :link="`/IndoorTours/tours/formTours?data=${this.$route.query.data}`"
              type="secondary"
              class="wv"
              secondClass="px-2 xl:px-6"
              >{{ button }}</ButtonSec
            >
          </div>
        </div>
      </div>
    </div>
    <div class="tours-bottom shadow-3xl mt-10">
      <div class="flex flex-wrap justify-between tour gap-y-5 relative">
        <div class="order-2 sm:order-1">
          <h1 class="font-bold text-ls mb-4">
            {{ JSON.parse(this.$route.query.data).tour_name }}
          </h1>
          <p class="text-lg text-zero mb-4" style="max-width: 345px">
            {{ tourText }}
          </p>
          <div>
            <div class="text-black">22 окт, Пт - 27 отк, Ср</div>
            <p class="text-zero">Турция, Каппадокия</p>
          </div>
        </div>
        <div class="order-3 sm:order-2">
          <h1 class="font-bold text-ls mb-6">Отель</h1>
          <div class="flex flex-col justify-between gap-6">
            <div>
              <div class="flex items-center gap-3">
                <h2 class="font-medium text-lg">Sultan Cave Suites</h2>
                <div class="flex gap-1">
                  <Star v-for="(to, id) in 5" :key="id" />
                </div>
              </div>
              <p class="text-zero">Caldera Cliffs, Fira, 84 680, Santorini</p>
            </div>
            <div class="flex gap-x-4">
              <Mark class="p-4">4.5</Mark>
              <div>
                <h2>Отлично</h2>
                <p class="text-zero">712 отзывов</p>
              </div>
            </div>
            <div v-for="to in powers">
              <h2 class="font-medium text-lg">{{ to.title }}</h2>
              <p class="text-zero whitespace-nowrap">{{ to.text }}</p>
            </div>
          </div>
        </div>
        <div class="order-1 sm:order-3">
          <h1 class="font-bold text-ls mb-6">Транспорт</h1>
          <div>
            <div class="flex gap-6 mb-5">
              <div>
                <h2 class="font-semibold text-base">Душанбе</h2>
                <p class="text-zero">4063 км</p>
              </div>
              <h2 class="mt-1.5">
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.67 6.84546L14.09 9.43546L15.5 10.8455L20.5 5.84546L15.5 0.845459L14.09 2.25546L16.67 4.84546H0.5V6.84546H16.67Z"
                    fill="#333333"
                  />
                </svg>
              </h2>
              <div>
                <h2 class="text-blackTwo text-base font-semibold">
                  Каппадокия
                </h2>
              </div>
            </div>
            <div>
              <h2 class="font-normal">Авиабилет</h2>
              <p class="text-zero">19 окт</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarTours from "../../OutdoorTours/insideTours/navbarTour";
export default {
  components: { navbarTours },
  data() {
    return {
      url: JSON.parse(this.$route.query.data).tour_image,
      powers: [
        {
          title: "Питание",
          text: "Завтрак включен",
        },
        {
          title: "Транспорт",
          text: "Эконом класс",
        },
      ],
      button: "Оформить",
      tourText: JSON.parse(this.$route.query.data).about_tour,
    };
  },
};
</script>
<style scoped>
.wv {
  width: auto !important;
}
.tours-bottom {
  padding: 40px 60px;
}
.tour::before {
  width: 100%;
  content: "";
  left: 0;
  transform: translateY(42px);
  position: absolute;
  background: #f0f0f0;
  height: 1px;
}
.rb > div:first-child,
.rb > div:nth-child(4) {
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .tours-bottom {
    padding: 15px;
  }
  path {
    fill: #f0f0f0;
  }
}
</style>
