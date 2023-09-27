<template>
  <div class="mob-cont pb-24">
    <div class="flex gap-2.5 items-center my-9">
      <NuxtLink to="/" class="text-base-1">Главная </NuxtLink>
      <p class="text-base-1">></p>
      <NuxtLink class="text-base-1" to="/IndoorTours"> Авиабилеты</NuxtLink>
    </div>
    <transition name="slide">
      <div
        v-if="toFilter"
        class="filter block xl:hidden left-0 top-0 fixed w-full h-full z-20"
      >
        <div
          style="max-width: 350px"
          class="bg-white flex flex-col justify-between h-full shadow-3xl py-6 px-3 rounded"
        >
          <div>
            <div class="border-b-1 border-solid border-secondary-3 pb-3">
              <div class="flex justify-between">
                <p class="mb-4 text-base-3.5 font-bold">
                  {{ filters.filter.text }}
                </p>
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
              <ul>
                <li>
                  <div>
                    <input
                      required
                      v-model="filters.filter.toggle"
                      type="checkbox"
                      @click="onChange($event)"
                      class="checkbox"
                      :data-id="filters.filter.value"
                      id="luggage"
                      name="agreement"
                    />
                    <label for="luggage" class="font-normal text-base-1">{{
                      filters.filter.value
                    }}</label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="border-b-1 border-solid border-secondary-3 pt-4 pb-3">
              <div>
                <p class="mb-4">
                  {{ filters.transfers.text }}
                </p>
              </div>
              <div>
                <ul>
                  <li
                    v-for="(item, index) in filters.transfers.transfer"
                    :key="index"
                    class="pb-3"
                  >
                    <div>
                      <input
                        required
                        v-model="item.toggle"
                        @change="onChange($event)"
                        type="checkbox"
                        class="checkbox"
                        :data-id="item.value"
                        :id="item.value"
                        name="agreement"
                      />
                      <label
                        :for="item.value"
                        class="font-normal text-base-1"
                        >{{ item.value }}</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-b-1 border-solid border-secondary-3 pt-4 pb-3">
              <div>
                <ul>
                  <li
                    v-for="(item, index) in filters.airlines.airline"
                    :key="index"
                    class="pb-3"
                  >
                    <div>
                      <input
                        required
                        @click="onChange($event)"
                        type="checkbox"
                        class="checkbox"
                        :data-id="item"
                        :id="item.value"
                        name="agreement"
                      />
                      <label
                        :for="item.value"
                        class="font-normal text-base-1"
                        >{{ item }}</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <Button type="primary" secondClass="w-full" @click="clean"
              >Очистить</Button
            >
            <Button type="secondary" secondClass="w-full">Применить</Button>
          </div>
        </div>
      </div>
    </transition>
    <svg style="display: none">
      <symbol id="right" viewBox="0 0 20 10">
        <path
          d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
        />
      </symbol>
      <symbol id="left" viewBox="0 0 20 10">
        <path d="M3.83 4L6.41 1.41L5 0L0 5L5 10L6.41 8.59L3.83 6H20V4H3.83Z" />
      </symbol>
    </svg>
    <bookingTours :isTours="1" ref="book" />
    <SearchSlider />
    <div class="flex gap-6 mob-q">
      <div class="hidden xl:block">
        <Accordeon />
        <div
          class="main mt-4 hidden sticky top-0 xl:block shadow-3xl w-80 mob-f p-6 rounded h-fit"
        >
          <div class="border-b-1 border-solid border-secondary-3 pb-2">
            <p class="mb-4">
              {{ filters.filter.text }}
            </p>
            <ul>
              <li>
                <div>
                  <input
                    required
                    @click="onChange($event)"
                    type="checkbox"
                    :data-id="filters.filter.value"
                    class="checkbox"
                    id="luggage"
                    name="agreement"
                  />
                  <label for="luggage" class="font-normal text-base-1">{{
                    filters.filter.value
                  }}</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="border-b-1 border-solid border-secondary-3 pt-4 pb-2">
            <div>
              <p class="mb-4">
                {{ filters.transfers.text }}
              </p>
            </div>
            <div>
              <ul>
                <li
                  v-for="(item, index) in filters.transfers.transfer"
                  :key="index"
                  class="pb-3"
                >
                  <div>
                    <input
                      required
                      type="checkbox"
                      @click="onChange($event)"
                      class="checkbox"
                      :data-id="item.value"
                      :id="item.value"
                      name="agreement"
                    />
                    <label :for="item.value" class="font-normal text-base-1">{{
                      item.value
                    }}</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="pt-4 pb-2">
            <div>
              <p class="mb-4">
                {{ filters.airlines.text }}
              </p>
            </div>
            <div>
              <ul>
                <li
                  v-for="(item, index) in filters.airlines.airline"
                  :key="index"
                  class="pb-3"
                >
                  <div>
                    <input
                      required
                      type="checkbox"
                      class="checkbox"
                      :data-id="item"
                      @click="onChange($event)"
                      :id="item"
                      name="agreement"
                    />
                    <label
                      :for="item"
                      class="font-normal capitalize text-base-1"
                      >{{ item }}</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-x-5">
            <Button type="primary" secondClass="w-full" @click="clean"
              >Очистить</Button
            >
            <Button type="secondary" secondClass="w-full" @click="accept"
              >Применить</Button
            >
          </div>
        </div>
      </div>
      <div class="w-full xl:w-4/5">
        <div class="flex xl:hidden my-6 justify-between items-center">
          <div
            @click="toFilter = true"
            class="block xl:hidden pl-2 select-none cursor-pointer text-base-3 font-bold"
          >
            Фильтр
          </div>
          <Accordeon class="bg-none block xl:hidden" />
        </div>
        <div class="main shadow-3xl relative h-25 rounded mb-6 mt-0">
          <p class="font-normal text-base-1 main-block text-center">
            {{ info }}
          </p>
        </div>
        <div>
          <div v-if="data && data.length === 0 && !loaded" class="text-center">
            <h1 class="font-bold text-3xl">Рейсов не найдено</h1>
            <p class="font-medium text-zero">
              Выбирите другие даты, другой класс билетов или попробуйте новое
              направление
            </p>
          </div>
          <LoaderApi
            v-if="loaded"
            v-for="(_, id) in 5"
            :key="id"
            class="mb-4"
          />
          <CardsBuyFlights
            v-for="(num, i) in data"
            :key="i"
            :buyflightsImg="buyflights"
            :img="img"
            :buyflights="num"
            @click="buyFlightsCard(num)"
            class="main shadow-3xl mb-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Accordeon from "~/components/Accordeon.vue";
