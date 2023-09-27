<template>
  <label class="lab flex items-center">
    <slot />
    <input type="checkbox" class="rad" :name="name" />
    <span class="checkmark"></span>
  </label>
</template>

<style>
.lab {
  display: inline-block;
  position: relative;
  padding-left: 27px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}
.lab .rad {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0px;
  left: 0;
  height: 1.2em;
  width: 1.2em;
  border-radius: 0.25em;
  border: 1px solid #f0f0f0;
  background-color: #fff;
}

.lab input:checked ~ .checkmark {
  border: none;
  background-color: #ffba0f;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  margin-right: 0.75em;
  margin-top: 0.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
<script>
export default {
  props: ["name"],
};
</script>
