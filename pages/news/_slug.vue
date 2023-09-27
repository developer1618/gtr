<template>
  <div class="xl:container md:container ls sm:container 2xl:container mx-auto">
    <div class="news pt-16 pb-30">
      <div
        class="inline-flex items-center mob-cont gap-2.5 cursor-pointer hover:bg-secondary p-2 rounded"
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
      <div class="mt-7 mb-14">
        <img :src="img.src" :alt="img.alt" class="w-full h-100 rounded" />
      </div>
      <div class="news-content flex gap-x-6 justify-between">
        <div class="w-2/3">
          <div class="data">
            <p class="font-medium text-base-1 text-secondary-1">
              {{ date }}
            </p>
          </div>
          <div class="title">
            <h1 class="font-medium text-base-6 mt-2 mb-9">
              {{ title }}
            </h1>
          </div>
          <div class="text text-base-2.5">
            {{ text }}
          </div>
        </div>
        <div class="w-1/3 flex justify-end flex-wrap">
          <Card
            v-for="num in card"
            :key="num"
            type="news"
            :myId="num.id"
            :list="num.updated_at"
            :description="num.description"
            class="mb-6 mob-mb"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  head: {
    title: "Новости",
  },
  data() {
    return {
      mydate: [],
      back: "Назад",
      card: null,
      body: null,
      img: {
        src: "/images/images1.jpg",
        alt: "Images 1",
      },
      date: null,
      title: null,
      text: null,
      card: {
        list: "13 сентября 2021 года",
        description:
          "В нацпарке в Приморье засняли уникальный контакт двух леопардов",
      },
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.api.data,
    }),
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),
    async getAllNews() {
      let payload = {
        request: `/News/?limit=15`,
        key: "data",
        body: [],
      };
      await this.get_news(payload);
      this.card = this.data.filter((elem) => elem.id >= 5);
    },
    async getNews() {
      let payload = {
        request: `/News/${this.$route.params.slug}/`,
        key: "mydate",
        body: [],
      };
      await this.get_news(payload);
      this.mydate = payload.body;
      this.date = moment(this.mydate.updated_at)
        .locale("ru")
        .format("DD MMMM YYYY");
      this.title = this.mydate.title;
      this.text = this.mydate.description;
    },
    goMainPage() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getAllNews();
    this.getNews();
  },
};
</script>
<style scoped>
@media screen and (max-width: 950px) {
  .news-content {
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }
  .w-2\/3 {
    padding: 0px 7px;
    width: 100%;
  }
  .w-1\/3 {
    justify-content: center;
    width: 100%;
  }
}
</style>
