<template>
  <div class="shadow-3xl p-5 rounded w-full">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(onDomestic)"
        class="flex flex-col xl:flex-col gap-y-0 sm:gap-y-6 xl:gap-y-7"
      >
        <div class="hidden sm:flex gap-3">
          <ValidationProvider v-slot="{ errors }" rules="required|alpha_spaces">
            <div class="w-64">
              <Input
                :label="errors[0]"
                label="Город"
                :error="errors[0]"
                placeholder="Город"
                labelStyle="font-semibold mb-1"
                v-model="city"
              />
            </div>
          </ValidationProvider>
          <div class="w-56">
            <Select
              label="Тур"
              labelStyle="font-semibold mb-1"
              secondClass="p-1.5 bg-stand"
              @changeicon="
                set_data({
                  url: 'domesticTours',
                  key: 'activeTour',
                  body: $event,
                })
              "
              :active="
                Object.keys($route.query).length === 0
                  ? domesticTours.activeTour
                  : $route.query.tours
              "
              :list="domesticTours.listTour"
            />
          </div>
          <div>
            <Select
              label="Валюта"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({
                  url: 'domesticTours',
                  key: 'activeCur',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? domesticTours.activeCur
                  : $route.query.currency
              "
              :list="domesticTours.listCur"
            />
          </div>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="w-64">
              <Input
                :error="errors[0]"
                type="text"
                label="Цена"
                placeholder="Цена"
                labelStyle="font-semibold mb-1"
                v-model="price"
                secondClass="w-52 "
              />
            </div>
          </ValidationProvider>
        </div>

        <div class="hidden sm:flex gap-3 flex-nowrap xl:flex-wrap">
          <div class="w-60">
            <Select
              label="Программа"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({
                  url: 'domesticTours',
                  key: 'activeProgram',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand "
              :active="
                Object.keys($route.query).length === 0
                  ? domesticTours.activeProgram
                  : $route.query.program
              "
              :list="domesticTours.listProgram"
            />
          </div>
          <div class="w-64">
            <Passenger
              secondClass="bg-stand"
              label="Туристы"
              labelStyle="mb-1"
            />
          </div>
          <ValidationProvider v-slot="{ errors }">
            <div class="w-60 xl:w-52">
              <Input
                :error="errors[0]"
                type="date"
                :min="new Date().toISOString().split('T')[0]"
                isbottom="true"
                label="Когда"
                v-model="when"
                labelStyle="font-semibold mb-1"
              />
            </div>
          </ValidationProvider>
          <div class="self-end w-32">
            <Button type="secondary" secondClass="w-full h-13">{{
              domesticTours.button
            }}</Button>
          </div>
        </div>
        <div class="flex flex-col gap-4 sm:hidden">
          <div class="w-full col-start-1 col-end-4">
            <Select
              secondClass="p-1.5 bg-stand"
              @changeicon="
                set_data({
                  url: 'domesticTours',
                  key: 'activeTour',
                  body: $event,
                })
              "
              :active="
                Object.keys($route.query).length === 0
                  ? domesticTours.activeTour
                  : $route.query.tours
              "
              :list="domesticTours.listTour"
            />
          </div>
          <div class="grid grid-cols-2 gap-x-4">
            <div class="w-full col-start-1 col-end-2 row-start-5">
              <Select
                @changeicon="
                  set_data({
                    url: 'domesticTours',
                    key: 'activeCur',
                    body: $event,
                  })
                "
                secondClass="p-1.5 bg-stand"
                :active="
                  Object.keys($route.query).length === 0
                    ? domesticTours.activeCur
                    : $route.query.currency
                "
                :list="domesticTours.listCur"
              />
            </div>
            <div class="w-full col-start-2 col-end-4 row-start-5">
              <Passenger secondClass="bg-stand" />
            </div>
          </div>
          <div class="w-full col-start-1 col-end-4">
            <Select
              @changeicon="
                set_data({
                  url: 'domesticTours',
                  key: 'activeProgram',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? domesticTours.activeProgram
                  : $route.query.program
              "
              :list="domesticTours.listProgram"
            />
          </div>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="w-full col-start-1 col-end-4">
              <Input placeholder="Город" :error="errors[0]" v-model="city" />
            </div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="w-full col-start-1 col-end-4">
              <Input
                type="number"
                :error="errors[0]"
                placeholder="Цена"
                v-model="price"
                secondClass="w-52 sm:w-full"
              />
            </div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }">
            <div class="w-full col-start-1 col-end-4">
              <Input
                type="date"
                isbottom="true"
                :error="errors[0]"
                v-model="when"
              />
            </div>
          </ValidationProvider>
          <div class="w-full col-start-1 col-end-4">
            <Button
              type="secondary"
              action="submit"
              secondClass="w-full h-13"
              >{{ domesticTours.button }}</Button
            >
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ButtonSec from "../ButtonSec.vue";
import Passenger from "../Passenger.vue";
export default {
  computed: {
    ...mapState({
      domesticTours: (state) => state.flights.domesticTours,
    }),
  },
  data() {
    return {
      city:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.city,
      when:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.when,
      price:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.price,
    };
  },
  methods: {
    ...mapMutations({
      set_data: "flights/SET_UPDATE",
    }),
    ...mapActions({
      get_page: "api/get_page",
    }),
    async onDomestic() {
      this.$router.push(
        `/IndoorTours/?city=${this.city}&tours=${this.domesticTours.activeTour}&currency=${this.domesticTours.activeCur}&price=${this.price}&program=${this.domesticTours.activeProgram}&tourist=${this.domesticTours.activeTourist}&when=${this.when}`
      );
    },
  },

  components: { ButtonSec, Passenger },
};
</script>
<style scoped>
.bg-item {
  background-color: #f0f0f0;
}
</style>
