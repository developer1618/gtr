<template>
  <div class="flex gap-x-3 bg-stand">
    <input
      type="date"
      @change="onChange"
      v-model="calendar"
      class="relative focus:border-none h-13 pl-3 bg-stand"
    />
    <input type="time" class="bg-stand h-13 pr-3" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      calendar: "",
    };
  },
  methods: {
    onChange() {
      let past = new Date(`${this.calendar}`);
      let curr = new Date();
      if (curr > past) {
        this.calendar = new Date();
      }
    },
  },
};
</script>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 10px;
  display: block;
  background: url("/images/icons/cal.svg") no-repeat;
  width: 11.74px;
  height: 11.95px;
}
input[type="date"]::-webkit-datetime-edit {
  transform: translateX(25px);
}
input[type="date"]::after {
  content: "";
  width: 1px;
  margin-left: 10px;
  background: black;
  height: 70%;
}
input:focus {
  outline: none;
  border: none;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  input[type="date"],
  input[type="time"] {
    width: 50%;
  }
}
</style>
