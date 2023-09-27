<template>
  <section class="pt-7 pb-20 mob-cont">
    <transition name="slide">
      <div
        v-if="toFilter"
        class="filter block xl:hidden left-0 top-0 fixed w-full h-full z-20"
      >
        <aside
          class="overflow-auto relative h-full py-5 px-3 rounded bg-white shadow-3xl"
        >
          <div
            class="flex justify-between fixed top-0 pt-1 z-20 bg-white w-filt"
          >
            <p class="text-base-3.5 font-bold">Фильтр</p>
            <svg
              @click="toFilter = false"
              viewBox="0 0 24 24"
              class="x-but text-secondary-2 text-base-4 cursor-pointer"
            >
              <path
                d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
              ></path>
            </svg>
          </div>
          <div class="col_star">
            <div class="stars my-3">
              <h2>Количество звезд</h2>
              <div>
                <Check name="checker" />
                <div v-for="to in 5" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check name="checker" />
                <div v-for="to in 4" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check name="checker" />
                <div v-for="to in 3" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check name="checker" />
                <div v-for="to in 2" class="mt-1">
                  <Star />
                </div>
              </div>
            </div>
          </div>
          <div class="price">
            <h2>Цена</h2>
            <div class="price__money flex gap-x-5 my-4">
              <div>
                <span>USD</span>
                <input
                  type="text"
                  v-model="from_mon"
                  class="rounded p-1.5 w-20 bordered"
                />
              </div>
              <div>
                <span>USD</span>
                <input
                  type="text"
                  v-model="to_mon"
                  class="w-20 rounded p-1.5 bordered"
                />
              </div>
            </div>
            <div class="range-slider mt-7 w-full relative">
              <input
                type="range"
                min="0"
                max="1200"
                step="10"
                class="price__range absolute w-full left-0 bottom-0"
                v-model.number="minPrice"
                @change="setChange"
              />
              <input
                type="range"
                min="0"
                max="1200"
                step="10"
                class="price__range absolute w-full left-0 bottom-0"
                v-model.number="maxPrice"
                @change="setChange"
              />
            </div>
            <div class="values flex justify-between mt-11">
              <span>{{ minPrice }} USD</span>
              <span>{{ maxPrice }} USD</span>
            </div>
          </div>
          <div class="mark">
            <h2 class="my-4">Рейтинг по отзывам</h2>
            <div class="flex gap-x-2">
              <Mark
                v-for="(to,id) in marks"
                :key="id"
                class="px-4 py-3 bg-black"
                @click="toMark(to)"
                :secondClass="
                  markToggle === to.mark ? 'bg-yellow-1' : 'bg-stand'
                "
                >{{ to.mark }}+</Mark
              >
            </div>
          </div>
          <div class="sales">
            <ul class="list mt-6">
              <li>
                <h2>Скидки</h2>
                <Check>Спецпредложения</Check>
              </li>
              <li>
                <h2>Питание</h2>
                <Check>Завтрак включен</Check>
              </li>
              <li>
                <h2>Оплата</h2>
                <div class="flex flex-col">
                  <Check>Оплата в отеле</Check>
                  <Check>Преддоплата</Check>
                </div>
              </li>
            </ul>
            <ul class="list-sec" v-for="sale in sales" :key="sale.id">
              <li>
                <h2 class="mb-2">{{ sale.title }}</h2>
                <div v-for="(to, index) in sale.checks">
                  <Check id="zero">{{ to }}</Check>
                </div>
              </li>
            </ul>
            <div
              class="grid grid-cols-2 gap-6 pb-2 bg-white fixed bottom-0 w-filt"
            >
              <Button type="primary" secondClass="w-full" @click="clean"
                >Очистить</Button
              >
              <Button type="secondary" secondClass="w-full">Применить</Button>
            </div>
          </div>
        </aside>
      </div>
    </transition>
    <div class="flex gap-2.5 items-center my-9">
      <NuxtLink to="/" class="text-base-1">Главная </NuxtLink>
      <p class="text-base-1">></p>
      <NuxtLink class="text-base-1" to="/">{{ head }}</NuxtLink>
    </div>
    <div class="flex flex-col">
      <bookingTours :isTours="isTours" />
      <SearchSlider :toShowSlider="toShowSlider" />
      <div class="main flex justify-between flex-wrap mt-11">
        <aside class="sidebar hidden xl:block p-5 rounded bg-white shadow-3xl">
          <div class="col_star">
            <h2>Количество звезд</h2>
            <div class="stars my-3">
              <div>
                <Check ref="zer" checked="true" />
                <div v-for="to in 5" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check />
                <div v-for="to in 4" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check />
                <div v-for="to in 3" class="mt-1">
                  <Star />
                </div>
              </div>
              <div>
                <Check />
                <div v-for="to in 2" class="mt-1">
                  <Star />
                </div>
              </div>
            </div>
          </div>
          <div class="price">
            <h2>Цена</h2>
            <div class="price__money flex gap-x-5 my-4">
              <div>
                <span>USD</span>
                <input
                  type="text"
                  class="rounded p-1.5 w-20 bordered"
                  v-model="minPrice"
                />
              </div>
              <div>
                <span>USD</span>
                <input
                  type="text"
                  class="w-20 rounded p-1.5 bordered"
                  v-model="maxPrice"
                />
              </div>
            </div>
            <div class="range-slider mt-7 w-full relative">
              <input
                type="range"
                min="0"
                max="1200"
                step="10"
                class="price__range absolute w-full left-0 bottom-0"
                v-model.number="minPrice"
                @change="setChange"
              />
              <input
                type="range"
                min="0"
                max="1200"
                step="10"
                class="price__range absolute w-full left-0 bottom-0"
                v-model.number="maxPrice"
                @change="setChange"
              />
            </div>
            <div class="values flex justify-between mt-11">
              <span>{{ minPrice }} USD</span>
              <span>{{ maxPrice }} USD</span>
            </div>
          </div>
          <div class="mark">
            <h2 class="my-4">Рейтинг по отзывам</h2>
            <div class="flex gap-x-2">
              <Mark
                v-for="(to,id) in marks"
                :key="id"
                class="px-4 py-3"
                @click="toMark(to)"
                :secondClass="
                  markToggle === to.mark ? 'bg-yellow-1' : 'bg-stand'
                "
                >{{ to.mark }}+</Mark
              >
            </div>
          </div>
          <div class="sales">
            <ul class="list mt-6">
              <li>
                <h2>Скидки</h2>
                <Check>Спецпредложения</Check>
              </li>
              <li>
                <h2>Питание</h2>
                <Check>Завтрак включен</Check>
              </li>
              <li>
                <h2>Оплата</h2>
                <div class="flex flex-col">
                  <Check>Оплата в отеле</Check>
                  <Check>Преддоплата</Check>
                </div>
              </li>
            </ul>
            <ul class="list-sec" v-for="sale in sales" :key="sale.id">
              <li>
                <h2 class="mb-2">{{ sale.title }}</h2>
                <div v-for="(to, index) in sale.checks">
                  <Check id="zero">{{ to }}</Check>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <div class="flex flex-col right mob-w">
          <div
            class="sort-item gap-y-3 flex-wrap flex justify-between items-center bg-white mb-5"
          >
            <div class="flex flex-col sm:flex-row w-full sm:w-auto shadow-3xl">
              <div
                v-for="to in recommend"
                @click="toggle = to"
                class="px-5 py-3 cursor-pointer text-left sm:text-center hover:bg-dark-black hover:text-white"
                :class="toggle === to ? 'bg-dark-black text-white' : 'bg-white'"
              >
                {{ to }}
              </div>
            </div>
            <Accordeon
              class="zero hidden sm:block justify-center items-center px-0"
            />
          </div>
          <div style="display: flex" class="justify-between items-center mb-3">
            <div
              @click="toFilter = true"
              class="block xl:hidden pl-2 select-none cursor-pointer text-base-3 font-bold"
            >
              Фильтр
            </div>
            <Accordeon class="block bg-none sm:hidden" />
          </div>
          <div
            class="py-10 flex w-full shadow-3xl items-center justify-center rounded self-start mb-4"
          >
            Инфоблок
          </div>
          <div class="foot" v-if="hotel">
            <div v-if="hotel.length === 0" class="text-center">
              <h1 class="font-bold text-3xl">Отели не найдено</h1>
              <p class="font-medium text-zero">
                Выбирите другие даты, другой класс билетов или попробуйте новое
                направление
              </p>
            </div>
            <div
              class="foot__icon w-full flex rounded bg-white shadow-3xl mb-5"
              v-for="to in hotel"
            >
              <div class="mr-0 sm:mr-5" style="flex-shrink: 0">
                <img :src="to.image" alt="Cart" class="pic" />
              </div>
              <div class="flex justify-between items-center">
                <div class="foot__cent flex flex-col justify-center">
                  <div class="mb-3 sm:mb-9 flex justify-between sm:block">
                    <div>
                      <h1
                        class="font-bold text-base xl:font-semibold"
                        v-if="!blockStar"
                      >
                        {{ blockTitle }}
                        <span class="text-zero" v-if="blockTitleSpan">{{
                          blockTitleSpan
                        }}</span>
                      </h1>
                      <div v-if="blockStar" class="flex items-center gap-2">
                        <h1 class="font-bold text-base xl:font-semibold">
                          {{ to.hotel_name }}
                        </h1>
                        <div class="flex gap-1 mb-1">
                          <Star
                            v-for="(_, ind) in Math.round(to.rating)"
                            :key="ind"
                          />
                        </div>
                      </div>
                      <!-- <div style="color: #333" class="text-zero">
                        {{ blockTitleBottom }}
                      </div> -->
                    </div>
                    <div>
                      <Mark class="p-4 block sm:hidden">4.5</Mark>
                    </div>
                  </div>
                  <div class="flex gap-y-3">
                    <div class="flex gap-5">
                      <Mark class="p-4 hidden sm:block">{{ to.rating }}</Mark>
                      <div class="text-xs xl:text-base">
                        <h2 class="font-medium xl:font-normal">Отлично</h2>
                        <p class="text-zero">
                          {{ Math.floor(Math.random() * 100) + 1 }} отзывов
                        </p>
                      </div>
                    </div>
                    <div class="mx-8 text-xs xl:text-base">
                      <h2 class="font-medium xl:font-normal">{{ food }}</h2>
                      <p class="text-left text-zero">
                        {{ Math.floor(Math.random() * 10) + 1 }} вида на выбор
                      </p>
                    </div>
                    <div class="ml-0 w-full sm:w-auto text-xs xl:text-base">
                      <h2 class="font-medium xl:font-normal">{{ trans }}</h2>
                      <p class="text-zero">
                        {{ Math.floor(Math.random() * 10) + 1 }} вида на выбор
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="pr ml-0 xl:ml-11 flex justify-between items-center sm:block"
                >
                  <h2 class="font-bold text-center mb-0 sm:mb-7">
                    от {{ to.price }} TJS
                    <br v-if="buttonTop" />
                    <time v-if="buttonTop" class="font-normal text-zero text-xs"
                      >доступно {{ to.amount_left }} номеров
                    </time>
                  </h2>
                  <ButtonSec :link="link + `?id=${to.id}`" secondClass="wer">{{
                    button
                  }}</ButtonSec>
                </div>
              </div>
            </div>
          </div>
          <div class="foot" v-if="inTours">
            <div v-if="inTours.length === 0" class="text-center">
              <h1 class="font-bold text-3xl">{{ head }} не найдено</h1>
              <p class="font-medium text-zero">
                Выбирите другие даты, другой класс билетов или попробуйте новое
                направление
              </p>
            </div>
            <div
              class="foot__icon w-full flex rounded bg-white shadow-3xl mb-5"
              v-for="to in inTours"
            >
              <div class="mr-0 sm:mr-5" style="flex-shrink: 0">
                <img :src="to.tour_image" :alt="to.tour_name" class="pic" />
              </div>
              <div class="flex justify-between items-center">
                <div class="foot__cent flex flex-col justify-center">
                  <div class="mb-3 sm:mb-9 flex justify-between sm:block">
                    <div>
                      <h1
                        class="font-bold text-base xl:font-semibold"
                        v-if="!blockStar"
                      >
                        {{ to.tour_name }}
                      </h1>
                      <div v-if="blockStar" class="flex items-center gap-2">
                        <h1 class="font-bold text-base xl:font-semibold">
                          {{ to.tour_image }}
                        </h1>
                      </div>
                      <!-- <div style="color: #333" class="text-zero">
                        {{ blockTitleBottom }}
                      </div> -->
                    </div>
                    <div>
                      <Mark class="p-4 block sm:hidden">{{ to.rating }}</Mark>
                    </div>
                  </div>
                  <div class="flex gap-y-3">
                    <div class="flex gap-5">
                      <Mark class="p-4 hidden sm:block">{{
                        to.rating || Math.floor(Math.random() * 5) + 1
                      }}</Mark>
                      <div class="text-xs xl:text-base">
                        <h2 class="font-medium xl:font-normal">Отлично</h2>
                        <p class="text-zero">
                          {{ Math.floor(Math.random() * 100) + 1 }} отзывов
                        </p>
                      </div>
                    </div>
                    <div class="mx-8 text-xs xl:text-base">
                      <h2 class="font-medium xl:font-normal">{{ food }}</h2>
                      <p class="text-left text-zero">
                        {{ Math.floor(Math.random() * 10) + 1 }} вида на выбор
                      </p>
                    </div>
                    <div class="ml-0 w-full sm:w-auto text-xs xl:text-base">
                      <h2 class="font-medium xl:font-normal">{{ trans }}</h2>
                      <p class="text-zero">
                        {{ Math.floor(Math.random() * 10) + 1 }} вида на выбор
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="pr ml-0 xl:ml-11 flex justify-between items-center sm:block"
                >
                  <h2 class="font-bold text-center mb-0 sm:mb-7">
                    от {{ to.price }} TJS
                    <br v-if="buttonTop" />
                  </h2>
                  <ButtonSec
                    :link="link + `?data=${JSON.stringify(to)}`"
                    secondClass="wer"
                    >{{ button }}</ButtonSec
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: [
    "head",
    "blockTitle",
    "blockTitleSpan",
    "blockTitleBottom",
    "toShowSlider",
    "blockStar",
    "food",
    "foodText",
    "trans",
    "transText",
    "button",
    "buttonTop",
    "link",
    "countity",
    "url",
    "hotel",
    "inTours",
    "isTours",
  ],
  data() {
    return {
      toggle: "",
      markToggle: "4",
      from_mon: null,
      to_mon: null,
      toFilter: false,
      checks: [
        {
          title: "Пересадки",
          chs: ["Без пересадок", "1 пересадка"],
        },
        {
          title: "Авиакомпании ",
          chs: ["Somon Air", "S7 Airlines"],
        },
      ],
      minPrice: 0,
      maxPrice: 1200,
      marks: [
        {
          id: 1,
          mark: 3,
        },
        {
          id: 2,
          mark: "3,5",
        },
        {
          id: 3,
          mark: 4,
        },
        {
          id: 4,
          mark: "4,5",
        },
      ],
      sales: [
        {
          title: "Условия бронирования",
          checks: ["Бесплатная отмена", "Моментальное подтверждение"],
        },
        {
          title: "Тип кровати",
          checks: [
            "1 двуспальная кровать",
            "2 однаспальные кровати",
            "Односпальная кровать",
            "Несколько кроватей",
          ],
        },
        {
          title: "Свободные номера",
          checks: ["Показать только со свободными номерами"],
        },
      ],
      recommend: [
        "Рекомендованные",
        "Самая низкая цена",
        "Больше всего звезд",
        "Рейтинг по отзывам",
      ],
    };
  },

  methods: {
    setChange() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
    clean() {
      this.minPrice = 0;
      this.maxPrice = 1200;
      this.from_mon = null;
      this.to_mon = null;
      this.markToggle = "";
      const elem = document.querySelectorAll(".rad");
      elem.forEach((el) => (el.checked = false));
    },
    toMark(ind) {
      this.markToggle = ind.mark;
    },
  },
};
</script>