import LoaderApi from "~/components/skeleteon/LoaderApi.vue";
export default {
  head: {
    title: "Авиабилеты",
  },

  data() {
    return {
      logo: [],
      carrier: null,
      data: [],
      filt: [],
      checkbox: [],
      toggle: "",
      loader: false,
      numbers: [],
      toFilter: false,
      isShowItemList: false,
      selectedPrice: "Сортировка по цене",
      filters: {
        filter: {
          toggle: false,
          text: "Фильтр",
          value: "С багажом",
        },
        transfers: {
          text: "Пересадки",
          transfer: [
            {
              toggle: false,
              value: "Без пересадок",
            },
            {
              toggle: false,
              value: "1 пересадка",
            },
            {
              toggle: false,
              value: "2+ пересадки",
            },
          ],
        },
        airlines: {
          text: "Авиакомпании",
          airline: null,
        },
      },
      time: {
        text: "Время",
        takeoff: "По времени вылета",
        arrival: "Время прилета",
      },

      info: "Инфоблок",
      flights: {
        grade: [
          {
            value: "Эконом",
          },
          {
            value: "Премиум",
          },
          {
            value: "Эконом/Премиум",
          },
        ],

        active: {
          activeVariant: "Направление",
          activePassengers: "Пассажиры",
          activeGrade: "Класс",
        },
        placeholder: {
          from: "Откуда",
          in: "Куда",
        },
        button: "Найти",
      },
      buyflights: {
        img: {
          src: "/images/images3.svg",
          alt: "Airlines Logo",
        },
        takeoff: "Вылет",
        arrival: "Прилет",
        takeoffTime: "01:45",
        arrivalTime: "16:45",
        text: "Вылет из аэропорта “Душанбе” в 01:45 по местному времени",
        takeoffСity: "Душанбе",
        date: "28 сен 2021, вт",
        arrivalСity: "Москва",
        way: "В пути",
        wayTime: "16h 05m",
        takeoffAiroport: "DYU",
        arrivalAiroport: "DME",
        layoverAiroport: "VOG",
        rule: "Правила",
        more: "Подробнее",
        price: "3000 TJS",
        aviaWebsite: "",
        btn: "Купить",
        isTours: 1,
      },
    };
  },
  computed: {
    img() {
      try {
        return Object.keys(this.carrier)[0];
      } catch (e) {
        return this.buyflights;
      }
    },
    ...mapState({
      loaded: (state) => state.api.loading.tickets,
    }),
  },
  methods: {
    ...mapActions({
      get_tickets: "api/get_page",
    }),
    onChange({ target }) {
      if (target.checked) {
        this.checkbox.push(target.dataset.id);
      } else {
        const id = target.dataset.id;
        for (let data of this.checkbox) {
          if (data === id) {
            const index = this.checkbox.indexOf(data);
            this.checkbox.splice(index, 1);
          }
        }
      }
      // item.toggle = !item.toggle;
      // if (item.toggle) {

      // } else {
      //   this.data = this.filt;
      // }
      // if (val.toggle) {
      //   this.data = this.data.filter((airport) => {
      //     if (airport.itineraries[0].segments.length === 1) {
      //       return airport;
      //     }
      //   });
      // } else {
      //   return;
      // }
    },
    hide() {
      this.isShowItemList = false;
    },
    change(item) {
      this.selectedPrice = item.value;
    },
    async getTickets() {
      let data = JSON.parse(this.$route.query.data);
      for (let val of data) {
        console.log(val);
        let payload = {
          body: [],
          isTrue: "true",
          request: `/searchFlight/?originLocationCode=${
            val.from.code
          }&destinationLocationCode=LON&departureDate=${
            val.when
          }&returnDate=${val.vain || ""}&adults=${
            val.adults
          }&children=${val.children || 0}&infants=${val.infants || 0}&max=1`,
        };
        await this.get_tickets(payload);
        this.data = payload.body.data;
        this.carrier =
          payload.body.data.length > 1 && payload.body.dictionaries.carriers;
      }

      // this.filt = payload.body.data;
      // this.filters.airlines.airline = Object.values(this.carrier);
    },

    accept() {
      this.checkbox.length === 0 && (this.data = this.filt);
      if (this.checkbox.length === 0) {
        this.data = this.filt;
      } else {
        this.data = [];
        this.checkbox.forEach((val) => {
          this.data.filter((el) => {
            if (val === "С багажом") {
              return elem.pricingOptions.includedCheckedBagsOnly;
            } else if (val === "Без пересадок") {
              return elem.itineraries[0].segments.length === 1;
            } else if (val === "1 пересадка") {
              return elem.itineraries[0].segments.length === 2;
            } else if (val === "1 пересадка") {
              return elem.itineraries[0].segments.length === 2;
            } else if (val === "2+ пересадки") {
              return elem.itineraries[0].segments.length >= 3;
            }
          });
        });
      }
    },

    async getLogos() {
      let payload = {
        request: `/Logo/`,
      };
      await this.get_tickets(payload);
      this.logo = payload.body.results;
    },
    async getCurrency() {
      let payload = {
        key: "currency",
        request: `/Currencies/`,
        body: [],
      };
      await this.get_tickets(payload);
    },
    clean() {
      const elem = document.querySelectorAll(".checkbox");
      elem.forEach((el) => (el.checked = false));
    },
    buyFlightsCard(data) {
      this.$router.push(
        `/searchFlights/buy/?data=${JSON.stringify(data)}&passenger=${
          this.$route.query.passenger
        }`
      );
    },
  },
  mounted() {
    this.getTickets();
    this.getLogos();
    this.getCurrency();
  },
  watch: {
    $route() {
      this.data = [];
      this.getTickets();
    },
  },

  components: { LoaderApi, Accordeon },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 0.5s ease-in 0s;
}
.x-but {
  width: 20px;
  height: 20px;
  fill: #999;
}
.filter {
  background-color: rgba(0, 0, 0, 0.5);
}
.main-item:hover {
  background-color: #333;
  transition: all 0.3s ease;
  color: #fff;
}
.main-list {
  position: absolute;
  top: 45px;
  left: 0;
}
.main-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  display: inline-flex;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.75em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox:checked + label::before {
  border-color: #ffba0f;
  background-color: #ffba0f;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

@media screen and (max-width: 250px) {
  .mob-mt-28 {
    margin-top: 0;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .main-item {
    justify-content: flex-start;
    width: 100%;
  }
  ::v-deep .slick-list {
    padding: 0px 15px;
  }
  ::v-deep .slick-dots li {
    margin: 0;
  }
  .left-l {
    top: -11px;
    left: 20px;
  }
  .right-r {
    top: -11px;
    right: 20px;
  }
}
@media screen and (max-width: 1040px) {
  .mob-q {
    flex-wrap: wrap;
  }
  .mob-f,
  .w-4\/5 {
    width: 100%;
  }
}
</style>
