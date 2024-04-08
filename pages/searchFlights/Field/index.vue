<template>
  <div class="main shadow-3xl mt-16 px-4 py-10 xl:p-10" :class="secondClass">
    <Cost :isCost="isCost" @onCost="onCost" />
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <h1
          class="font-bold text-base-4 pb-6 mb-6"
          style="border-bottom: 1px solid #f0f0f0"
        >
          {{ formic.title }}
        </h1>
        <div v-for="(form, i) in passenger">
          <h1
            v-if="i > 0"
            class="font-bold text-base-4 pb-6 mt-4"
            style="border-bottom: 1px solid #f0f0f0"
          >
            Пассажир {{ i + 1 }}
          </h1>
          <div class="grid grid-cols-2 gre gap-x-6 gap-y-2 mb-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="mb-2 sm:mb-0">
                <Input
                  class="mt-2"
                  :label="isFlights ? 'Имя по-латински' : 'Имя'"
                  labelStyle="font-medium"
                  type="text"
                  v-model="form.name"
                  :error="errors[0]"
                  placeholder="Например: Sadri"
                />
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="mb-2 sm:mb-0">
                <Input
                  :error="errors[0]"
                  class="mt-2"
                  :label="isFlights ? 'Фамилия по-латински' : 'Фамилия'"
                  labelStyle="font-medium"
                  type="text"
                  v-model="form.surname"
                  placeholder="Например: Mamadziyoev"
                />
              </div>
            </ValidationProvider>
            <!-- <div
            :class="
              isFlights
                ? 'hidden  grid-cols-3 xl:hidden sm:grid col-start-1 gap-x-4 gap-y-2 col-end-3'
                : 'hidden'
            "
          >
            <SelectsBuyFlightTicket
              :active="form.selects.floor.active"
              :variants="form.selects.floor.variants"
              @changeicon="form.selects.floor.active = $event"
            >
              {{ form.selects.floor.label }}
            </SelectsBuyFlightTicket>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div>
                <Input
                  class="mt-2"
                  :error="errors[0]"
                  label="Дата рождения"
                  type="date"
                  labelStyle="font-medium"
                />
              </div>
            </ValidationProvider>

            <SelectsBuyFlightTicket
              :active="form.selects.citizenship.active"
              :variants="form.selects.citizenship.variants"
              @changeicon="form.selects.citizenship.active = $event"
            >
              {{ form.selects.citizenship.label }}
            </SelectsBuyFlightTicket>
          </div> -->
            <SelectsBuyFlightTicket
              ref="gender"
              :class="
                isFlights
                  ? 'adp row-start-3 sm:row-auto'
                  : ' ' + isField
                  ? 'col-start-1 col-end-3 sm:col-auto'
                  : ''
              "
              @changeicon="formic.selects.floor.active = $event"
              :active="formic.selects.floor.active"
              :variants="formic.selects.floor.variants"
            >
              {{ formic.selects.floor.label }}
            </SelectsBuyFlightTicket>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div
                :class="
                  isFlights
                    ? 'adp col-start-1 col-end-3 row-start-4 sm:col-auto sm:row-auto '
                    : ' ' + isField
                    ? 'block  col-start-1 col-end-3 sm:col-auto'
                    : ''
                "
              >
                <Input
                  class="mt-2"
                  :error="errors[0]"
                  label="Дата рождения"
                  type="date"
                  v-model="form.birth"
                  labelStyle="font-medium"
                />
              </div>
            </ValidationProvider>
            <SelectsBuyFlightTicket
              ref="citizen"
              :class="
                isFlights
                  ? 'adp col-start-1 col-end-3 row-start-2 sm:row-auto sm:col-auto'
                  : ' ' + isField
                  ? 'col-start-1 col-end-3 sm:col-auto'
                  : ''
              "
              :active="formic.selects.citizenship.active"
              :variants="formic.selects.citizenship.variants"
              @changeicon="formic.selects.citizenship.active = $event"
            >
              {{ formic.selects.citizenship.label }}
            </SelectsBuyFlightTicket>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <div
                class="mb-2 sm:mb-0"
                :class="
                  isFlights
                    ? 'col-start-1 col-end-3 sm:col-auto'
                    : ' ' + isField
                    ? 'block row-start-5 sm:row-span-4 '
                    : ''
                "
              >
                <Input
                  class="mt-2"
                  label="Номер пасспорта"
                  labelStyle="font-medium"
                  :error="errors[0]"
                  type="text"
                  v-model="form.numPassport"
                  placeholder="Например: AF00010310"
                />
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="mb-2 sm:mb-0" :class="isFlights ? 'block' : 'hidden'">
                <Input
                  class="mt-2"
                  :error="errors[0]"
                  label="Документ действителен до"
                  type="date"
                  v-model="form.docIn"
                  labelStyle="font-medium"
                />
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="mb-2 sm:mb-0" :class="isFlights ? 'block' : 'hidden'">
                <Input
                  class="mt-2"
                  :error="errors[0]"
                  label="Документ выдан"
                  type="date"
                  v-model="form.docRec"
                  labelStyle="font-medium"
                />
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              v-if="i <= 1"
            >
              <div
                class="mb-2 sm:mb-0"
                :class="
                  isFlights
                    ? 'col-start-1 col-end-3 sm:col-auto'
                    : ' ' + isField
                    ? 'col-start-1 col-end-3 sm:col-auto'
                    : ''
                "
              >
                <Input
                  class="mt-2"
                  type="number"
                  label="Номер телефона"
                  labelStyle="font-medium"
                  :error="errors[0]"
                  v-model="form.numPhone"
                  placeholder="Например: +992 933 33 33 33"
                />
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required|email"
              v-slot="{ errors }"
              v-if="i <= 1"
            >
              <div
                class="mb-2 sm:mb-0"
                :class="
                  isFlights
                    ? 'col-start-1 col-end-3 sm:col-auto'
                    : ' ' + isField
                    ? 'col-start-1 col-end-3 sm:col-auto'
                    : ''
                "
              >
                <Input
                  class="mt-2"
                  type="email"
                  label="Электронная почта"
                  labelStyle="font-medium"
                  :error="errors[0]"
                  v-model="form.email"
                  placeholder="Например: yourmail@gmail.com"
                />
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div
          class="flex flex-wrap pt-0 sm:pt-6 sm:flex-nowrap items-center mt-6"
          :class="
            isFlights ? 'justify-between sm:mt-10' : 'justify-end sm:mt-8'
          "
        >
          <div v-show="isFlights" class="mb-4 sm:mb-0"><VacancyCheck /></div>
          <div
            :class="isFlights ? 'flex justify-between gap-x-4 gap-y-2' : ''"
            class="w-full br sm:w-auto"
          >
            <!-- <Button
              :disabled="passenger.length === 9"
              v-show="isFlights"
              type="primary"
              secondClass="px-5"
              @click="addPassenger"
            >
              Добавить пассажира
            </Button> -->
            <Button
              action="submit"
              type="secondary"
              :secondClass="isFlights ? 'w-40 px-9  ' : 'w-40 px-9'"
            >
              Оплатить
            </Button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["secondClass", "isFlights", "isField"],
  computed: {
    ...mapState({
      data: (state) => state.api.data,
    }),
    passenger() {
      let pass = [];
      for (let i = 0; i < this.$route.query.passenger; i++) {
        pass.push({
          numberpass: null,
          name: "",
          surname: "",
          citizen: "",
          birth: "",
          numPassport: null,
          numPhone: null,
          email: null,
          docIn: null,
          docRec: null,
        });
      }
      return pass;
    },
  },
  data() {
    return {
      inn: null,
      isCost: false,

      formic: {
        title: "Заполнения данных",
        selects: {
          floor: {
            label: "Пол",
            active: "Выберите пол",
            variants: [
              {
                value: "Мужской",
              },
              {
                value: "Женский",
              },
            ],
          },
          citizenship: {
            label: "Гражданство",
            active: "Выберите гражданство",
            variants: [],
          },
        },
      },
    };
  },

  methods: {
    ...mapActions({
      get_countries: "api/get_page",
      store: "api/store",
    }),
    onSubmit() {
      this.isCost = true;
    },
    async onCost() {
      await this.$axios
        .post(`https://85.92.110.99:7496/checkFlightOfferPrice/`, {
          data: {
            type: "flight-offers-pricing",
            flightOffers: [JSON.parse(this.$route.query.data)],
          },
        })
        .then((res) => {
          this.$axios
            .post(`https://85.92.110.99:7496/createFlightOrder/ `, {
              data: {
                type: "flight-order",
                flightOffers: [res.data.data.flightOffers[0]],
                travelers: this.passenger.map((pass, id) => {
                  return {
                    id: id + 1,
                    dateOfBirth: pass.birth,
                    name: {
                      firstName: pass.name,
                      lastName: pass.surname,
                    },
                    gender: "MALE",
                    contact: {
                      emailAddress: pass.email,
                      phones: [
                        {
                          deviceType: "MOBILE",
                          countryCallingCode: "992",
                          number: pass.numPhone,
                        },
                      ],
                      documents: [
                        {
                          documentType: "PASSPORT",
                          birthPlace: "Madrid",
                          issuanceLocation: "Madrid",
                          issuanceDate: pass.docRec,
                          number: "00000000",
                          expiryDate: pass.docIn,
                          issuanceCountry: "ES",
                          validityCountry: "ES",
                          nationality: "ES",
                          holder: true,
                        },
                      ],
                    },
                  };
                }),

                remarks: {
                  general: [
                    {
                      subType: "GENERAL_MISCELLANEOUS",
                      text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
                    },
                  ],
                },
                ticketingAgreement: {
                  option: "DELAY_TO_CANCEL",
                  delay: "6D",
                },
                contacts: [
                  {
                    addresseeName: {
                      firstName: "PABLO",
                      lastName: "RODRIGUEZ",
                    },
                    companyName: "INCREIBLE VIAJES",
                    purpose: "STANDARD",
                    phones: [
                      {
                        deviceType: "LANDLINE",
                        countryCallingCode: "34",
                        number: "480080071",
                      },
                      {
                        deviceType: "MOBILE",
                        countryCallingCode: "33",
                        number: "480080072",
                      },
                    ],
                    emailAddress: "support@increibleviajes.es",
                    address: {
                      lines: ["Calle Prado, 16"],
                      postalCode: "28014",
                      cityName: "Madrid",
                      countryCode: "ES",
                    },
                  },
                ],
              },
            })
            .then((res) => {
              if (res.data) {
                this.isCost = false;
                window.location.href = "/";
              }
            });
        });
    },
    async getContries() {
      let payload = {
        request: `/Countries/?limit=10`,
        key: "data",
        body: [],
      };
      await this.get_countries(payload);
      this.formic.selects.citizenship.variants = this.data;
    },
    addPassenger() {
      if (this.passenger.length !== 9) {
        this.passenger.push({
          numberpass: null,
          name: "",
          surname: "",
          citizen: "",
          birth: "",
          numPassport: null,
          numPhone: null,
          email: null,
          docIn: null,
          docRec: null,
        });
      }
    },
  },
  mounted() {
    this.getContries();
  },
};
</script>
<style scoped>
label,
div > label {
  color: #999 !important;
}
.tmp-field {
  grid-row: 3;
}
.main {
  margin: auto;
  width: 80%;
}
@media screen and (max-width: 1280px) {
  .tmp-field {
    grid-row: 2;
  }

  .main {
    margin: 0;
    width: 100% !important;
  }
  .br {
    border-top: 1px solid #dedede;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .tmp-field {
    display: none;
  }
  .adp {
    display: block;
  }
  .br {
    padding-top: 25px;
  }
}
</style>
