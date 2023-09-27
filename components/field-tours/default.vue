<template>
  <div class="field-tours p-5 rounded w-full shadow-3xl">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(onField)"
        class="flex flex-col xl:flex-col gap-y-0 sm:gap-y-6 xl:gap-y-7"
      >
        <div class="hidden sm:flex gap-x-3 flex-wrap xl:flex-nowrap">
          <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
            <div class="w-64">
              <Input
                placeholder="Город"
                label="Откуда"
                :error="errors[0]"
                labelStyle="font-semibold mb-1"
                v-model="from"
              />
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
            <div class="w-64">
              <Input
                placeholder="Страна"
                labelStyle="font-semibold mb-1"
                :error="errors[0]"
                s
                label="Куда"
                v-model="to"
              />
            </div>
          </ValidationProvider>
          <div class="w-56">
            <Select
              label="Тур"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({ url: 'fieldTours', key: 'activeTour', body: $event })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? fieldTours.activeTour
                  : $route.query.tour
              "
              :list="fieldTours.listTour"
            />
          </div>
          <div class="w-24">
            <Select
              label="Валюта"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({ url: 'fieldTours', key: 'activeCur', body: $event })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? fieldTours.activeCur
                  : $route.query.currency
              "
              :list="fieldTours.listCur"
            />
          </div>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="w-52">
              <Input
                label="Цена"
                type="number"
                labelStyle="font-semibold mb-1"
                :error="errors[0]"
                v-model="price"
                placeholder="Цена"
              />
            </div>
          </ValidationProvider>
        </div>
        <div class="hidden sm:flex gap-3 flex-wrap xl:flex-nowrap">
          <div class="w-60">
            <Passenger
              ref="passeng"
              secondClass="bg-stand w-full"
              label="Туристы"
              labelStyle="mb-1"
            />
          </div>
          <ValidationProvider v-slot="{ errors }">
            <div class="w-52">
              <Input
                :error="errors[0]"
                :min="new Date().toISOString().split('T')[0]"
                type="date"
                isbottom="true"
                labelStyle="font-semibold mb-1"
                label="Когда"
                v-model="when"
              />
            </div>
          </ValidationProvider>
          <div class="self-end">
            <Input
              placeholder="30 ночей"
              labelStyle="font-semibold mb-1"
              v-model="nights"
            />
          </div>
          <div class="w-60">
            <Select
              label="Программа"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({
                  url: 'fieldTours',
                  key: 'activeProgram',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? fieldTours.activeProgram
                  : $route.query.program
              "
              :list="fieldTours.listTour"
            />
          </div>
          <div>
            <Select
              label="Класс"
              labelStyle="font-semibold mb-1"
              @changeicon="
                set_data({
                  url: 'fieldTours',
                  key: 'activeClass',
                  body: $event,
                })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? fieldTours.activeClass
                  : $route.query.class
              "
              :list="fieldTours.tourClass"
            />
          </div>
          <div class="self-end w-32">
            <Button type="secondary" secondClass="w-full h-13">{{
              fieldTours.button
            }}</Button>
          </div>
        </div>
        <div class="flex flex-col gap-4 sm:hidden">
          <div class="w-full col-start-1 col-end-4">
            <Select
              @changeicon="
                set_data({ url: 'fieldTours', key: 'activeTour', body: $event })
              "
              secondClass="p-1.5 bg-stand"
              :active="
                Object.keys($route.query).length === 0
                  ? fieldTours.activeTour
                  : $route.query.tour
              "
              :list="fieldTours.listTour"
            />
          </div>
          <div class="grid grid-cols-2 gap-x-4">
            <div class="w-full row-start-6 col-start-1 col-end-2">
              <Select
                @changeicon="
                  set_data({
                    url: 'fieldTours',
                    key: 'activeCur',
                    body: $event,
                  })
                "
                secondClass="p-1.5 bg-stand"
                :active="
                  Object.keys($route.query).length === 0
                    ? fieldTours.activeCur
                    : $route.query.currency
                "
                :list="fieldTours.listCur"
              />
            </div>
            <div class="w-full row-start-6 col-start-2 col-end-4">
              <Passenger secondClass="bg-stand" ref="passeng" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-4">
            <div class="w-full row-start-7 col-start-1 col-end-2">
              <Select
                @changeicon="
                  set_data({
                    url: 'fieldTours',
                    key: 'activeProgram',
                    body: $event,
                  })
                "
                secondClass="p-1.5 bg-stand"
                :active="
                  Object.keys($route.query).length === 0
                    ? fieldTours.activeProgram
                    : $route.query.program
                "
                :list="fieldTours.listTour"
              />
            </div>
            <div class="w-full row-start-7 col-start-2 col-end-4">
              <Select
                @changeicon="
                  set_data({
                    url: 'fieldTours',
                    key: 'activeClass',
                    body: $event,
                  })
                "
                secondClass="p-1.5 bg-stand"
                :active="
                  Object.keys($route.query).length === 0
                    ? fieldTours.activeClass
                    : $route.query.class
                "
                :list="fieldTours.tourClass"
              />
            </div>
          </div>
          <ValidationProvider
            rules="required|alpha_spaces"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="w-full">
              <Input
                placeholder="Откуда"
                secondClass="w-full"
                :error="errors[0]"
                v-model="from"
              />
            </div>
          </ValidationProvider>
          <ValidationProvider
            rules="required|alpha_spaces"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="w-full">
              <Input
                placeholder="Куда"
                secondClass="w-full"
                :error="errors[0]"
                v-model="to"
              />
            </div>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            class="col-start-1 col-end-4"
          >
            <div class="w-full">
              <Input type="number" :error="errors[0]" v-model="price" />
            </div>
          </ValidationProvider>
          <div class="grid grid-cols-2 gap-x-4">
            <ValidationProvider v-slot="{ errors }">
              <div>
                <Input :error="errors[0]" type="date" v-model="when" />
              </div>
            </ValidationProvider>
            <div>
              <Input placeholder="30 ночей" v-model="nights" />
            </div>
          </div>
          <div class="w-full col-start-1 col-end-4">
            <Button type="secondary" secondClass="w-full h-13">{{
              fieldTours.button
            }}</Button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ButtonSec from "../ButtonSec.vue";
export default {
  computed: {
    ...mapState({
      fieldTours: (state) => state.flights.fieldTours,
    }),
  },
  data() {
    return {
      from:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.from,
      to:
        Object.keys(this.$route.query).length === 0 ? "" : this.$route.query.to,
      price:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.price,
      when:
        Object.keys(this.$route.query).length === 0
          ? ""
          : this.$route.query.when,
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
    async onField() {
      this.$router.push(
        `/OutdoorTours/?from=${this.from}&to=${this.to}&tour=${this.fieldTours.activeTour}&currency=${this.fieldTours.activeCur}&price=${this.price}&tourists={}&when=${this.when}&nights=${this.nights}&program=${this.fieldTours.activeProgram}&class=${this.fieldTours.activeClass}&passenger=${this.$refs.passeng.$el.__vue__.allCount}`
      );
    },
  },

  components: { ButtonSec },
};
</script>
<style scoped>
.bg-item {
  background-color: #f0f0f0;
}
</style>
