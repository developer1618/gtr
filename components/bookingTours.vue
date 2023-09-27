<template>
  <div class="block mb-14">
    <div v-if="isTours === 1">
      <Flights mult="1" />
    </div>
    <div v-if="isTours === 2">
      <Hotels />
    </div>

    <div v-if="isTours === 3">
      <FieldTours />
    </div>
    <div v-if="isTours === 4">
      <DomesticTours />
    </div>
  </div>
</template>
<script>
import Flights from "~/components/Flights/default.vue";
import Hotels from "~/components/Hotels/default.vue";
import FieldTours from "~/components/field-tours/default.vue";
import DomesticTours from "~/components/domestic-tours/default.vue";
export default {
  props: ["isTours"],

  methods: {
    onArrow() {},
  },
  components: { Flights, Hotels, DomesticTours, FieldTours },
};
</script>
<style scoped>
.stand {
  background-color: #f0f0f0;
  padding: 6px 0px;
}

input {
  width: 100px;
}
select {
  user-select: none;
}
h2 {
  margin-bottom: 10px;
}
.block-bottom div {
  margin-right: 2px;
}
.inp__mod {
  width: 110px;
}

@media screen and (max-width: 430px) {
  .inp__mod {
    margin: 10px 0px;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .stand {
    width: 100%;
  }

  .block-item > div {
    margin-bottom: 12px;
  }
}
@media screen and (max-width: 432px) {
}
</style>
