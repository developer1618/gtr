<template>
  <div
    class="xl:container md:container sm:container ls mob-cont 2xl:container mx-auto my-7"
  >
    <svg style="display: none">
      <symbol id="right" viewBox="0 0 15 20">
        <path
          d="M14.569 9.178C14.7022 9.26974 14.8112 9.39249 14.8864 9.53569C14.9617 9.67888 15.001 9.83823 15.001 10C15.001 10.1618 14.9617 10.3211 14.8864 10.4643C14.8112 10.6075 14.7022 10.7303 14.569 10.822L1.569 19.822C1.41906 19.9262 1.24343 19.9873 1.06121 19.9986C0.87898 20.01 0.697123 19.9712 0.535394 19.8865C0.373665 19.8018 0.238248 19.6743 0.143858 19.518C0.049468 19.3617 -0.000286344 19.1826 1.23965e-06 19L1.23965e-06 0.999998C0.000753649 0.817841 0.0511479 0.639336 0.145764 0.483678C0.24038 0.328021 0.375639 0.201101 0.536994 0.116566C0.698349 0.0250324 0.879696 -0.00691693 1.06153 0.00390703C1.24337 0.014731 1.41881 0.0749187 1.569 0.177998L14.569 9.178Z"
        />
      </symbol>
      <symbol id="down" viewBox="0 0 20 15">
        <path
          d="M9.178 14.569C9.26974 14.7022 9.39249 14.8112 9.53569 14.8864C9.67888 14.9617 9.83823 15.001 10 15.001C10.1618 15.001 10.3211 14.9617 10.4643 14.8864C10.6075 14.8112 10.7303 14.7022 10.822 14.569L19.822 1.569C19.9262 1.41906 19.9873 1.24343 19.9986 1.06121C20.01 0.87898 19.9712 0.697123 19.8865 0.535394C19.8018 0.373665 19.6743 0.238248 19.518 0.143858C19.3617 0.049468 19.1826 -0.000286344 19 1.23965e-06H0.999998C0.817841 0.000753649 0.639336 0.0511479 0.483678 0.145764C0.328021 0.24038 0.201101 0.375639 0.116566 0.536994C0.0250324 0.698349 -0.00691693 0.879696 0.00390703 1.06153C0.014731 1.24337 0.0749187 1.41881 0.177998 1.569L9.178 14.569Z"
        />
      </symbol>
    </svg>
    <h1 class="p-0 text-2xl hotels font-medium mb-3 text-left block sm:hidden">
      Помощь
    </h1>
    <div
      class="flex gap-6 mob-wr"
      :class="FAQlistchange === 'Контакты' ? 'py-24' : ''"
    >
      <div class="block left-block w-1/3 py-2 h-fit sm:py-10">
        <h1 class="title text-2xl hotels font-medium hidden sm:block">
          Помощь
        </h1>
        <ul>
          <li
            v-for="to in FAQlist"
            @click="FAQlistchange = to"
            :class="FAQlistchange === to ? 'active' : ''"
          >
            <NuxtLink :to="'/FAQ/#' + to">
              <p class="text-base-2 font-normal pt-2 pb-3 px-10">
                {{ to }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="w-5/6 mob-v"
        :class="FAQlistchange === 'Чаво' ? 'block py-11  px-4 ' : ''"
      >
        <div v-if="FAQlistchange === 'Чаво'">
          <p class="font-normal text-base-2 text-secondary-2 mb-10">
            {{ title }}
          </p>
          <ul>
            <li
              @click="id = index"
              :class="id === index ? 'show' : ''"
              class="question flex gap-6 items-center py-8 cursor-pointer"
              v-for="(tour, index) in tours"
              :key="index"
            >
              <img
                v-if="id != index || id === ''"
                src="/images/icons/right.svg"
              />
              <img v-else src="/images/icons/down.svg" />
              <div>
                <p class="font-semibold text-base-3.7">
                  {{ tour.title }}
                </p>
                <div class="mt-8" v-if="id === index">
                  <p class="font-normal text-base-2 text-secondary-2">
                    {{ tour.text }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="FAQlistchange === 'Видеоматериалы'">
          <div class="grid grid-cols-3 gap-4" v-if="loaded">
            <LoaderApi type="videos" v-for="(_, id) in 6" :key="id" />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="video in data" v-if="data.length > 0">
              <video
                width="300"
                height="231"
                class="w-"
                autoplay
                controls
                muted
              >
                <source :src="video.video" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p>{{ video.title }}</p>
            </div>
          </div>
          <Pagination
            secondClass="mt-6"
            :totalPages="countPage"
            :curPage="curPage"
            @onPage="curPage = $event"
            @onNext="curPage++"
            @onPrev="curPage--"
          />
        </div>
        <div v-if="FAQlistchange === 'Контакты'">
          <div class="flex gap-x-10">
            <div>
              <h1 class="font-bold text-lg">Рабоче время:</h1>
              <p class="font-medium" style="color: #999">(08:00-16:00)</p>
            </div>
            <div>
              <h1 class="font-bold text-lg">Телефон доверия:</h1>
              <p class="font-medium" style="color: #999">
                {{ phone }} <br />
                {{ phone }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import LoaderApi from "~/components/skeleteon/LoaderApi.vue";
export default {
  head: {
    title: "ЧАВО",
  },
  computed: {
    ...mapState({
      data: (state) => state.api.data,
      loaded: (state) => state.api.loaded,
    }),
  },
  data() {
    return {
      phone: "+992 00 00 00 00",
      curPage: 1,
      countPage: null,
      request: `/Videos/?page=1`,
      id: "",
      title:
        "Если не нешли ответ на свой вопрос завоните по номеру +992 00 00 00 00",
      FAQlist: ["Чаво", "Видеоматериалы", "Контакты"],
      FAQlistchange:
        window.location.hash === "#video" ? "Видеоматериалы" : "Чаво",
      tours: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque penatibus gravida vitae aliquet nullam aliquam sed volutpat. Id et sed vel in est aliquet. Fringilla id rhoncus orci convallis mauris",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque penatibus gravida vitae aliquet nullam aliquam sed volutpat. Id et sed vel in est aliquet. Fringilla id rhoncus orci convallis mauris",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque penatibus gravida vitae aliquet nullam aliquam sed volutpat. Id et sed vel in est aliquet. Fringilla id rhoncus orci convallis mauris",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque penatibus gravida vitae aliquet nullam aliquam sed volutpat. Id et sed vel in est aliquet. Fringilla id rhoncus orci convallis mauris",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque penatibus gravida vitae aliquet nullam aliquam sed volutpat. Id et sed vel in est aliquet. Fringilla id rhoncus orci convallis mauris",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),
    async getVideos() {
      let payload = {
        request: this.request,
        key: "data",
        body: [],
      };
      await this.get_news(payload);
      this.countPage = Math.round(payload.body.count / 6);
    },
  },
  mounted() {
    this.getVideos();
  },
  watch: {
    $route() {
      this.FAQlistchange =
        window.location.hash === "#video" ? "Видеоматериалы" : "Чаво";
    },
    curPage(val) {
      if (val > 1) {
        this.request = `/Videos/?page=${val}`;
      } else {
        this.request = `/Videos/?page=1`;
      }
      this.getVideos();
    },
  },
  components: { LoaderApi },
};
</script>
<style scoped>
ul > li:first-child {
  border-top: none;
}
.block {
  box-shadow: 20px 20px 120px 15px rgba(0, 0, 0, 0.05);
}
.left-block li:hover {
  cursor: pointer;
  padding-left: 8px;
  border-left: 8px solid #333;
  background-color: #f0f0f0;
  transition: all 0.3s ease;
}
.left-block li:hover p {
  font-weight: 680;
  transition: all 0.3s ease;
}
.active {
  padding-left: 8px;
  border-left: 8px solid #333;
  background-color: #f0f0f0;
}
.title {
  padding-left: 38px;
}
.icon-right {
  fill: #dedede;
}
.icon-down {
  fill: #333;
}
.question {
  border-top: 1px solid #e0e0e0;
}
.show {
  align-items: flex-start;
}
.show img {
  margin-top: 7px;
}
@media screen and (max-width: 945px) {
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  video {
    width: 100%;
  }
  .mob-wr {
    flex-wrap: wrap;
    justify-content: center;
  }
  .left-block,
  .mob-v {
    width: 100%;
  }

  .mob-v {
    box-shadow: none;
    background: none;
    padding-top: 25px;
  }
  .left-block p {
    padding: 13px;
  }
}
</style>
