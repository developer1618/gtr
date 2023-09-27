<template>
  <div class="promotion pt-16 pb-24">
    <div
        class="inline-flex items-center mob-cont gap-2.5 cursor-pointer hover:bg-secondary p-2 mb-8 rounded"
        @click="goMainPage"
      >
        <div>
          <img src="/images/icons/arrowLeft.svg" alt="Arrow Left" />
        </div>
        <div>
          <p class="text-base-1">
            {{ back }}
          </p>
        </div>
      </div>
    <div class="w-full">
      <img :src="img" alt="image" class="w-full h-96" />
    </div>
    <div class="mt-4">
      <div class="flex">
      <div>
        <h1 class="font-medium text-3xl mb-2">{{ title }}</h1>
        <div class="flex gap-3">
          <div
            v-for="blog in blocks"
            class="shadow-3xl bg-white py-2 px-4 text-zero rounded-zero"
          >
            {{ blog }}
          </div>
        </div>
        <p class="my-7 text-zero">{{ airText }}</p>
        </div>
          <div v-if="blocks[0] === 'Авиабилеты'">
            <div
              class="bg-white  shadow-3xl rounded-xl py-4 px-7"
            >
              <div class="flex justify-between">
                <p class="font-medium">(DYU) Душанбе</p>
                <img
                  src="/icons/arrowAir.svg"
                  class=" h-10 self-center"
                  alt="image"
                />
                <p class="font-medium">(IST) Стамбул</p>
              </div>
              <div class="flex  gap-9">
                <div v-for="(detail,ind) in details"    >
                  <p class="font-medium">{{ detail.title }}</p>
                  <span class="text-secondary-2">{{ detail.text }}</span>
                </div>
              </div>
            </div>
            </div>
        </div>
        <Button type="secondary" secondClass="w-40">{{ button }}</Button>
        <div v-if="blocks[0] === 'Туры'">
          <div
            class="bg-white flex justify-between shadow-3xl rounded-xl py-4 px-7"
          >
            <div>
              <p class="font-medium">Время и длительность тура</p>
              <div class="flex justify-between gap-9 text-zero">
                <div v-for="item in tour.items">{{ item }}</div>
              </div>
            </div>
            <div class="flex gap-9">
              <div v-for="detail in tour.details">
                <div class="flex">
                  <div>
                    <p class="font-medium">{{ detail.title }}</p>
                    <div class="flex items-center gap-2">
                      <span class="text-secondary-2">{{ detail.text }}</span>
                      <div class="flex gap-1" v-if="detail.mark">
                        <Star v-for="(to,id) in detail.mark" :key="id" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="my-7 text-zero">{{ tour.info }}</p>
          <Button type="secondary" secondClass="w-40">{{ button }}</Button>
        </div>
        <div v-if="blocks[0] === 'Отели'">
          <div class="bg-white shadow-3xl rounded-xl py-4 px-7">
            <div class="mb-3 flex gap-2">
              <Mark class="w-12 h-12">4.5</Mark>
              <div>
                <div class="flex items-center gap-1">
                  <h1 class="font-semibold">{{ hotel.title }}</h1>
                  <div class="flex gap-1">
                    <Star v-for="star,id in hotel.star" :key="id" />
                  </div>
                </div>
                <span class="text-zero">{{ hotel.text }}</span>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-3">
                <div v-for="item in hotel.itemLeft" class="flex gap-3">
                  <img :src="item.icon" alt="Icon" />
                  <span class="text-zero">{{ item.text }}</span>
                </div>
              </div>
              <div class="flex gap-3">
                <div v-for="item in hotel.item" class="flex gap-2">
                  <img class="w-3" :src="item.icon" alt="Icon" />
                  <span class="text-zero">{{ item.text }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-16">
            <div class="flex gap-7 my-5">
              <div v-for="to in news">{{ to }}</div>
            </div>
            <p class="text-zero">{{ tour.info }}</p>
          </div>
          <Button type="secondary" secondClass="w-40">{{ button }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Button from "~/components/Button.vue";
import Mark from "~/components/Mark.vue";
import Star from "~/components/Star.vue";
export default {
  computed: {
    ...mapState({
      data: (state) => state.api.data,
    }),
  },
  data() {
    return {
      button: "Подробнее",
      filtered: null,
      img: null,
      back: "Назад",
      title: null,
      news: ["Открыт в 1985", "Отреставрирован в 2019", "Кол-во номеров: 13"],
      airText:
        "Целебные пляжи Красного и Мёртвого морей, дайвинг, священные места      всё это отдых в Иордании. Добавьте к этому неземные пейзажи и город     Петра, вырезанный в розовом песчанике скал каньона Сик — в этой  стране есть все, чтобы сделать ваше путешествие уникальным и  незабываемым.",
      details: [
        {
          title: "Дата вылета",
          text: "20.06.2022 11:00",
        },
        {
          title: "Дата прилета",
          text: "30.06.2022 11:00",
        },
        {
          title: "Количество пасажиров",
          text: "2",
        },
      ],
      blocks: [
        `${
          this.$route.query.type === "PromotionHotels"
            ? "Отели"
            : this.$route.query.type === "PromotionAirTickets"
            ? "Авиабилеты"
            : this.$route.query.type === "PromotionOutdoorTours"
            ? "Туры"
            : this.$route.query.type === "PromotionIndoorTours"
            ? "Туры"
            : ""
        }`,
        "Акция",
      ],
      tour: {
        items: ["Заезд 22 окт", "6 ночей", "Обратно 27 окт, Ср"],
        details: [
          {
            title: "Дата",
            text: "20.04.2021",
          },
          {
            title: "Отель",
            text: "Sultan Cave Suites",
            mark: 5,
          },
          {
            title: "Питание",
            text: "Завтрак включен",
          },
          {
            title: "Транспорт",
            text: "Эконом класс",
          },
        ],
        info: "Целебные пляжи Красного и Мёртвого морей, дайвинг, священные места — всё это отдых в Иордании. Добавьте к этому неземные пейзажи и город Петра, вырезанный в розовом песчанике скал каньона Сик — в этой стране есть все, чтобы сделать ваше путешествие уникальным и незабываемым.",
      },
      hotel: {
        mark: 4.5,
        title: "Porto Fira Suites",
        text: "Caldera Cliffs, Fira, 84 700, Santorini",
        star: 4,
        itemLeft: [
          {
            icon: "/icons/list1.svg",
            text: "Бесплатная общественная парковка поблизости",
          },
          {
            icon: "/icons/wifi.svg",
            text: "Бесплатный WiFi",
          },
        ],
        item: [
          {
            text: "Бассейн",
            icon: "/icons/list3.svg",
          },
          {
            text: "Трансфер из/до аэропорта",
            icon: "/icons/list4.svg",
          },
          {
            text: "Бесплатный завтрак",
            icon: "/icons/list5.svg",
          },
          {
            text: "Терраса на крыше",
            icon: "/icons/list6.svg",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      get_promo: "api/get_page",
    }),
    async getPromotion() {
      let payload = {
        request: `/${this.$route.query.type}/`,
        key: "data",
        body: [],
      };
      await this.get_promo(payload);
      this.filtered = this.data.filter(
        (data) => data.id === Number(this.$route.query.id)
      );
      this.img = this.filtered[0].image;
      this.title = this.filtered[0].promo_description;
    },
    goMainPage() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getPromotion();
  },
  components: { Button, Mark, Mark, Star },
};
</script>
<style></style>