<style scoped>
aside {
  max-width: 350px;
}
.foot__icon {
  height: 190px;
}
.w-filt {
  width: 315px;
}
.list-sec > li:last-child {
  padding-bottom: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 0.5s ease-in 0s;
}
aside::-webkit-scrollbar {
  width: 10px;
  border-radius: 4px;
}
aside::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 180px;
  background: #f0f0f0;
}
aside::-webkit-scrollbar-track {
  background-color: white;
}
.x-but {
  width: 20px;
  height: 20px;
  fill: #999;
}

.filter {
  background-color: rgba(0, 0, 0, 0.5);
}
#checks > div {
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
}
span {
  color: #999999;
}

.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

ul input {
  padding-left: 33px;
}

input[type="range"]::-webkit-slider-thumb {
  background: #fff;
  position: relative;
  transform: translateY(-5px);
  cursor: pointer;
  width: 15px;
  height: 15px;
}

label {
  font-size: 14px;
}
ul > li {
  margin-bottom: 22px;
}
ul > li {
  border-bottom: 0.5px solid #f0f0f0;
}
.sales ul:last-child > li {
  border: none;
}
ul > li h2 {
  margin-bottom: 12px;
}
.header__tours div div {
  background: red;
}
.pic {
  width: 220px;
  height: 100%;
}

