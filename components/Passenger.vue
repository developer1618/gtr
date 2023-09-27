<template>
  <div class="relative select-none h-13">
    <div v-if="label" :class="labelStyle">
      <label class="relative font-semibold">{{ label }}</label>
    </div>
    <div
      v-click-outside="func"
      @click="toggle()"
      :class="
        isOpened
          ? 'bg-yellow-1'
          : 'bg-stand hover:bg-yellow-2' + ' ' + secondClass
      "
      class="flex justify-between stand px-3 xl:px-5 items-center gap-3 h-full rounded cursor-pointer"
    >
      <div v-if="src">
        <img :src="src" class="w-3.5 h-3.5" />
      </div>
      <div>
        {{ activeItem || active }}
      </div>
      <img
        v-if="!isOpened"
        src="/images/icons/arrowDown.svg"
        alt="Arrow Down"
      />
      <img v-else src="/images/icons/arrowUp.svg" alt="Arrow Up" />
    </div>
    <div id="mod" v-if="isOpened" class="absolute variants py-2 w-max bg-white">
      <ul class="px-2 py-3">
        <li class="mb-2">
          <p class="px-2 max-w-0 font-medium" id="mod" style="color: #222b45">
            Укажите точное количество пассажиров <br />
            чтобы получить лучшую цену.
          </p>
        </li>
        <li
          style="font-size: 15px"
          class="py-1 px-2 flex justify-between gap-x-4"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="flex gap-2 items-center flex-wrap">
            <span class="text-zero">
              {{ item.text }}
            </span>
            <span class="text-zeroTwo text-xs" v-if="item.span">{{
              item.span
            }}</span>
          </div>
          <div class="relative flex gap-x-4 items-center" style="width: 100px">
            <div
              class="relative"
              :data-attr="item.promptMin"
              :id="item.promptMin && item.isDisabledMinus ? 'min' : ''"
            >
              <button
                type="button"
                style="border: none"
                :class="`${
                  item.isDisabledMinus
                    ? 'pointer-events-none cursor-auto'
                    : 'cursor-pointer'
                } flex items-center justify-center`"
                @click="min(item)"
                :disabled="item.isDisabledMinus"
              >
                <svg
                  class="min"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 5H7.5C5.84315 5 4.5 6.34315 4.5 8V29C4.5 30.6569 5.84315 32 7.5 32H28.5C30.1569 32 31.5 30.6569 31.5 29V8C31.5 6.34315 30.1569 5 28.5 5Z"
                    :stroke="item.isDisabledMinus ? '#E4E9F2' : '#FFBA0F'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.5H24"
                    :stroke="item.isDisabledMinus ? '#E4E9F2' : '#FFBA0F'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <span>{{ item.count }}</span>
            <div
              class="relative"
              :data-attr="item.promptPlus"
              :id="item.promptPlus && item.isDisabledPlus ? 'min' : ''"
            >
              <button
                type="button"
                @click="add(item)"
                :disabled="item.isDisabledPlus"
                :class="`${
                  item.isDisabledPlus ? 'cursor-auto' : 'cursor-pointer'
                } flex items-center justify-center`"
              >
                <svg
                  class="min pointer-events-none"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 5H7.5C5.84315 5 4.5 6.34315 4.5 8V29C4.5 30.6569 5.84315 32 7.5 32H28.5C30.1569 32 31.5 30.6569 31.5 29V8C31.5 6.34315 30.1569 5 28.5 5Z"
                    :stroke="item.isDisabledPlus ? '#E4E9F2' : '#FFBA0F'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 12.5V24.5"
                    :stroke="item.isDisabledPlus ? '#E4E9F2' : '#FFBA0F'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.5H24"
                    :stroke="item.isDisabledPlus ? '#E4E9F2' : '#FFBA0F'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li class="flex justify-end px-2 mt-6" id="mod">
          <div
            class="ready cursor-pointer hover:underline"
            @click="isOpened = false"
          >
            Готово
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "src",
    "secondClass",
    "activeItem",
    "label",
    "labelStyle",
    "secondClass",
  ],
  data() {
    return {
      persons: "взрослый",
      isOpened: false,
      value: "",
      show: false,
      allCount:
        Object.keys(this.$route.query).length === 0
          ? 1
          : this.$route.query.passenger,
      list: [
        {
          id: 1,
          count: 1,
          isPrompt: false,
          promptMin:
            "Если вы хотите забронировать детский или младенческий билет отдельно, свяжитесь с нашей службой поддержки. ",
          isDisabledMinus: true,
          isDisabledPlus: false,
          text: "Взрослые",
        },
        {
          id: 2,
          count: 0,
          isPrompt: false,
          promptPlus: "Один взрослый может сопровождать не более двоих детей",
          isDisabledMinus: true,
          isDisabledPlus: false,
          text: "Дети",
          span: "2 – 11 лет",
        },
        {
          id: 3,
          count: 0,
          isPrompt: false,
          promptPlus: "Один взрослый может сопровождать не более 1 младенца",
          isDisabledMinus: true,
          isDisabledPlus: false,
          text: "Младенцы",
          span: "(без места)",
        },
      ],
    };
  },
  methods: {
    func({ target }) {
      try {
        let __mod = document.getElementById("mod");
        let isClickInside = __mod.contains(target);
        if (!isClickInside) {
          this.isOpened = false;
        }
      } catch (e) {
        return;
      }
    },
    toggle() {
      this.isOpened = !this.isOpened;
    },
    hide() {
      this.isOpened = false;
    },
    onOver(ind) {
      if (ind.isDisabledMinus || ind.isDisabledPlus) {
        setTimeout(() => {
          ind.isPrompt = true;
        }, 300);
      }
    },
    onLeave(ind) {
      ind.isDisabledMinus && (ind.isPrompt = false);
    },
    add(ind) {
      ind.count++;
      ind.count >= 1 && (ind.isDisabledMinus = false);

      if (this.list[0].count === 1 && ind.id === 2 && ind.count > 2) {
        ind.isDisabledPlus = true;
      }
      if (
        this.list[0].count === 1 &&
        this.list[1].count === 0 &&
        this.list[2].count === 0
      ) {
        this.persons = "взрослый";
      } else if (
        this.list[0].count > 1 &&
        this.list[1].count === 0 &&
        this.list[2].count === 0
      ) {
        this.persons = "взрослых";
      }
      this.allCount++;
      if (
        this.list[0].count >= 1 &&
        this.list[1].count === 0 &&
        this.list[2].count === 0
      ) {
        this.persons = "взрослых";
      }
      (ind.id === 2 || ind.id === 3) && (this.persons = "пассажиров");
      this.allCount >= 12
        ? this.list.map((el) => {
            el.isDisabledPlus = true;
            el.promptPlus =
              "Не более 12 пассажиров в одном бронировании.Если вам  необходимо заказать большее количество билетов,оформите еще одно бронирование.";
          })
        : this.list.map((el) => {
            el.isDisabledPlus = false;
          });
      if (this.allCount != 12) {
        this.list[1].promptPlus =
          "Один взрослый может сопровождать не более двоих детей";
        this.list[2].promptPlus =
          "Один взрослый может сопровождать не более 1 младенца";
      }
      if (this.list[0].count === 1 && this.list[1].count >= 2)
        this.list[1].isDisabledPlus = true;
      if (this.list[0].count === 1 && this.list[2].count >= 1)
        this.list[2].isDisabledPlus = true;
      this.list[0].promptMin = "adsadads";
      if (this.list[0].count === 2 && this.list[1].count >= 4)
        this.list[1].isDisabledPlus = true;
      this.list[0].promptMin =
        "Один взрослый может сопровождать не более двоих детей";
      if (this.list[0].count === 2 && this.list[2].count >= 2)
        this.list[2].isDisabledPlus = true;
      if (this.list[0].count === 2 && this.list[1].count >= 4)
        this.list[0].isDisabledMinus = true;
      if (this.list[0].count === 2 && this.list[2].count >= 2)
        this.list[2].isDisabledPlus = true;
      if (this.list[0].count === 2 && this.list[2].count >= 2)
        this.list[2].isDisabledPlus = true;
    },

    min(ind) {
      ind.count--;
      this.allCount--;
      if (this.allCount < 12)
        this.list.map((el) => (el.isDisabledPlus = false));
      if (
        this.list[0].count === 1 &&
        this.list[1].count === 0 &&
        this.list[2].count === 0
      ) {
        this.persons = "взрослый";
      }
      if (
        this.list[0].count > 1 &&
        this.list[1].count === 0 &&
        this.list[2].count === 0
      ) {
        this.persons = "взрослых";
      }
      if (
        this.list[0].count >= 1 &&
        this.list[1].count > 0 &&
        this.list[2].count > 0
      ) {
        this.persons = "пассажир";
      }
      if (ind.id === 1 && ind.count <= 1) ind.isDisabledMinus = true;
      ind.count <= 0 && (ind.isDisabledMinus = true);
      if (this.list[0].count === 2 && this.list[1].count >= 1)
        this.list[0].isDisabledMinus = false;
      if (this.list[0].count === 1)
        this.list[0].promptMin =
          "Если вы хотите забронировать детский или младенческий билет отдельно, свяжитесь с нашей службой поддержки.";
      if (this.list[0].count === 2 && this.list[1].count >= 3)
        this.list[0].isDisabledMinus = true;
      if (this.list[0].count === 1 && this.list[1].count >= 2)
        this.list[1].isDisabledPlus = true;
      if (this.list[0].count === 2 && this.list[2].count >= 2)
        this.list[2].isDisabledPlus = true;
    },
  },
  computed: {
    active() {
      return `${this.allCount} ${this.persons} `;
    },
  },

  directives: {
    name: "ClickOutside",
  },
};
</script>
<style scoped>
#min::before {
  box-shadow: 20px 20px 120px 15px rgb(0 0 0 / 10%);
  padding: 7px 25px;
  width: 300px;
  display: none;
  position: absolute;
  z-index: 1000;
  background-color: white;
  bottom: 100%;
  left: -200%;
  content: attr(data-attr);
}
#min:hover::before {
  display: block;
}
.prompt {
  width: 300px;
}
.span-text {
  color: #8592a6;
  font-size: 12px;
  margin-left: 3px;
}

.zer {
  color: #8592a6;
  font-size: 12px;
  display: inline-block;
  max-width: 50px;
}

.disable {
  cursor: auto;
  border: 2px solid silver;
  color: silver;
}
.disable:hover {
  cursor-pointer: auto;
  background: none;
}

.ready {
  color: #0384c6;
}

.variants {
  box-shadow: 20px 20px 120px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
@media screen and (max-width: 1280px) {
  .zr {
    height: 52px !important;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .stand {
    width: 100%;
  }
}
@media screen and (max-width: 380px) {
  #mod {
    position: static !important;
  }
}
</style>
