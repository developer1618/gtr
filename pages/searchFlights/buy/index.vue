<template>
  <div class="py-16 mob-cont">
    <div
      class="flex gap-2 text-normal mt-10 sm:mt-0 text-base-1 mb-6 flex-wrap"
    >
      <h3>
        {{ header.title }}
      </h3>
      <p>></p>
      <h3>
        {{ header.airlines }}
      </h3>
      <p>></p>
      <h3>
        {{ header.buy }}
      </h3>
    </div>
    <div class="main py-8 px-5 shadow-3xl mx-auto mb-8">
      <h2
        class="font-semibold text-base-4 border-b-1 border-solid border-secondary-3 pb-9.5"
      >
        Транспорт
      </h2>
      <div class="flex flex-wrap sm:flex-nowrap items-center gap-5">
        <div class="flex gap-6 pt-5 pb-14 font-semibold text-xs md:text-base-2">
          <p>{{ ticket.fromAiroport }} {{ ticket.fromCity }}</p>
          <img src="/images/icons/arrowRight.svg" alt="Arrow Right" />
          <p class="mr-4">{{ ticket.inAiroport }} {{ ticket.inCity }}</p>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap mt-3 gap-14 text-base-1 mb-0 sm:mb-8"
        >
          <div>
            <p class="font-semibold pb-1 text-blackTwo">
              {{ ticket.takeOff.text }}
            </p>
            <p class="font-light text-zero">
              {{ ticket.takeOff.dateTime }}
            </p>
          </div>
          <div>
            <p class="font-semibold pb-1 text-blackTwo">
              {{ ticket.arrival.text }}
            </p>
            <p class="font-light text-zero">
              {{ ticket.arrival.dateTime }}
            </p>
          </div>
          <div class="text-base-1">
            <p class="font-semibold pb-2 text-blackTwo">
              {{ ticket.passengers.text }}
            </p>
            <p class="font-light text-zero">
              {{ ticket.passengers.count }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(sum, ind) in sum"
          class="mb-1 flex justify-between"
          :class="
            ind === 0
              ? 'text-black font-semibold text-base-3'
              : 'text-zero font-medium '
          "
        >
          <p>{{ sum.text }}</p>
          <p>{{ sum.sum }} USD</p>
        </div>
      </div>
    </div>
    <Field :isFlights="true" />
  </div>
</template>
<script>
import Field from "../Field";
export default {
  components: {
    Field,
  },
  head: {
    title: "Покупка авиабилетов",
  },
  data() {
    return {
      list: [
        {
          value: "Вариант 1",
        },
        {
          value: "Вариант 2",
        },
        {
          value: "Вариант 3",
        },
      ],
      sum: [
        // {
        //   text: "Cумма за пассажира",
        //   sum: "3 963",
        // },
        // {
        //   text: "Cумма за ребенка",
        //   sum: "2 345",
        // },
        {
          text: "Общая сумма",
          sum: JSON.parse(this.$route.query.data).price.grandTotal,
        },
      ],
      header: {
        title: "Главная",
        airlines: "Авиабилеты",
        buy: "Покупка",
      },
      title: "Авиабилет",
      ticket: {
        title: "Траспорт",
        fromAiroport: JSON.parse(this.$route.query.data).itineraries[0]
          .segments[0].departure.iataCode,
        inAiroport: JSON.parse(this.$route.query.data).itineraries[0]
          .segments[1].arrival.iataCode,
        fromCity: "",
        inCity: "",
        takeOff: {
          text: "Дата вылета",
          dateTime: JSON.parse(this.$route.query.data).itineraries[0]
          .segments[0].arrival.at,
        },
        arrival: {
          text: "Дата прилета",
          dateTime: JSON.parse(this.$route.query.data).itineraries[0]
          .segments[1].arrival.at,
        },
        passengers: {
          text: "Количество пассажиров",
          count: this.$route.query.passenger,
        },
      },
    };
  },

  directives: {
    name: "ClickOutside",
  },
  mounted() {
    console.log(JSON.parse(this.$route.query.data));
  },
};
</script>
<style scoped>
.main {
  width: 80%;
}
@media screen and (max-width: 780px) {
  .mob-b {
    justify-content: center;
  }
}
@media screen and (max-width: 1280px) {
  .main {
    width: 100%;
  }
  .se {
    display: grid;
  }
  .mob-t {
    padding-left: 12px;
  }
}
@media screen and (max-width: 800px) {
  .w-1\/3 {
    width: 100%;
  }
}
</style>