@media screen and (max-width: 1280px) {
  .foot__cent {
    width: 60%;
  }
  .sidebar {
    display: none;
  }
  .pr {
    width: 100%;
  }
  .pr .btn {
    margin: auto;
  }
  .sidebar,
  .sort-item,
  .mob-w {
    width: 100%;
  }
}

@media screen and (min-width: 250px) and (max-width: 680px) {
  .foot__icon {
    flex-direction: column;
  }
  section {
    padding-top: 22px;
  }

  .block-bottom div {
    margin-bottom: 15px;
    width: 100%;
  }
  .foot img {
    margin-bottom: 10px;
    text-align: center;
  }
  .foot__cent {
    margin-top: 12px;
    text-align: center;
  }

  .foot__cent > div:nth-child(2) {
    justify-content: center;
  }
  .foot__icon > div:first-child,
  .foot__icon > div:nth-child(2),
  .foot__cent {
    width: 100%;
  }
  .foot__icon > div:first-child img {
    margin: auto;
  }
  .foot__icon > div:nth-child(2) {
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px dashed #dedede;
  }
  .foot__icon > div:last-child {
    margin-top: 30px;
  }

  aside {
    max-width: 100% !important;
    width: 100%;
  }
  .w-filt {
    width: 95%;
  }
  .pr {
    margin: 0;
    padding: 0px 12px;
  }
  p {
    color: #666;
    font-size: 14px;
  }
  .foot__cent > div:nth-child(2) {
    justify-content: flex-start;
  }
  .foot__cent {
    padding: 0px 10px;
    text-align: left;
  }
  .foot__cent h1 + div {
    font-size: 12px;
  }
  .foot__icon {
    padding-bottom: 15px;
  }
  .pic {
    width: 100%;
    height: 180px;
  }
  .pr .btn {
    margin: 0;
    width: 130px;
  }
}
</style>
