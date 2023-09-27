<template>
  <div class="flights p-5 rounded w-full">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(postFlights)"
        class="flex-col flex xl:flex-col gap-y-0 sm:gap-y-10"
      >
        <div class="hidden sm:flex gap-3">
          <div class="w-full col-start-1 col-end-4 sm:w-48 xl:w-52">
            <Select
              :list="flights.variants"
              label="Маршрут"
              labelStyle="hidden sm:block  font-semibold mb-1"
              @changeicon="flightsSearchActive = $event"
              secondClass="p-1.5 bg-stand h-13"
              :active="flightsSearchActive"
            >
            </Select>
          </div>
          <div class="w-auto col-start-1 col-end-3 sm:w-40 xl:w-52 row-start-2">
            <Passenger
              ref="passeng"
              labelStyle="hidden sm:block mb-1"
              label="Пассажиры"
            >
            </Passenger>
          </div>
          <!-- <div class="w-auto sm:w-60 row-start-2 col-start-3 cold-end-4">
            <Select
              :list="flights.grade"
              :active="flights.activeGrade"
              label="Класс"
              labelStyle="hidden sm:block font-semibold mb-1"
              @changeicon="
                set_data({ url: 'flights', key: 'activeGrade', body: $event })
              "
              secondClass="p-1.5 bg-stand h-13"
            >
            </Select>
          </div> -->
          <div class="block w-full sm:hidden col-start-1 col-end-4">
            <Button
              action="submit"
              type="secondary"
              secondClass="w-full px-10 h-13 block "
              >Найти</Button
            >
          </div>
        </div>
        <div class="block sm:hidden gap-3">
          <div class="w-full col-start-1 col-end-4 sm:w-40 xl:w-52">
            <Select
              :list="flights.variants"
              @changeicon="
                set_data({
                  url: 'flights',
                  key: 'flightsSearchActive',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand h-13 "
              :active="
                (Object.keys($route.query).length === 0
                  ? flights.flightsSearchActive
                  : set_data({
                      url: 'flights',
                      key: 'flightsSearchActive',
                      body: $route.query.direction,
                    }),
                flights.flightsSearchActive)
              "
            >
            </Select>
          </div>
          <div class="grid grid-cols-2 gap-4 my-4">
            <div class="w-full">
              <Passenger> </Passenger>
            </div>
            <div class="">
              <Select
                :list="flights.grade"
                :active="flights.activeGrade"
                @changeicon="
                  set_data({ url: 'flights', key: 'activeGrade', body: $event })
                "
                secondClass="p-1.5 bg-stand h-13"
              >
              </Select>
            </div>
          </div>
        </div>
        <div v-if="flightsSearchActive !== 'Сложный маршрут'">
          <formFlight
            :flights="flights"
            ref="form"
            :flightsSearch="flightsSearchActive"
            type="stand"
            :index="0"
            :col="1"
          />
        </div>
        <div v-for="(_, i) in colFlights" v-else>
          <formFlight
            type="multiply"
            :flightsSearch="flightsSearchActive"
            @addFlight="addFlight"
            @onRemove="onRemove(i)"
            :flights="flights"
            :index="i"
            :col="colFlights"
            ref="form"
          />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import formFlight from "./formFlight.vue";
import Button from "../Button.vue";
export default {
  props: ["multi"],
  data() {
    return {
      colFlights:
        Object.keys(this.$route.query).length === 0
          ? [{}, {}]
          : JSON.parse(this.$route.query.data),
      flightsSearchActive:
        Object.keys(this.$route.query).length === 0
          ? "Туда обратно"
          : this.$route.query.dir,
      variants: [
        {
          value: "Туда обратно",
        },
        {
          value: "В одну сторону",
        },
        // {
        //   value: "Сложный маршрут",
        // },
      ],
    };
  },
  computed: {
    flightsIndex() {
      for (let i = 0; i < this.colFlights.length; i++) {
        this.colFlights[i] = {
          from: this.$refs.form[i].from,
          in: this.$refs.form[i].in,
          calendar: this.$refs.form[i].calendar,
        };
      }
      return this.colFlights;
    },
    ...mapState({
      data: (state) => state.api.data,
      flights: (state) => state.flights.flights,
    }),
  },
  methods: {
    ...mapMutations({
      set_data: "flights/SET_UPDATE",
      change_dir: "flights/SET_DIR",
    }),

    ...mapActions({
      get_page: "api/get_page",
    }),
    addFlight() {
      if (Object.keys(this.$route.query)) {
        if (this.colFlights.length < 6) this.colFlights.push({});
      }
    },
    onRemove(index) {
      console.log(this.getflights);
      this.colFlights.splice(index, 1);
    },
    postFlights() {
      if (!this.$refs.form.length) {
        let { fromBlock, toBlock, calendar, calendarVain } = this.$refs.form;
        let data = [
          {
            from: fromBlock,
            to: toBlock,
            when: calendar,
            vain: calendarVain,
            class: this.flights.activeGrade,
            adults: this.$refs.passeng.list[0].count,
            children: this.$refs.passeng.list[1].count,
            infants: this.$refs.passeng.list[2].count,
          },
        ];
        this.$router.push(
          `/searchFlights/?data=${JSON.stringify(data)}&dir=${
            this.flightsSearchActive
          }&passenger=${this.$refs.passeng.allCount}`
        );
      } else {
        let data = [];
        for (let i = 0; i < this.$refs.form.length; i++) {
          let { fromBlock, toBlock, calendar, calendarVain } =
            this.$refs.form[i];
          data.push({
            from: fromBlock,
            to: toBlock,
            when: calendar,
            vain: calendarVain,
            passenger: this.$refs.passeng.allCount,
            class: this.flights.activeGrade,
          });
        }
        this.$router.push(
          `/searchFlights/?data=${JSON.stringify(data)}&dir=${
            this.flightsSearchActive
          }&passenger=${this.$refs.passeng.$el.__vue__.allCount}`
        );
      }
    },
  },

  components: {
    formFlight,
    Button,
  },
};
</script>
<style scoped>
.row-g {
  grid-row: 2;
}
.bg-item {
  background-color: #f0f0f0;
}

.accord-2 {
  background: red;
}
.flights {
  box-shadow: 0 20px 120px 15px rgba(0, 0, 0, 0.05);
}
.search {
  float: right;
}
@media screen and (max-width: 360px) {
  .f-col {
    flex-direction: column;
  }
}
@media screen and (max-width: 1280px) {
  .row-g {
    grid-row: 1;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .row {
    grid-row: 2;
  }
  .mob-fly {
    width: 100%;
    display: block;
  }
  .mob-fly > div {
    width: 100%;
    margin-bottom: 12px;
  }
  h2 {
    display: none;
  }
  .mob-ful {
    width: 100%;
  }
  .search,
  .rounded {
    width: 100%;
  }
  .mob-fly input {
    width: 100%;
  }
  .flights {
    margin-top: 0;
    padding: 0px 15px;
  }
  .f-col {
    flex-wrap: wrap;
  }
  .button {
    width: 100%;
  }
  .mop-pur div {
    width: 100%;
  }
  form {
    padding: 15px 0;
  }
  .gr div {
    display: grid;
  }
}
</style>
