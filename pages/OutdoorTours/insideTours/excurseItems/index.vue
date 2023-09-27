<template>
  <div class="excurse-list py-8 w-full rounded shadow-3xl my-14 bg-white">
    <div class="parent px-9">
      <div
        class="child flex-wrap py-4 relative flex justify-between items-center mb-9"
        v-for="(to, i) in posts"
        :key="i"
      >
        <div>{{ to.text }}</div>
        <div>{{ to.date }}</div>
        <div class="hidden sm:block">{{ to.col }}</div>
        <div class="hidden sm:block">
          {{ to.price }} {{ to.price === "Цена" ? "" : "USD" }}
        </div>
        <div class="flex sm:hidden gap-x-1 mt-3" style="color: #666">
          <div>{{ to.price }} {{ to.price === "Цена" ? "" : "USD" }}</div>
          *
          <div>{{ to.col }}</div>
        </div>
        <Button
          v-show="to.isButton"
          type="secondary"
          secondClass="px-2 xl:px-6"
          @click="addPrice(to)"
          :class="`${to.id === 1 && 'invisible'} mob-button`"
          >{{ to.button }}</Button
        >
        <Button
          v-show="!to.isButton"
          @click="addPrice(to)"
          secondClass="px-2 xl:px-8"
          class="rounded mob-button del text-white"
          >Удалить</Button
        >
      </div>
      <div class="text-center text-zero cursor-pointer">
        Смотреть все экскурсии
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: ["Название", "Даты", "Количество", "Цена", "dgedaads"],
      posts: [
        {
          id: 1,
          text: "Название",
          date: "Даты",
          col: "Количество",
          price: "Цена",
          button: "Добавить",
          isButton: true,
        },
        {
          id: Date.now(),
          text: "Экскурсия: EG: Al Fredo ( sea trip )",
          date: "20.10.2021 - 20.10.2021",
          col: 2,
          price: 160,
          button: "Добавить",
          isButton: true,
        },
        {
          id: Date.now(),
          text: "Экскурсия: EG: Al Fredo ( sea trip )",
          date: "20.10.2021 - 20.10.2021",
          col: 2,
          price: 160,
          button: "Добавить",
          isButton: true,
        },
        {
          id: Date.now(),
          text: "Экскурсия: EG: Al Fredo ( sea trip )",
          date: "20.10.2021 - 20.10.2021",
          col: 2,
          price: 160,
          button: "Добавить",
          isButton: true,
        },
        {
          id: Date.now(),
          text: "Экскурсия: EG: Al Fredo ( sea trip )",
          date: "20.10.2021 - 20.10.2021",
          col: 2,
          price: 160,
          button: "Добавить",
          isButton: true,
        },
        {
          id: Date.now(),
          text: "Экскурсия: EG: Al Fredo ( sea trip )",
          date: "20.10.2021 - 20.10.2021",
          col: 2,
          price: 160,
          button: "Добавить",
          isButton: true,
        },
      ],
    };
  },
  methods: {
    addPrice(ind) {
      ind.isButton = !ind.isButton;
      if (ind.isButton) {
        ind.price -= 60;
        ind.col--;
      } else {
        ind.price += 60;
        ind.col++;
      }
    },
  },
  computed: {
    allPrice() {
      return this.posts.reduce(acc, (tmp) => acc + tmp);
    },
  },
};
</script>
<style scoped>
.del {
  background: #ee3046;
}
.del:hover {
  background: #fd4a55;
}

.parent > .child:first-child div {
  font-weight: bold;
  font-size: 22px;
}
.parent > .child:first-child div:first-child {
  width: 200px;
}

.parent > .child:first-child div:nth-child(2),
.parent > .child:first-child div:nth-child(3) {
  width: 150px;
  text-align: right;
}

.parent > .child:not(:last-child)::after {
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  bottom: -20px;
  height: 0px;
  border: 1px solid #e5e7eb;
}
@media screen and (max-width: 920px) {
  .butt {
    display: none;
  }
  .parent,
  .child > div {
    font-size: 14px;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .parent > div:first-child {
    display: none;
  }
  .child > div:first-child {
    font-weight: 680;
    margin-bottom: 12px;
  }
  .child > div:nth-child(2) {
    width: 100%;
    color: #666;
  }
  .mob-button {
    margin-top: 12px;
  }
  .mob-w-full {
    width: 100%;
    text-align: center;
  }
  div,
  h1,
  h2,
  h3,
  p {
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
  }
  .excurse-list {
    padding: 1rem;
  }
  .excurse-list div > div:nth-child(3) {
    text-align: center;
  }
  .excurse-list h1 {
    text-align: center;
  }
}
</style>
