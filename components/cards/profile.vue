<template>
  <div class="px-2 sm:px-6 cursor-default">
    <div class="flex flex-col sm:flex-row items-center justify-between">
      <div class="w-full sm:w-1/5 py-7">
        <img :src="flights.img" class="m-0 sm:m-auto" />
      </div>
      <div
        class="w-full sm:w-3/5 py-7 px-0 sm:px-6 border-r-0 sm:border-r-1 border-dashed border-secondary-3"
      >
        <div class="flex justify-between">
          <div>
            <div>
              <p class="font-normal text-base-1 text-secondary-1 pb-3">
                {{ flights.takeoff }}
              </p>
            </div>
            <div>
              <p class="font-semibold text-base-4">
                {{ flights.takeoffTime }}
              </p>
            </div>
            <div>
              <p class="font-normal text-base-1">
                {{ flights.takeoffСity }}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p
                class="font-normal text-base-1 text-secondary-1 pb-3 text-right"
              >
                {{ flights.arrival }}
              </p>
            </div>
            <div>
              <p class="font-semibold text-base-4">
                {{ flights.arrivalTime }}
              </p>
            </div>
            <div>
              <p class="font-normal text-base-1 text-right">
                {{ flights.arrivalСity }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p class="font-normal text-base-1 text-center mb-2">
            {{ flights.way }} {{ flights.wayTime }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <div class="airoport cursor-pointer relative">
            <p>
              {{ flights.takeoffAiroport }}
            </p>
            <div
              class="hint absolute w-48 bg-dark-black text-white rounded text-center z-10 hidden"
            >
              <div class="p-3 font-normal text-base-1">
                <p>
                  {{ flights.text }}
                </p>
              </div>
            </div>
          </div>
          <div class="inline-block relative">
            <div class="flex items-center w-16 sm:w-24 xl:w-full">
              <div class="hidden sm:block circle"></div>
              <div class="line"></div>
              <div class="circle hidden sm:block"></div>
            </div>
            <div>
              <p
                class="text-base-0.5 font-normal text-secondary-3 text-center absolute left-0 right-0"
              >
                {{ flights.firstLayover }}
              </p>
            </div>
          </div>
          <div>
            <p>
              {{ flights.layoverAiroport }}
            </p>
          </div>
          <div class="inline-block relative">
            <div class="flex items-center w-16 sm:w-24 xl:w-full">
              <div class="circle hidden sm:block"></div>
              <div class="line"></div>
              <div class="circle hidden sm:block"></div>
            </div>
            <div>
              <p
                class="text-base-0.5 font-normal text-secondary-3 text-center absolute left-0 right-0"
              >
                {{ flights.secondLayover }}
              </p>
            </div>
          </div>
          <div class="airoport cursor-pointer relative">
            <p>
              {{ flights.arrivalAiroport }}
            </p>
            <div
              class="hint absolute w-48 bg-dark-black text-white rounded text-center z-10 hidden"
            >
              <div class="p-3 font-normal text-base-1">
                <p>
                  {{ flights.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full sm:w-1/5 flex justify-between items-center sm:block py-7 text-center"
      >
        <div class="mb-0 sm:mb-3">
          <p class="font-bold text-base-3">от {{ flights.price }}</p>
          <div class="pt-0.5">
            <p class="font-normal text-base-1 text-secondary-1">
              на {{ flights.aviaWebsite }}
            </p>
          </div>
        </div>

        <Button type="secondary" secondClass="px-2 xl:px-6">
          {{ flights.button }}
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["flights"],
};
</script>
<style scoped>
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
}
.line {
  width: 158px;
  border-top: 1px solid #e0e0e0;
}
.hint {
  left: -75px;
}
.airoport:hover .hint {
  display: block;
}
</style>
