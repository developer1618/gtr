<template>
  <label class="switch relative hidden">
    <input type="checkbox" class="w-0 h-0 opacity-0" />
    <span
      class="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0"
    ></span>
  </label>
</template>
<style>
.switch {
  width: 45px;
  height: 24px;
}

/* The slider */
.slider {
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .switch {
    display: inline-block;
    margin-bottom: 23px;
  }
}
</style>
