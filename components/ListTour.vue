<template>
  <div class="list__stocks my-6">
    <ul class="flex gap-6 list-to flex-wrap">
      <li
        v-for="(list, id) in lists"
        :key="id"
        @click="onToggle(list)"
        class="relative shadow-3xl font-medium text-base-3 py-2 px-4 rounded text-secondary-1 cursor-pointer hover:text-white"
        :class="toggle === list ? 'bg-dark-black text-white' : 'bg-white'"
      >
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["lists", "toggle"],
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    onToggle(val) {
      this.$emit("changename", val);
    },
  },
};
</script>
<style>
.list-to li::after {
  display: none;
  content: "";
  background-color: #111;
  width: 90%;
  height: 3px;
  border-radius: 10px;
  position: absolute;
  left: 15px;
  bottom: -7px;
  transition: 0.3s;
  animation: rot 1s alternate forwards linear;
}
@keyframes rot {
  from {
    width: 0%;
  }
  to {
    width: 95%;
  }
}
@media screen and (min-width: 680px) {
  .list-to li:hover {
    background-color: #333;
    transition: all 0.3s ease;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .list-to li:first-child {
    width: 100%;
    background: #fff;
    color: #666;
  }
  .list-to li {
    width: 100%;
  }
  .list-to li:hover {
    color: #666;
    background: transparent;
  }
  .list-to li:hover::after {
    display: block;
  }
}
</style>
