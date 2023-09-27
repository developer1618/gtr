<template>
  <div class="my-25">
    <h1 class="font-black text-base-4">
      {{ title }}
    </h1>
    <FlightsDefault :multi="true" :flights="flights" class="mt-12 mb-32" />
    <h2 class="font-black text-base-4 mb-12">
      {{ subtitle }}
    </h2>
    <p @click="onAdd(data.button)">{{ data.button }}</p>
    <div class="grid grid-cols-4 gap-6">
      <Card
        v-for="num of 8"
        :key="num"
        type="stocks"
        :src="card.src"
        :list="card.list"
        :promo="card.promo"
        :title="card.title"
        :description="card.description"
      >
      </Card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  head: {
    title: "Авиабилеты",
  },
  computed: {
    ...mapState({
      data: (state) => state.flights.flights,
    }),
  },
  data() {
    return {
      title: "Авиабилеты",
      subtitle: "Популярные направления",
      card: {
        src: "/images/images1.jpg",
        list: "Туры",
        promo: "Акция",
        title: "Белый песок в море",
        description: "Лучшие курорты для отдыха на море в Греции со скидкой!",
      },
    };
  },
  methods: {
    ...mapMutations({
      set_data: "flights/SET_UPDATE",
    }),
    onAdd(value) {
      let payload = {
        example: "flights",
        key: "button",
        body: "123",
      };
      this.set_data(payload);
    },
  },
};
</script>
