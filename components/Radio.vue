<template>
  <label class="lab">
    <slot />
    <input type="checkbox" class="rad" />
    <span class="checkmark"></span>
  </label>
</template>
<style scoped>
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
  top: 3.4px;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  background-color: #fff;
}
.lab input:checked ~ .checkmark {
  background-color: #111;
}
</style>
