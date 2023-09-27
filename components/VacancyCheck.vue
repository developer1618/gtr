<template>
  <div class="agreement flex gap-3">
    <input
      required
      type="checkbox"
      class="checkbox"
      id="agreement"
      name="agreement"
    />
    <label for="agreement" class="font-normal flex justify-center items-center">
      <div>
        <p class="font-normal text-base-0.5 mt-1.5">
          Я согласен(-на) с условиями
          <NuxtLink to="#" class="link">
            обработки персональных данных
          </NuxtLink>
        </p>
      </div>
    </label>
  </div>
</template>

<style>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  cursor: pointer;

  display: inline-flex;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  border-radius: 4px;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  margin-right: 0.75em;
  margin-top: 0.125rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox:checked + label::before {
  border-color: #ffba0f;
  background-color: #ffba0f;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.link {
  color: #034c8c;
  border-bottom: 1px solid #034c8c;
}
</style>
