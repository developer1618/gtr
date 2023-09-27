<template>
  <div class="flex gap-3 mt-3.5 mb-8">
    <input
      required
      type="checkbox"
      class="checkbox"
      id="agreement"
      name="agreement"
    />
    <label
      for="agreement"
      class="font-normal text-secondary-1 hover:text-secondary-4"
    >
      <div>
        {{ registrationFormInfo.agreement.text }}
        <span class="font-semibold">
          “<span
            @click="goToTerms"
            class="border-b-1 border-solid border-secondary-4"
            >{{ registrationFormInfo.agreement.firstLink }}</span
          >”
        </span>
        и
        <span class="font-semibold">
          “<span
            @click="goToTerms"
            class="border-b-1 border-solid border-secondary-4"
            >{{ registrationFormInfo.agreement.secondLink }}</span
          >”
        </span>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  props: ["registrationFormInfo"],
  methods: {
    goToTerms() {
      this.$router.push("/terms");
    },
  },
};
</script>
<style scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  display: inline-flex;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
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
</style>
