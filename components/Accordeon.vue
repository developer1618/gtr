<template>
  <div>
    <Select
      secondClass="bg-white h-13 shadow-3xl"
      :list="price"
      :active="selectedPrice"
      @changeicon="selectedPrice = $event"
    />
  </div>
  <!-- <div
    v-click-outside="hide"
    class="accord shadow-3xl px-3 text-center rounded cursor-pointer relative py-3"
    @click="isShowItemList = !isShowItemList"
  >
    <div class="flex w-full h-full justify-between gap-12 items-center">
      <p class="whitespace-nowrap">
        {{ selectedPrice }}
      </p>
      <div>
        <img
          v-if="!isShowItemList"
          src="/images/icons/arrowDown.svg"
          alt="Arrow Down"
        />
        <img
          v-if="isShowItemList"
          src="/images/icons/arrowUp.svg"
          alt="Arrow Up"
        />
      </div>
      <div v-if="isShowItemList" class="main-list w-full z-50 bg-white">
        <ul>
          <li
            v-for="(item, index) in price"
            @click="change(item)"
            :key="index"
            class="py-2 hover:text-blue w-full"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      price: [
        {
          value: "Сначала рекомендуемые",
        },
        {
          value: "Сначала дешевые",
        },
        {
          value: "Время вылета",
        },
        {
          value: "Длительность пересадок",
        },
        {
          value: "Длительность поездки",
        },
        {
          value: "Рейтинг",
        },
      ],
      selectedPrice: "Сортировка по цене",
      isShowItemList: false,
    };
  },
  methods: {
    hide() {
      this.isShowItemList = false;
    },
    change(item) {
      this.selectedPrice = item.value;
    },
  },
};
</script>

<style scoped>
.accord {
  width: 250px;
  background-color: white;
  float: right;
}
.accord:hover {
  background-color: #ffba0f;
}
.main-list {
  position: absolute;
  top: 45px;
  left: 0;
}
@media screen and (max-width: 680px) {
  .accord {
    background-color: transparent;
    box-shadow: none;
  }
}
</style>
