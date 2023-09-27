<template>
  <div class="pb-120 p-5">
    <navbarTour />
    <h1 class="mb-4 font-bold text-lg">{{ living }}</h1>
    <div class="bg-white shadow-3xl">
      <div class="mb-5 p-3 sm:p-8 relative">
        <div class="flex justify-between flex-wrap gap-y-3">
          <div class="flex flex-col gap-y-7 mob-w-full-bl">
            <div>
              <h1 class="text-2xl" style="font-size: 24px">
                {{ liv1 }}
              </h1>
            </div>
            <div class="b-but absolute h-px bg-stand"></div>
            <div class="mt-3">
              <h2>{{ hotel.first.title }}</h2>
              <p class="text-lg">{{ hotel.first.country }}</p>
            </div>
            <div class="flex gap-x-3">
              <Mark class="p-3">{{ hotel.sec.mark }}</Mark>
              <div>
                <h2 class="text-sm">{{ hotel.sec.state }}</h2>
                <p>{{ hotel.sec.comms }}</p>
              </div>
            </div>
            <div class="flex">
              <div v-for="to in hotel.third" class="mr-16">
                <h2 class="text-sm">{{ to.title }}</h2>
                <p>{{ to.date }}</p>
              </div>
            </div>
          </div>
          <div class="sub-top flex flex-col gap-y-7">
            <div class="mb-3">
              <h1 class="text-2xl">{{ liv2 }}</h1>
            </div>
            <div v-for="dec in decis">
              <h2 class="text-sm">{{ dec.title }}</h2>
              <p class="p2">{{ dec.text }}</p>
            </div>
          </div>
          <div class="sub-top flex flex-col gap-y-7">
            <div>
              <h1 class="text-2xl">{{ liv3 }}</h1>
            </div>
            <div class="flex items-center gap-x-5 my-3">
              <h2 class="font-medium">{{ hotel.trans.from }}</h2>
              <h2>
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.67 6.84546L14.09 9.43546L15.5 10.8455L20.5 5.84546L15.5 0.845459L14.09 2.25546L16.67 4.84546H0.5V6.84546H16.67Z"
                    fill="#333333"
                  />
                </svg>
              </h2>
              <h2 class="font-medium">{{ hotel.trans.to }}</h2>
            </div>
            <div class="flex justify-between">
              <div v-for="to in hotel.trans.data">
                <h2 class="text-sm">{{ to.title }}</h2>
                <p>{{ to.text }}</p>
              </div>
            </div>
            <div>
              <h2>{{ hotel.trans.col.title }}</h2>
              <p>{{ hotel.trans.col.countity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="mt-11 mb-5 font-bold">Экскурсии</h1>
    <excurseItems />
    <h1 class="mt-8 mb-4 text-lg font-bold">Дополнительные услуги</h1>
    <excurseItems />
    <div class="form-tour">
      <h1 class="mt-8 mb-4 text-lg font-bold">Примечание к заявке</h1>
      <div class="flex flex-col gap-y-5">
        <input
          placeholder="введите текст"
          class="inp w-full bg-stand rounded p-3 pb-32 focus:outline-0"
        />
        <div class="warn rounded warn-color px-8 py-12">
          Предоплата в размере 30% не позднее 3 раб. дней с момента
          подтверждения;<br />
          Полная оплата стоимости заявки должна быть произведена не позднее 7
          календ. дней до начала тура.
        </div>
        <div class="general flex justify-between gap-y-4">
          <div
            class="flex rounded xl:rounded-none justify-center md:justify-between bl-l"
          >
            <div v-for="general in general">
              <h1
                class="font-bold text-xl lg:text-4xl"
                :style="{ color: general.color }"
              >
                {{ general.title }}
              </h1>
              <p class="p3 text-zero text-xs">{{ general.text }}</p>
            </div>
          </div>
          <Button
            type="secondary py-3 w-33 md:w-60 h-full"
            secondClass="text-lg"
            @click="toForm"
          >
            Оформить
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarTour from "./navbarTour";
import excurseItems from "./excurseItems";

export default {
  components: {
    navbarTour,
    excurseItems,
  },
  head: {
    title: "Внутренные туры",
  },
  data() {
    return {
      liv1: "Гостиница",
      liv2: "Условия проживания",
      liv3: "Транспорт",
      living: "Проживание",
      names: ["adsads", "koma", "zero"],
      general: [
        {
          color: "#333",
          title: "Итоговая цена тура",
          text: "с учотом  количества  туристов ",
        },
        { color: "#E76767", title: "3 963 TJS", text: "доступно 25 мест" },
      ],
      hotel: {
        first: {
          title: "Sultan Cave Suites 3*",
          country: "Турция, Стамбул",
        },
        sec: {
          mark: 4.5,
          state: "Отлично",
          comms: "712 отзывов",
        },
        third: [
          {
            title: "Дата заезда",
            date: "20.10.2021 14:00",
          },
          {
            title: "Дата выезда",
            date: "20.10.2021 12:00",
          },
        ],
        trans: {
          from: "(DYU) Душанбе",
          to: "(IST) Стамбул ",
          data: [
            {
              title: "Дата вылета ",
              text: "20.10.2021 11:00",
            },
            {
              title: "Дата вылета ",
              text: "20.10.2021 11:00",
            },
          ],
          col: {
            title: "Количество пасажиров ",
            countity: 2,
          },
        },
      },

      decis: [
        {
          title: "Номер",
          text: "Стандарт",
        },
        {
          title: "Размещение",
          text: "DBL",
        },
        {
          title: "Питание",
          text: "Завтрак включен",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.excurse.count++;
    },
    toForm() {
      this.$router.push("/OutdoorTours/insideTours/formTours");
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 1265px) {
  .bl-l {
    width: 100%;
  }
  .general {
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .bl-l {
    text-align: center;
  }
  .last-btn {
    width: 100%;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .mob-w-full-bl,
  .sub-top {
    width: 100%;
  }
  .general {
    margin-bottom: 42px;
  }
}
</style>
