<template>
  <div class="relative w-full sm:w-auto">
    <div v-if="label" :class="labelStyle">
      <label class="relative">{{ label }}</label>
    </div>
    <div v-if="type === 'date'" class="relative">
      <input
        :type="type"
        :min="min"
        :max="max"
        :value="value"
        class="bg-secondary px-3 xl:px-5 rounded outline-none w-full"
        :required="required"
        :class="secondClass"
        @input="onDate"
      />
      <span
        class="text-red"
        :class="isbottom ? 'bottom-0 top-12  mb-4 left-0 absolute' : ''"
        >{{ error }}</span
      >
    </div>

    <div v-else class="w-full relative sm:w-auto">
      <input
        :type="type"
        :value="value"
        :id="third"
        :required="required"
        :class="secondClass"
        class="bg-secondary px-3 xl:px-5 rounded outline-none w-full inp h-13"
        :placeholder="placeholder"
        :minlength="minlength"
        @input="$emit('input', $event.target.value)"
        @keypress="$emit('keypress', $event)"
      />
      <span
        class="text-red"
        :class="isbottom ? 'bottom-0 top-12  mb-4 left-0 absolute' : ''"
        >{{ error }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "placeholder",
    "type",
    "required",
    "label",
    "onlyLetter",
    "labelStyle",
    "minlength",
    "value",
    "secondClass",
    "third",
    "error",
    "min",
    "max",
    "isbottom",
  ],
  methods: {
    onDate({ target }) {
      this.$emit("input", target.value);
      // const past = new Date(target.value);
      // const now = new Date();
      // now.setHours(0, 0, 0, 0);
      // past < now ? (target.value = "") : ;
    },
  },
};
</script>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  background-position: right;
  background-size: auto;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 16px;
  width: auto;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0.2;
}
input[type="date"] {
  height: 52px;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .zer div {
    width: 100%;
  }
  input[type="date"] {
    width: 100%;
  }
}
</style>
