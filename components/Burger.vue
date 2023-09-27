<template>
  <div class="burger cursor-pointer">
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 14H24.5"
        stroke="#333333"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 7H24.5"
        stroke="#333333"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 21H24.5"
        stroke="#333333"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
<style scoped>
@media screen and (min-width: 250px) and (max-width: 680px) {
  .burger {
    display: inline-block;
  }
  .mob-dis {
    margin-right: 15px;
  }

  .mob-cont {
    padding-left: 12px;
    padding-right: 5px;
  }
}
@media screen and (min-width: 680px) {
  .burger {
    display: none;
  }
}
</style>
