<template>
  <div class="relative w-full sm:w-auto">
    <div class="relative w-full sm:w-auto">
      <div class="w-full relative sm:w-auto">
        <div class="inline relative w-full sm:w-auto">
          <input
            type="text"
            class="rounded text-xs xl:text-lg outline-none p-3.5 text-base-3.5 bg-transparent w-full sm:w-auto lg:w-100 h-12 border-1 border-solid border-secondary-1 focus:border-secondary md:w-auto"
            :placeholder="search.title"
            v-model="searchInput"
          />
          <div class="w-6 h-6 absolute top-0 right-2 cursor-pointer">
            <img
              src="/images/icons/search.svg"
              alt="Search Icon"
              class="m-auto"
            />
          </div>
        </div>

        <div
          v-click-outside="hide"
          class="search absolute w-full left-0"
          v-if="isSearch"
        >
          <div class="w-full" v-if="result.results.Hotel.length">
            <div class="bg-stand px-3 py-2 font-medium">Отели</div>
            <div
              class="font-medium px-3 block py-3 hover:text-blue-1 cursor-pointer"
              v-for="hotel in result.results.Hotel"
              @click="
                $router.push(`/searchHotels/hotels/?id=${hotel.id}/`),
                  (searchInput = hotel.hotel_name)
              "
            >
              {{ hotel.hotel_name }}
            </div>
          </div>
          <div class="w-full" v-if="result.results.IndoorTours.length">
            <div class="bg-stand px-3 py-2 font-medium">Внутреные туры</div>
            <div
              class="font-medium px-3 py-3 hover:text-blue-1 cursor-pointer"
              v-for="indoor in result.results.IndoorTours"
              @click="
                $router.push(
                  `/IndoorTours/tours/?date=${JSON.stringify(indoor)}`
                ),
                  (searchInput = news.title)
              "
            >
              {{ indoor.tour_name }}
            </div>
          </div>
          <div class="w-full" v-if="result.results.OutdoorTours.length">
            <div class="bg-stand px-3 py-2 font-medium">Выездные туры</div>
            <div
              class="font-medium px-3 py-3 hover:text-blue-1 cursor-pointer"
              v-for="outdoor in result.results.OutdoorTours"
            >
              {{ outdoor.tour_name }}
            </div>
          </div>
          <div v-if="result.results.News.length">
            <div class="bg-stand px-3 py-2 font-medium">Новости</div>
            <div
              class="block font-medium px-3 py-3 hover:text-blue-1 cursor-pointer"
              v-for="news in result.results.News"
              @click="
                $router.push(`/news/${news.id}/`), (searchInput = news.title)
              "
            >
              {{ news.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["search"],
  data() {
    return {
      searchInput: "",
      result: [],
      isSearch: false,
    };
  },
  computed: {
    // result() {
    //   return this.search.list.filter((item) =>
    //     item.text.toLowerCase().includes(this.searchInput.toLowerCase())
    //   );
    // },
  },
  methods: {
    hide() {
      this.isSearch = false;
    },
  },
  watch: {
    async searchInput(val) {
      if (val.length > 3) {
        let res = await this.$axios.get(`/SearchAll/?query=${val}`);
        this.result = res.data;
        if (this.result.overall_total > 0) {
          this.isSearch = true;
        }
        console.log(this.result);
      }
    },
  },
};
</script>
<style scoped>
.search {
  z-index: 1000;
  top: 50px;
  background-color: white;
}

/* Removes placeholder from input when focused */
input[type="text"]:placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@media screen and (min-width: 680px) and (max-width: 1280px) {
  .button {
    margin-top: 20px;
  }
}
@media screen and (max-width: 790px) {
  .search input {
    width: auto;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .search input {
    width: 57vmin;
  }
  .search input {
    font-size: 12px;
  }
}
</style>
