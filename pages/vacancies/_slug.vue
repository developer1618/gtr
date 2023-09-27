<template>
  <div class="vacancy mob-cont">
    <div
      class="xl:container md:container sm:container ls 2xl:container mx-auto"
    >
      <div class="py-16">
        <div>
          <img :src="vacancy.img" alt="Images 1" class="h-100 w-full" />
        </div>
        <div class="py-10">
          <h1 class="font-medium text-base-6">
            {{ vacancy.title }}
          </h1>
        </div>
        <div class="flex mob-w gap-9 xl:gap-0">
          <div class="w-full md:w-3/5">
            <div class="flex gap-16 text-base-2.5">
              <div>
                <div class="pb-2">
                  <p class="font-medium">
                    {{ vacancy.deadline.title }}
                  </p>
                </div>
                <div>
                  <p class="font-normal">
                    {{ vacancy.deadline.day }} {{ vacancy.deadline.time }}
                  </p>
                </div>
              </div>
              <div>
                <div class="pb-2">
                  <p class="font-medium">
                    {{ vacancy.region.title }}
                  </p>
                </div>
                <div>
                  <p class="font-normal">
                    {{ vacancy.region.city }} {{ vacancy.region.address }}
                  </p>
                </div>
              </div>
            </div>
            <div class="text-base-2.5 py-10">
              <div class="font-medium pb-6">
                <h2>{{ vacancy.duties.title }}:</h2>
              </div>
              <div>
                <ul
                  class="list-disc ml-4"
                  v-for="(item, index) in vacancy.duties.list"
                  :key="index"
                >
                  <li>
                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-base-2.5 py-10">
              <div class="font-medium pb-6">
                <h2>{{ vacancy.requirements.title }}:</h2>
              </div>
              <div>
                <ul
                  class="list-disc ml-4"
                  v-for="(item, index) in vacancy.requirements.list"
                  :key="index"
                >
                  <li>
                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-base-2.5 py-10">
              <div class="font-medium pb-6">
                <h2>
                  {{ vacancy.conditions.title }}
                </h2>
              </div>
              <div>
                <ul
                  class="list-disc ml-4"
                  v-for="(item, index) in vacancy.conditions.list"
                  :key="index"
                >
                  <li>
                    {{ item.text }}
                  </li>
                </ul>
              </div>
              <div class="flex justify-end">
                <Button
                  @click="showRegistrationForm"
                  type="secondary"
                  secondClass="px-5"
                >
                  {{ vacancy.button }}
                </Button>
              </div>
            </div>
          </div>
          <!-- <div class="w-2/5">
            <div class="w-card ml-auto">
               <div v-for="(item, index) in data" :key="item.id">
                <Card
                  type="news"
                  :myId="item.id"
                  :list="item.deadline"
                  :description="item.vacancy_name"
                  class="mt-6"
                  isVacancy="true"
                />
              </div> 
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <transition name="fade">
      <FormVacancyDefault
        @closeForms="isShowForm = false"
        :form="vacancy.form"
        v-if="isShowForm"
      />
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  head: {
    title: "Вакансии",
  },
  data() {
    return {
      inp: "",
      myDate: null,
      isDisabled: true,
      isEditable: false,
      tasks: [
        {
          id: Date.now(),
          text: "Hello",
          count: 0,
          completed: false,
        },
        {
          id: Date.now(),
          count: 0,
          text: "How",
          completed: true,
        },
        {
          id: Date.now(),
          text: "Are",
          count: 0,

          completed: false,
        },
        {
          id: Date.now(),
          text: "You",
          count: 0,

          completed: true,
        },
      ],
      isShowForm: false,
      vacancy: {
        img: null,
        title: null,
        deadline: {
          title: "Крайний срок подачи анкет",
          day: null,
          time: "",
        },
        region: {
          title: "Регион",
          city: "Душанбе",
          address: "Головной офис",
        },
        duties: {
          title: "Основные обязанности",
          list: [
            {
              text: "Разрабатывает и реализует стратегии продаж продуктов и сервисов в цифровых каналах (включая предодобренные продукты и не финансовые сервисы).",
            },
            {
              text: "Разрабатывает и реализует стратегии продаж продуктов и сервисов в цифровых каналах (включая предодобренные продукты и не финансовые сервисы).",
            },
            {
              text: "Разрабатывает и реализует стратегии продаж продуктов и сервисов в цифровых каналах (включая предодобренные продукты и не финансовые сервисы).",
            },
            {
              text: "Разрабатывает и реализует стратегии продаж продуктов и сервисов в цифровых каналах (включая предодобренные продукты и не финансовые сервисы).",
            },
          ],
        },
        requirements: {
          title: "Требования",
          list: [
            {
              text: "Развивает маркетинговый и продающий функционала в цифровых каналах",
            },
            {
              text: "Развивает маркетинговый  и продающий функционала в цифровых каналах",
            },
            {
              text: "Развивает маркетинговый и продающий функционала в цифровых каналах",
            },
            {
              text: "Развивает маркетинговый и продающий функционала в цифровых каналах",
            },
            {
              text: "Развивает маркетинговый и продающий функционала в цифровых каналах",
            },
          ],
        },
        conditions: {
          title: "Условия",
          list: [
            {
              text: "Управляет жизненным циклом клиентов в цифровых каналах, количеством финансовых и сервисных операций на клиента. Построение клиентского пути для каждого из сегментов клиентов., формирование персональных предложений",
            },
            {
              text: "Управляет жизненным циклом клиентов в цифровых каналах, количеством финансовых и сервисных операций на клиента. Построение клиентского пути для каждого из сегментов клиентов., формирование персональных предложений",
            },
            {
              text: "Управляет жизненным циклом клиентов в цифровых каналах, количеством финансовых и сервисных операций на клиента. Построение клиентского пути для каждого из сегментов клиентов., формирование персональных предложений",
            },
          ],
        },
        button: "Откликнуться на вакансию",
        card: [
          {
            data: "15 сентября 2021",
            title: "Руководитель направления цифровых CRM продаж",
          },
          {
            data: "16 сентября 2021",
            title: "Руководитель направления цифровых CRM продаж",
          },
          {
            data: "17 сентября 2021",
            title: "Руководитель направления цифровых CRM продаж",
          },
          {
            data: "18 сентября 2021",
            title: "Руководитель направления цифровых CRM продаж",
          },
          {
            data: "18 сентября 2021",
            title: "Руководитель направления цифровых CRM продаж",
          },
        ],
        form: {
          surname: "Фамилия*",
          name: "Имя*",
          phone: "Телефон",
          email: "Почта",
          text: "Я согласен(-на) с условиями",
          link: "обработки персональных данных",
          button: "Отправить анкету",
        },
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
    async getVacancies() {
      let payload = {
        request: `/Vacancies/${this.$route.params.slug}`,
        key: "data",
        body: [],
      };
      await this.get_news(payload);
      this.vacancy.img = this.data.image;
      this.vacancy.title = this.data.vacancy_name;
      this.vacancy.deadline.day = this.data.deadline;
    },
    showRegistrationForm() {
      this.isShowForm = !this.isShowForm;
    },
  },
  mounted() {
    this.getVacancies();
  },
};
</script>
<style scoped>
.test {
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 1020px) {
  .mob-w {
    font-size: 14px;
  }
  .mob-w > div,
  .card {
    width: 100%;
  }
  .w-card {
    width: 100%;
    margin-left: 0;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .mob-w {
    width: 100%;
    flex-direction: column;
  }
  .wr-2 {
    width: 100%;
  }
  .w-card {
    width: auto;
  }
  img {
    object-fit: contain;
    height: auto;
  }
  .zer-2 {
    padding: 0px 15px;
  }
}
</style>
