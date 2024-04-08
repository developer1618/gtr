<template>
  <section class="pb-11 mob-cont">
    <div class="flex gap-2.5 items-center my-5">
      <NuxtLink to="/" class="text-base-1">
        {{ title }}
      </NuxtLink>
      <p class="text-base-1">></p>
      <NuxtLink class="text-base-1" to="/hotels">
        {{ tours }}
      </NuxtLink>
    </div>
    <div
      class="flex justify-between 2xl:container xl:container ls sm:container md:container"
    >
      <div
        class="flex mob-hot 2xl:container xl:container sm:container md:container"
      >
        <div class="pb-r flex justify-between mob-f gap-x-2 mb-4 sm:flex-row">
          <div class="max-w-screen-xl">
            <img
              :src="
                Object.keys(this.$route.query).length === 0
                  ? './img/banner.jpg'
                  : data.image
              "
              alt="Banner"
              class="mb-0 sm:mb-4 h-full"
            />
          </div>
          <div
            class="flex justify-between sm:flex-col flex-row gap-y-3 w-full sm:w-auto mt-3 sm:mt-0"
          >
            <div v-for="to in imgs" class="banner-item rounded mr-0 xl:mr-4">
              <img :src="to.image" width="200" height="200" alt="Banner" />
            </div>
          </div>
        </div>
        <div class="p-5 shadow-3xl rounded mob-f mb-4 desc-right">
          <div class="flex bt-l pb-4">
            <Mark class="p-2 mr-4">{{ data.rating }}</Mark>
            <div>
              <div class="flex items-center">
                <h1 class="mr-2 font-bold">
                  {{
                    Object.keys(this.$route.query).length === 0
                      ? right.title
                      : this.data.hotel_name
                  }}
                </h1>
                <div v-for="_ in Math.floor(Math.random() * 5)">
                  <Star />
                </div>
              </div>
              <p>{{ right.text }}</p>
            </div>
          </div>
          <h1 class="mt-4 font-medium mb-2">{{ lists.title }}</h1>
          <ul class="list-l pb-4">
            <li
              v-for="list in lists.post"
              :key="list.id"
              class="flex justify-start items-start gap-x-2"
            >
              <img :src="require(`@/assets/icons${list.url}`)" alt="Test" />
              <span>{{ list.title }}</span>
            </li>
            <!-- <li class="col-end-3 flex justify-end">
              <a
                class="font-medium pb-3 col-span-2 hover:underline cursor-pointer text-blueZero"
                >Показать еще</a
              >
            </li> -->
          </ul>
          <div
            class="l-bottom pt-5 flex justify-between border-t-1 border-secondary-2"
          >
            <div>
              <h1 class="font-bold">
                от
                {{ data.price }}
                TJS
              </h1>
              <p>доступно {{ data.amount_left }} номеров</p>
            </div>
            <Button
              type="secondary"
              secondClass="px-4"
              @click="$router.push('/searchHotels/hotels/formHotels')"
              >{{ button }}</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between sa flex-wrap xl:flex-nowrap gap-y-5">
      <div class="rounded shadow-3xl p-5 xl:mr-4 xl:mr-4 desc-r w-full xl:w">
        <h1 class="bt-l pb-3 font-bold text-xl xl:font-medium">
          {{ hotels.title }}
        </h1>
        <div class="block sm:flex gap-x-7 mb-5 w-1/2" id="za">
          <div
            class="mt-6 font-medium xl:font-normal"
            v-for="to in hotels.list"
          >
            {{ to }}
          </div>
        </div>
        <p>
          {{ data.about }}
        </p>
      </div>
      <div class="desc-right rounded shadow-3xl p-4">
        <div class="flex bt-l pb-4 justify-between">
          <h1 class="font-bold xl:font-medium">{{ descs.title }}</h1>
          <img src="./img/help.svg" alt="Help" class="cursor-pointer" />
        </div>
        <div>
          {{ data.hotel_rules }}
        </div>
      </div>
    </div>
    <div
      class="pb-r mt-6 flex w-full justify-between xl:container sm:container"
    >
      <div>
        <div class="flex justify-between sa flex-wrap xl:flex-nowrap">
          <div class="flex flex-col desc-r mr-0 xl:mr-4">
            <div
              class="rounded shadow-3xl w-full block sm:flex items-center justify-between mb-5"
              v-for="stuff in stufs"
            >
              <div class="b-r-dash items-center xl:text-f flex gap-x-5">
                <div>
                  <img :src="require(`${stuff.url}`)" class="bg-r-im" />
                </div>
                <div class="b-r-dash pl-1 w-full xl:w-auto">
                  <h1 class="font-bold">{{ stuff.title }}</h1>
                  <div class="flex gap-x-7 mb-7">
                    <div v-for="to in stuff.posts">
                      <p class="text-xs xl:text-base">{{ to }}</p>
                    </div>
                  </div>
                  <div class="flex gap-x-11 flex-col sm:flex-row gap-y-3">
                    <div v-for="to in stuff.eats">
                      <h2>{{ to.title }}</h2>
                      <p class="text-xs xl:text-base">{{ to.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="p-4 w-full sm:w-auto items-cente justify-between flex sm:block"
              >
                <div class="text-center mb-5">
                  <h1 class="font-black">{{ stuff.mon }}</h1>
                  <p class="text-xs xl:text-base">{{ stuff.monText }}</p>
                </div>
                <Button
                  type="secondary"
                  secondClass="px-4"
                  class="but"
                  @click="onForm"
                  >{{ stuff.button }}</Button
                >
              </div>
            </div>
          </div>
          <div
            class="rounded shadow-3xl bt-l p-4 desc-right self-start mb-5 xl:mb-0"
          >
            <div class="bt-l flex justify-between pb-3">
              <h1 class="font-bold text-xl xl:text-base xl:font-medium">
                Дополнительные услуги
              </h1>
              <img src="./img/help.svg" alt="Help" class="cursor-pointer" />
            </div>
            <div class="mt-4">{{ data.additional }}</div>
          </div>
        </div>
        <div class="rounded shadow-3xl p-5 pb-11 mb-7 w-bot">
          <h2
            class="font-bold text-xl xl:text-base xl:font-medium bt-l pb-3 mb-6"
          >
            Отзывы
          </h2>
          <div class="flex justify-between mb-4 flex-wrap">
            <div class="flex items-center gap-x-4 mb-4">
              <img src="./img/avatar.png" alt="Avatar" />
              <div>
                <div>Мухамадназаров Абдулазиз</div>
                <p>написал(а) отзыв 9 сен 2020г</p>
              </div>
            </div>
            <Mark class="px-3">5/5 Превосходно</Mark>
          </div>
          <span class="p">
            {{ data.review }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      arm: "",
      imgs: [],
      zero: false,
      url: "/list1.svg",
      title: "Главная",
      tours: "Отели",
      button: "Найти номер",
      right: {
        mark: 4.5,
        title: "Porto Fira Suites",
        text: "Caldera Cliffs, Fira, 84 680, Santorini",
      },
      lists: {
        title: "Услуги и удобства",
        post: [
          {
            id: 1,
            url: "/list1.svg",
            title: `Бесплатная  общественная парковка поблизости`,
          },
          {
            id: 2,
            url: "/wifi.svg",
            title: "Бесплатный WiFi",
          },
          {
            id: 3,
            url: "/list3.svg",
            title: "Бассейн",
          },
          {
            id: 4,
            url: "/list4.svg",
            title: "Бесплатный завтрак",
          },
          {
            id: 5,
            url: "/list5.svg",
            title: "Трансфер из/до аэропорта",
          },
          {
            id: 6,
            url: "/list6.svg",
            title: "Терраса на крыше",
          },
        ],
      },
      hotels: {
        title: "Описание отеля",
        list: ["Открыт в 1985", "Отреставрирован в 2019", "Кол-во номеров: 13"],
      },
      descs: {
        title: "Правила отеля",
        title2: "Время заезда и выезда",
        title3: "Правила размещения детей",
        comes: ["Заезд с 15:00 до 23:00", "Выезд с 00:00 до 12:00"],
        text: "Проживание детей разрешено. При проживании в отеле с родителями или опекунами может взиматься дополнительная плата, пожалуйста, уточните в отеле.",
      },
      stufs: [
        {
          url: "./img/img2.png",
          title: "Люкс",
          posts: ["27 м2", "Кондиционер", "Отдельная душевая"],
          eats: [
            { title: "Питание", text: "2 завтрака" },
            {
              title: "Размещение",
              text: "1 диван-кровать и 1 кровать «queen-size»",
            },
          ],
          mon: "5 814 TJS",
          monText: "доступно 2 номера",
          button: "Забронировать",
        },
        {
          url: "./img/img2.png",
          title: "Улучшенный люкс",
          posts: ["35 м2", "Кондиционер", "Отдельная душевая"],
          eats: [
            { title: "Питание", text: "2 завтрака" },
            {
              title: "Размещение",
              text: "1 диван-кровать и 1 кровать «queen-size»",
            },
          ],
          mon: "7 100 TJS",
          monText: "доступно 1 номер",
          button: "Забронировать",
        },
      ],
    };
  },
  head: {
    title: "Отели",
  },
  computed: {
    ...mapState({
      data: (state) => state.api.data,
    }),
  },
  methods: {
    ...mapActions({
      get_hotel: "api/get_page",
    }),
    async getHotel() {
      let payload = {
        request: `/Hotels/${this.$route.query.id}/`,
        key: "data",
        body: [],
      };
      await this.get_hotel(payload);
    },
    async getHotelsImage() {
      let payload = {
        request: `/HotelImagesShow/${this.$route.query.id}/`,
        body: [],
      };
      await this.get_hotel(payload);
      this.imgs = payload.body;
    },
    onForm() {
      this.$router.push("/searchHotels/hotels/formHotels");
    },
  },
  mounted() {
    Object.keys(this.$route.query).length === 0 ? "" : this.getHotel(),
      this.getHotelsImage();
  },
};
</script>
<style scoped>
p {
  color: #444;
}
#za {
  width: auto !important;
}
.w-bot {
  width: 69.3%;
}

@media screen and (min-width: 680px) and (max-width: 1280px) {
  .bg-r-im {
    width: 270px;
    height: 156px;
  }
  .mob-f,
  .w-bot,
  .desc-right {
    width: 100%;
  }
}
@media screen and (max-width: 990px) {
  .sa {
    flex-direction: column;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .but {
    width: auto !important;
  }
  .banner-img,
  .desc-right,
  .desc-r,
  .w-bot {
    width: 100%;
  }
  .b-r-dash {
    padding-left: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .b-r-dash > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pb-r,
  .l-bottom {
    flex-wrap: wrap;
  }
  .l-bottom {
    justify-content: space-between;
  }
  .l-bottom > div:first-child {
    margin-bottom: 5px;
  }
  .pb-r {
    justify-content: center;
  }
}
</style>
