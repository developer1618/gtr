<template>
  <div class="pt-5 pb-5 mob-cont">
    <div class="flex gap-2.5 items-center my-6">
      <NuxtLink to="/" class="text-base-1"> Главная </NuxtLink>
      <p class="text-base-1">></p>
      <NuxtLink class="text-base-1" to="/IndoorTours">
        Внутреные туры
      </NuxtLink>
      <p class="text-base-1">></p>
      <p class="text-base-1">Сказочная Каппадокия</p>
    </div>
    <div class="w-full xl:w-4/5 m-auto mt-16 px-4 py-10 xl:p-10 shadow-3xl">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onForm)">
          <h1
            class="font-bold text-base-4 pb-6 mb-6"
            style="border-bottom: 1px solid #f0f0f0"
          >
            Заполнения данных
          </h1>
          <div class="pb-4">
            <h2 class="font-bold text-base pb-4">Турист</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-2 tmp">
              <div v-for="to in dates">
                <ValidationProvider
                  :rules="`required|${to.rule}`"
                  v-slot="{ errors }"
                >
                  <label class="font-semibold text-xs">{{ to.title }}</label>
                  <Input
                    :max="
                      to.id === 2 &&
                      new Date('2005-01-01').toISOString().split('T')[0]
                    "
                    class="mt-2"
                    :type="to.id === 2 ? 'date' : 'text'"
                    v-model="to.text"
                    :placeholder="to.placeholder"
                  />
                  <span class="text-red">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <h2 class="font-bold text-base mt-6 pb-4">Контактная информация</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
              <div v-for="(contact, ind) in contact">
                <ValidationProvider
                  :rules="`required|${contact.rules ? contact.rules : ''}`"
                  v-slot="{ errors }"
                >
                  <Input
                    labelStyle="font-semibold text-xs mb-2"
                    class="mt-2"
                    :error="errors[0]"
                    :label="contact.title"
                    :type="contact.type"
                    v-model="contact.text"
                    :placeholder="contact.placeholder"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div
            class="block sm:flex justify-end items-center mt-5 border-t-1 pt-8"
            style="border-color: #dedede"
          >
            <Button type="secondary" secondClass="w-full px-12">
              Оплатить
            </Button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { ValidationObserver } from "vee-validate";
import ValidationErrors from "~/components/validationErrors.vue";
export default {
  head: {
    title: "Форм тур",
  },
  data() {
    return {
      isCost: true,
      dates: [
        {
          id: 1,
          rule: "alpha_spaces",
          text: "",
          title: "Имя",
          placeholder: "Гриша",
        },
        {
          id: 2,
          text: "",
          rule: "eighteen_years_old",
          title: "Дата рождения",
          placeholder: "дд.мм.гг",
        },
        {
          id: 3,
          text: "",
          rule: "alpha_spaces",
          title: "Фамилия",
          placeholder: "Пет",
        },
      ],
      contact: [
        {
          type: "text",
          text: "",
          title: "Имя",
          placeholder: "Хуршед",
        },
        {
          type: "number",
          text: "",
          title: "Номер телефона",
          placeholder: "+992946564321",
        },
        {
          type: "email",
          rules: "email",
          text: "",
          title: "Электронная почта",
          placeholder: "A23277",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      store: "api/store",
      change_success: "api/change_success",
    }),

    changeFloor(val) {
      this.form.selects.floor.active = val.value;
    },
    changeCitizwnship(val) {
      this.form.selects.citizenship.active = val.value;
    },
    changeDocument(val) {
      this.form.selects.document.active = val.value;
    },
    onForm() {
      this.isCost = true;
    },
    async onForm() {
      try {
        let payload = {
          request: "/IndoorTours/",
          form: {
            name: this.contact[0].text,
            surname: this.dates[2].text,
            tour_name: JSON.parse(this.$route.query.data).tour_name,
            price: JSON.parse(this.$route.query.data).price,
            date_of_birth: this.dates[1].text,
            phone: this.contact[1].text,
            email: this.contact[2].text,
          },
        };
        await this.store(payload);
        this.change_success();
      } catch (err) {
        console.log(err);
      }

      // window.location.href = "/";
    },
  },
  components: { ValidationErrors, ValidationObserver },
  mounted() {
    console.log(Object.keys(this.contact[0]));
  },
};
</script>
<style scoped>
@media screen and (max-width: 1280px) {
  .se {
    display: grid;
  }
  .mob-t {
    padding-left: 12px;
  }
}

@media screen and (min-width: 320px) and (max-width: 680px) {
  .tmp > div:last-child {
    grid-column: 1 / 3;
  }
}
</style>
