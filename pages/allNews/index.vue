<template>
  <div
    class="xl:container mob-cont pb-20 md:container ls sm:container 2xl:container mx-auto"
  >
    <svg style="display: none">
      <symbol id="right" viewBox="0 0 20 10">
        <path
          d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
        />
      </symbol>
      <symbol id="down" viewBox="0 0 20 15">
        <path
          d="M9.178 14.569C9.26974 14.7022 9.39249 14.8112 9.53569 14.8864C9.67888 14.9617 9.83823 15.001 10 15.001C10.1618 15.001 10.3211 14.9617 10.4643 14.8864C10.6075 14.8112 10.7303 14.7022 10.822 14.569L19.822 1.569C19.9262 1.41906 19.9873 1.24343 19.9986 1.06121C20.01 0.87898 19.9712 0.697123 19.8865 0.535394C19.8018 0.373665 19.6743 0.238248 19.518 0.143858C19.3617 0.049468 19.1826 -0.000286344 19 1.23965e-06H0.999998C0.817841 0.000753649 0.639336 0.0511479 0.483678 0.145764C0.328021 0.24038 0.201101 0.375639 0.116566 0.536994C0.0250324 0.698349 -0.00691693 0.879696 0.00390703 1.06153C0.014731 1.24337 0.0749187 1.41881 0.177998 1.569L9.178 14.569Z"
          fill="#666666"
        />
      </symbol>
    </svg>
    <div class="allNews pt-16">
      <div class="flex gap-2.5 items-center">
        <NuxtLink to="/" class="text-base-1">
          {{ title }}
        </NuxtLink>
        <p class="text-base-1">></p>
        <NuxtLink to="#" class="text-base-1">
          {{ news }}
        </NuxtLink>
      </div>
      <h1 class="font-black text-base-4 my-6">
        {{ news }}
      </h1>
      <ListTour :lists="lists" :toggle="list" @changename="list = $event" />
      <div class="grid mob-g">
        <div class="card main-card cursor-pointer shadow-3xl">
          <img :src="img.src" :alt="img.alt" class="w-full" />
          <div class="p-10 font-medium">
            <p class="text-base-1 text-secondary-1 pb-2">
              {{ mainCard.date }}
            </p>
            <div class="flex justify-between items-end">
              <div class="w-1/2">
                <p class="text-base-2">
                  {{ mainCard.title }}
                </p>
              </div>
              <div class="w-1/2">
                <svg class="icon w-5 h-3 ml-auto">
                  <use xlink:href="#right"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <LoaderApi type="news" v-for="(_, id) in 6" v-if="loaded" :key="id" />
        <Card
          type="news"
          :list="num.updated_at"
          :description="num.description"
          :myId="num.id"
          class="card-item flex-wrap"
          v-for="num in data"
          :key="num.id"
        >
        </Card>
      </div>
      <div class="flex justify-center">
        <Pagination
          secondClass="mt-8"
          @changeClass="countPage += 3"
          :totalPages="countPage"
          :curPage="curPage"
          @onPage="curPage = $event"
          @onNext="curPage++"
          @onPrev="curPage--"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Pagination from "~/components/Pagination.vue";
import LoaderApi from "~/components/skeleteon/LoaderApi.vue";
export default {
  head: {
    title: "Все новости",
  },
  data() {
    return {
      curPage: 1,
      countPage: null,
      request: `/News/`,
      list: "Все",
      oldValue: "",
      message: "",
      isRed: false,
      title: "Главная",
      news: "Новости",
      lists: ["Все", "Популярное", "Туризм", "Авиабилеты", "Разное"],
      img: {
        src: "/images/images1.jpg",
        alt: "Images 1",
      },
      mainCard: {
        date: "15 сентября 2021",
        title:
          "В нацпарке в Приморье засняли уникальный контакт двух леопардов",
      },
      card: {
        date: "13 сентября 2021 года",
        description:
          "В нацпарке в Приморье засняли уникальный контакт двух леопардов",
      },
      more: "Еще",
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.api.data,
      loaded: (state) => state.api.loaded,
    }),
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),
    async getAllNews() {
      let payload = {
        request: `${this.request}?page=${this.curPage}`,
        key: "data",
        body: [],
      };
      await this.get_news(payload);
      this.countPage = Math.round(payload.body.count / 14);
    },
  },
  mounted() {
    this.getAllNews();
  },
  watch: {
    async list(val) {
      this.curPage = 1;
      switch (val) {
        case "Все":
          this.request = `/News/`;
          break;
        case "Популярное":
          this.request = "/NewsPopular/";
          break;
        case "Туризм":
          this.request = "/NewsTourism/";
          break;
        case "Авиабилеты":
          this.request = "/NewsAirTickets/";
          break;
        case "Разное":
          this.request = "/NewsOthers/";
        default:
      }
      this.getAllNews();
    },
    curPage(val) {
      this.getAllNews();
    },
  },
  components: { LoaderApi, Pagination },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, [col] 1fr);
  grid-gap: 1.5rem;
}
.main-card {
  grid-column: span 2;
  grid-row: span 3;
  height: fit-content;
}
.card-item {
  max-height: 160px;
}

li {
  box-shadow: 20px 20px 120px 15px rgba(0, 0, 0, 0.05);
}
li:hover {
  background-color: #333;
  transition: all 0.3s ease;
}
.card:hover .icon {
  fill: #ffba0f;
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media screen and (max-width: 1160px) {
  .mob-g {
    grid-template-columns: repeat(3, [col] 1fr);
  }
}
@media screen and (max-width: 680px) {
  .mob-g {
    display: flex;
    flex-direction: column;
  }
}
</style>
