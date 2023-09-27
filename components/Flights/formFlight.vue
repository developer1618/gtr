<template>
  <div>
    <div v-show="type === 'stand'">
      <div class="hidden sm:flex items-end gap-3 xl:flex-nowrap sm:flex-wrap">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          class="h-14 relative"
        >
          <div
            class="w-3/4 relative flex flex-col sm:w-full h-14 sm:w-40 xl:w-64"
          >
            <Input
              :placeholder="flights.placeholder.from"
              :error="errors[0]"
              type="text"
              label="Откуда"
              isbottom="true"
              labelStyle="hidden sm:block font-semibold mb-1"
              secondClass="border border-blue-1"
              v-model.trim="fromBlock.direction"
              @click="inputFrom"
              @input="inputFrom"
            />
            <div
              class="acc py-3 w-full bg-white shadow-3xl w-1/4 absolute z-10"
              :class="typeDir === 'to' ? 'accord-2' : ''"
              v-click-outside="hide"
              v-if="isShow"
            >
              <div class="">
                <div
                  v-if="filtered.length > 0"
                  v-for="to in airports"
                  @click="onToggle(to, currBlock)"
                  class="cursor-pointer p-3 hover:bg-stand w-full"
                >
                  {{ to.airport_name }}
                </div>
                <p v-if="!filtered" class="text-red px-4">Ничего не найдено</p>
              </div>
            </div>
          </div>
        </ValidationProvider>
        <div>
          <Arrows type="arrows" @arrow="onArrow" />
        </div>

        <ValidationProvider v-slot="{ errors }" rules="required" class="h-54">
          <div class="w-40 xl:w-64">
            <Input
              label="Куда"
              labelStyle="hidden sm:block font-semibold mb-1"
              v-model.trim="toBlock.direction"
              isbottom="true"
              :placeholder="flights.placeholder.in"
              type="text"
              class="h-19"
              :error="errors[0]"
              @input="inputIn"
            />
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="w-40 xl:w-64">
            <Input
              type="date"
              :min="new Date().toISOString().split('T')[0]"
              isbottom="true"
              :error="errors[0]"
              labelStyle="hidden sm:block font-semibold mb-1"
              v-model="calendar"
              label="Когда"
            />
          </div>
        </ValidationProvider>
        
        <div class="w-40 xl:w-64">
          <Input
            type="date"
            isbottom="true"
            :min="calendar || new Date().toISOString().split('T')[0]"
            labelStyle="hidden sm:block font-semibold mb-1"
            v-model="calendarVain"
            label="Обратно"
          />
        </div>
        
        <div class="w-32">
          <Button
            action="submit"
            type="secondary"
            secondClass="px-10 h-13 block"
            >{{ flights.button }}</Button
          >
        </div>
      </div>
      <div class="block sm:hidden">
        <div class="flex items-end gap-4 mb-4">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            class="w-full h-14"
          >
            <div class="w-full flex flex-col relative">
              <Input
                :placeholder="flights.placeholder.from"
                :error="errors[0]"
                type="text"
                isbottom="true"
                secondClass="w-full border border-blue-1"
                v-model.trim="fromBlock.direction"
                @click="inputFrom"
                @input="inputFrom"
              />
              <div
                class="acc py-3 bg-white shadow-3xl w-1/4 absolute z-50 w-full"
                :class="type === 'to' ? 'accord-3' : ''"
                v-click-outside="hide"
                v-if="isShow && filtered.length > 0"
              >
                <div class="">
                  <div
                    v-for="to in filtered"
                    @click="onToggle(to, currBlock)"
                    class="cursor-pointer p-3 hover:bg-stand w-full"
                  >
                    {{ to.airport_name }}
                  </div>
                </div>
              </div>
            </div>
          </ValidationProvider>
          <div>
            <Arrows type="arrows" @arrow="onArrow" />
          </div>
        </div>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          class="w-full h-54"
        >
          <div class="mb-4">
            <Input
              v-model.trim="toBlock.direction"
              isbottom="true"
              :placeholder="flights.placeholder.in"
              type="text"
              class="h-19"
              :error="errors[0]"
              @input="inputIn"
            />
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="mb-4">
            <Input
              type="date"
              :min="new Date().toISOString().split('T')[0]"
              :error="errors[0]"
              v-model="calendar"
            />
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          v-if="flightsSearch === 'Туда обратно'"
        >
          <div>
            <Input
              type="date"
              :min="calendar || new Date().toISOString().split('T')[0]"
              :error="errors[0]"
              v-model="calendarVain"
            />
          </div>
        </ValidationProvider>
        <div class="block mt-4 w-full">
          <Button type="secondary" secondClass="w-full px-10 h-13 block "
            >Найти</Button
          >
        </div>
      </div>
    </div>
    <div v-show="type === 'multiply'">
      <div class="hidden sm:flex justify-between xl:flex-nowrap sm:flex-wrap">
        <div class="flex items-end gap-4 flex-wrap md:flex-nowrap">
          <ValidationProvider v-slot="{ errors }" rules="required" class="h-14">
            <div class="w-44 xl:w-80">
              <Input
                :placeholder="flights.placeholder.from"
                :error="errors[0]"
                type="text"
                label="Откуда"
                v-model.trim="fromBlock.direction"
                isbottom="true"
                labelStyle="hidden sm:block font-semibold mb-1"
                secondClass="border border-blue-1"
                @click="inputFrom"
                @input="inputFrom"
              />
            </div>
          </ValidationProvider>
          <div>
            <Arrows type="arrows" @arrow="onArrow" />
          </div>
          <div
            class="accord py-3 bg-white shadow-3xl w-1/4 absolute z-50 left-54"
            :class="typeDir === 'to' ? 'accord-2' : ''"
            v-click-outside="hide"
            v-if="isShow && filtered.length > 0"
          >
            <div class="">
              <div
                v-for="to in filtered"
                @click="onToggle(to, currBlock)"
                class="cursor-pointer p-3 hover:bg-stand w-full"
              >
                {{ to.airport_name }}
              </div>
            </div>
          </div>
          <ValidationProvider v-slot="{ errors }" rules="required" class="h-54">
            <div class="w-44 xl:w-80">
              <Input
                label="Куда"
                labelStyle="hidden sm:block font-semibold mb-1"
                isbottom="true"
                v-model.trim="toBlock.direction"
                :placeholder="flights.placeholder.in"
                type="text"
                class="h-19"
                :error="errors[0]"
                @input="inputIn"
              />
            </div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="w-40 xl:w-52">
              <Input
                :min="new Date().toISOString().split('T')[0]"
                type="date"
                isbottom="true"
                v-model="calendar"
                :error="errors[0]"
                labelStyle="hidden sm:block font-semibold mb-1"
                label="Когда"
              />
            </div>
          </ValidationProvider>

          <div
            :class="
              index === col.length - 1 && col.length > 2
                ? 'block'
                : 'hidden md:invisible '
            "
            class="flex h-13 mr-3 items-center"
          >
            <img
              src="/icons/cancelFlight.svg"
              alt="cancel"
              @click="$emit('onRemove')"
              class="cursor-pointer"
            />
          </div>
          <div
            class="w-32"
            :class="index === col.length - 1 ? 'block' : 'hidden md:invisible'"
          >
            <Button type="secondary" secondClass="px-10 h-13 block ">{{
              flights.button
            }}</Button>
          </div>
        </div>
      </div>
      <div class="block sm:hidden">
        <div class="flex items-end gap-4 mb-4">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            class="w-full h-14"
          >
            <div class="w-full">
              <Input
                :placeholder="flights.placeholder.from"
                :error="errors[0]"
                labelStyle="mb-1"
                type="text"
                v-model.trim="fromBlock.direction"
                isbottom="true"
                secondClass="w-full border border-blue-1"
                @click="inputFrom"
                @input="inputFrom"
              />
            </div>
          </ValidationProvider>
          <div>
            <Arrows type="arrows" @arrow="onArrow" />
          </div>
        </div>
        <div
          class="acc py-3 bg-white shadow-3xl w-1/4 absolute z-50 left-54"
          :class="typeDir === 'to' ? 'accord-2' : ''"
          v-click-outside="hide"
          v-if="isShow && filtered.length > 0"
        >
          <div class="">
            <div
              v-for="to in filtered"
              @click="onToggle(to, currBlock)"
              class="cursor-pointer p-3 hover:bg-stand w-full"
            >
              {{ to.airport_name }}
            </div>
          </div>
        </div>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          class="w-full h-54"
        >
          <div class="mb-4">
            <Input
              isbottom="true"
              :placeholder="flights.placeholder.in"
              type="text"
              labelStyle="mb-1"
              v-model.trim="toBlock.direction"
              class="h-19"
              :error="errors[0]"
              @input="inputIn"
            />
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="mb-4">
            <Input
              :min="new Date().toISOString().split('T')[0]"
              type="date"
              :error="errors[0]"
              v-model="calendar"
              labelStyle="mb-1"
            />
          </div>
        </ValidationProvider>
      </div>
      <div
        v-show="index === col.length - 1"
        class="my-4 flex justify-between select-none"
      >
        <div
          :class="
            index === col.length - 1 && col.length > 2
              ? 'block sm:hidden'
              : 'hidden md:invisible '
          "
          class="flex items-center gap-2 cursor-pointer"
          @click="$emit('onRemove')"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3813_6748)">
              <path
                d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 7.5L7.5 12.5"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 7.5L12.5 12.5"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3813_6748">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p class="text-zero">удалить рейс</p>
        </div>
        <div
          @click="$emit('addFlight')"
          class="flex gap-2 mt-3"
          :class="col.length >= 6 ? 'disable' : 'able'"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
              :stroke="col.length >= 6 ? 'silver' : '#417CED'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 6.66666V13.3333"
              :stroke="col.length >= 6 ? 'silver' : '#417CED'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66675 10H13.3334"
              :stroke="col.length >= 6 ? 'silver' : '#417CED'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="font-semibold">Добавить рейс</p>
        </div>
      </div>
      <div :class="index === col.length - 1 ? 'block sm:hidden' : 'hidden'">
        <Button type="secondary" secondClass="px-10 w-full h-13 block ">{{
          flights.button
        }}</Button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
  components: {DatePick},
  props: ["flights", "col", "index", "type", "flightsSearch"],
  computed: {
    filtered() {
      return this.airports.length > 0 && this.airports;
    },
  },
  data() {
    return {
      date: 'ГГГГ-ММ-ДД',
      airports: [],
      typeDir: null,
      from: "",
      in: "",
      dir: "",
      currBlock: null,
      isShow: false,
      calendar: "",
      calendarVain: "",
      fromBlock: {
        direction: "",
        code: "",
      },
      toBlock: {
        direction: "",
        code: "",
      },
    };
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    onArrow() {
      let value1 = this.toBlock.direction;
      let value2 = this.fromBlock.direction;
      this.toBlock.direction = value2;
      this.fromBlock.direction = value1;
    },
    hide() {
      this.isShow = false;
    },
    inputFrom(event) {
      this.showAccordeon();
      this.from = event;
    },
    inputIn(event) {
      this.showAccordeonTo();
      this.in = event;
    },
    showAccordeon() {
      this.currBlock = this.fromBlock;
      this.isShow = true;
    },
    showAccordeonTo() {
      this.currBlock = this.toBlock;
      this.isShow = true;
    },
    onToggle(val, currElem) {
      this.isShow = false;
      currElem.direction = val.airport_name;
      currElem.code = val.code;
    },

    async get_airports(val) {
      let payload = {
        request: `/SearchAirport/?query=${val}`,
      };
      await this.get_page(payload);
      this.airports = payload.body;
    },
    getQuery() {
      if (Object.keys(this.$route.query).length !== 0) {
        const { from, to, when, vain } = JSON.parse(this.$route.query.data)[
          this.index
        ];
        this.fromBlock = from || "";
        this.toBlock = to || "";
        this.calendar = when;
        this.calendarVain = vain || "";
      }
    },
  },

  created() {
    this.getQuery();
  },
  watch: {
    "fromBlock.direction"(val) {
      this.typeDir = "from";
      this.get_airports(val);
    },
    "toBlock.direction"(val) {
      this.typeDir = "to";
      this.get_airports(val);
    },

    $route() {
      this.getQuery();
      this.calendar =
        Object.keys(this.$route.query).length === 0
          ? ""
          : String(this.$route.query.when);
      this.calendarVain =
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.vain;
    },
  },
};
</script>
<style scoped>
.accord-2 {
  left: 120%;
}
.accord {
}
.acc {
  top: 100%;
  overflow: auto;
}
.accord-3 {
  left: 30%;
  transform: translateY(100%);
}
.disable {
  cursor: auto;
}
.disable p {
  color: silver;
}
.disable img path {
  stroke: red;
}
.able {
  cursor: pointer;
}
.able > p {
  color: #417ced;
}
.able img path {
  stroke: #417ced;
}
@media screen and (max-width: 680px) {
  .accord-2 {
    background-color: red !important;
    transform: translateY(150%) !important;
  }
}
</style>
