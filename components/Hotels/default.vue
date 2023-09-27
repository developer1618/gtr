<template>
  <div class="hotels p-5 shadow-3xl rounded bg-white">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(onHotel)"
        class="flex flex-col gap-y-0 sm:gap-y-6 xl:gap-y-7"
      >
        <div class="hidden gap-4 sm:flex sm:gap-3">
          <ValidationProvider
            rules="required|alpha_spaces"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="w-full col-start-1 col-end-4 sm:w-52 xl:w-64">
              <Input
                labelStyle="hidden sm:block font-semibold mb-1"
                label="Куда"
                placeholder="Куда"
                :error="errors[0]"
                er="ОАЭ, Дубай"
                v-model="from"
              />
            </div>
          </ValidationProvider>

          <div class="col-start-1 col-end-2 w-full sm:w-52 xl:w-64">
            <Passenger
              ref="passeng"
              label="Номер"
              labelStyle="hidden sm:block mb-1"
              v-model="number"
            />
          </div>
          <div class="w-full col-start-2 col-end-4 sm:w-24">
            <Select
              labelStyle="hidden sm:block font-semibold mb-1"
              secondClass="bg-stand p-1.5 h-13 "
              label="Валюта"
              @changeicon="
                set_data({
                  url: 'hotels',
                  key: 'activeCurrencies',
                  body: $event,
                })
              "
              :active="
                Object.keys($route.query).length === 0
                  ? hotels.activeCurrencies
                  : hotels.activeCurrencies
              "
              :list="hotels.currencies"
            />
          </div>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="mb-4 sm:mb-0 col-start-1 col-end-4 sm:w-52">
              <Input
                type="number"
                :error="errors[0]"
                label="Цена"
                labelStyle="hidden sm:block font-semibold mb-1"
                v-model="price"
                placeholder="От 500 "
              />
            </div>
          </ValidationProvider>
        </div>
        <div class="flex flex-col gap-4 sm:hidden">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="w-full col-start-1 col-end-4 sm:w-52 xl:w-64">
              <Input
                labelStyle="hidden sm:block font-semibold mb-1"
                rules="required|min:3"
                label="Куда"
                :error="errors[0]"
                placeholder="Куда"
                er="ОАЭ, Дубай"
                v-model="from"
              />
            </div>
          </ValidationProvider>
          <div class="grid grid-cols-2 gap-x-4">
            <div class="col-start-1 col-end-2 w-full sm:w-52 xl:w-64">
              <Passenger
                ref="passeng"
                label="Номер"
                labelStyle="hidden sm:block mb-1"
                v-model="number"
              />
            </div>
            <div class="w-full col-start-2 col-end-4 sm:w-24">
              <Select
                labelStyle="hidden sm:block font-semibold mb-1"
                secondClass="bg-stand p-1.5 h-13 "
                label="Валюта"
                @changeicon="
                  set_data({
                    url: 'hotels',
                    key: 'activeCurrencies',
                    body: $event,
                  })
                "
                :active="
                  Object.keys($route.query).length === 0
                    ? hotels.activeCurrencies
                    : hotels.activeCurrencies
                "
                :list="hotels.currencies"
              />
            </div>
          </div>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="mb-4 sm:mb-0 col-start-1 col-end-4 sm:w-52">
              <Input
                type="number"
                :error="errors[0]"
                label="Цена"
                labelStyle="hidden sm:block font-semibold mb-1"
                v-model="price"
                placeholder="От 500 | До 5000"
              />
            </div>
          </ValidationProvider>
        </div>

        <div class="hidden sm:flex flex-wrap items-end xl:flex-nowrap gap-3">
          <ValidationProvider v-slot="{ errors }" class="col-start-1 col-end-4">
            <div class="w-full sm:w-40 xl:w-52">
              <Input
                type="date"
                :min="new Date().toISOString().split('T')[0]"
                isbottom="true"
                :error="errors[0]"
                labelStyle="hidden sm:block font-semibold mb-1"
                label="Заезд"
                v-model="income"
              />
            </div>
          </ValidationProvider>

          <div
            class="w-full sm:w-24 block sm:hidden xl:block col-start-1 col-end-2"
          >
            <div class="bg-stand py-3.5 text-center rounded">
              {{
                outcome && income
                  ? Math.ceil(
                      (new Date(outcome) - new Date(income)) /
                        (1000 * 3600 * 24)
                    )
                  : ""
              }}
              ночей
            </div>
          </div>
          <ValidationProvider v-slot="{ errors }" class="col-start-2 col-end-4">
            <div class="w-full sm:w-40 xl:w-52">
              <Input
                type="date"
                :min="income || new Date().toISOString().split('T')[0]"
                isbottom="true"
                labelStyle="hidden sm:block font-semibold mb-1"
                v-model="outcome"
                label="Выезд"
                :error="errors[0]"
              />
            </div>
          </ValidationProvider>
          <div class="w-full col-start-1 col-end-2 sm:w-40 self-start">
            <Select
              labelStyle="hidden sm:block font-semibold mb-1"
              label="Класс отеля"
              @changeicon="
                set_data({ url: 'hotels', key: 'activeClass', body: $event })
              "
              secondClass="p-1.5 bg-stand h-13 w-full sm:w-40	"
              :active="hotels.activeClass"
              :list="hotels.class"
            />
          </div>
          <div class="w-full col-start-2 col-end-4 sm:w-52 self-start">
            <Select
              labelStyle="hidden sm:block font-semibold mb-1"
              label="Питание"
              @changeicon="
                set_data({ url: 'hotels', key: 'programActive', body: $event })
              "
              secondClass="p-1.5 bg-stand h-13"
              :active="hotels.programActive"
              :list="hotels.nutrition"
            />
          </div>
          <div class="w-full col-start-1 col-end-4 sm:w-auto">
            <Button
              type="secondary"
              secondClass="px-9 w-full  sm:w-auto h-13 block"
              >{{ hotels.button }}</Button
            >
          </div>
        </div>
        <div class="flex flex-col sm:hidden gap-4">
          <ValidationProvider v-slot="{ errors }" class="col-start-1 col-end-4">
            <div class="w-full sm:w-40 xl:w-52">
              <Input type="date" :error="errors[0]" v-model="income" />
            </div>
          </ValidationProvider>
          <!-- <div class="grid grid-cols-2 gap-x-4">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              class="block sm:hidden xl:block col-start-1 col-end-2"
            >
              <div class="w-full sm:w-24">
                <div class="bg-stand py-3.5 text-center rounded">
                  {{
                    outcome !== "" && income !== ""
                      ? Math.ceil(
                          (new Date(outcome) - new Date(income)) /
                            (1000 * 3600 * 24)
                        )
                      : ""
                  }}
                  ночей
                </div>
              </div>
              <span class="text-red">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              class="col-start-2 col-end-4"
            >
              <div class="w-full sm:w-40 xl:w-52">
                <Input type="date" v-model="outcome" :error="errors[0]" />
              </div>
            </ValidationProvider>
          </div>
          <div class="grid grid-cols-2 gap-x-4">
            <div class="w-full col-start-1 col-end-2 sm:w-36 self-start mr-3">
              <Select
                @changeicon="
                  set_data({ url: 'hotels', key: 'activeClass', body: $event })
                "
                secondClass="p-1.5 bg-stand h-13 w-full sm:w-40	"
                :active="hotels.activeClass"
                :list="hotels.class"
              />
            </div>
            <div class="w-full col-start-2 col-end-4 sm:w-52 self-start">
              <Select
                @changeicon="
                  set_data({
                    url: 'hotels',
                    key: 'programActive',
                    body: $event,
                  })
                "
                secondClass="p-1.5 bg-stand h-13"
                :active="hotels.programActive"
                :list="hotels.nutrition"
              />
            </div>
          </div> -->
          <div class="w-full col-start-1 col-end-4 sm:w-auto">
            <Button
              type="secondary"
              secondClass="px-9 w-full  sm:w-auto h-13 block"
              >{{ hotels.button }}</Button
            >
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ValidationErrors from "../validationErrors.vue";
export default {
  computed: {
    ...mapState({
      hotels: (state) => state.flights.hotels,
    }),
  },
  data() {
    return {
      from:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.from,
      number:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.number,
      price:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.price,
      outcome:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.outcome,
      income:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.income,
      nights:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.nights,
    };
  },
  methods: {
    ...mapMutations({
      set_data: "flights/SET_UPDATE",
    }),
    ...mapActions({
      get_page: "api/get_page",
    }),
    async onHotel() {
      this.$router.push(
        `/searchHotels/?from=${this.from}&number=${this.number}&currency=${this.hotels.activeCurrencies}&price=${this.price}&income=${this.income}&nights=${this.nights}&outcome=${this.outcome}&class=${this.hotels.activeClass}&food=${this.hotels.programActive}&passenger=${this.$refs.passeng.$el.__vue__.allCount}`
      );
    },
  },
  watch: {
    income() {
      this.outcome = null;
    },
  },
  components: { ValidationErrors },
};
</script>
<style scoped>
.bg-stand {
  background-color: #f0f0f0;
}
.s .hotels {
  box-shadow: 0 20px 120px 15px rgba(0, 0, 0, 0.05);
}
</style>
