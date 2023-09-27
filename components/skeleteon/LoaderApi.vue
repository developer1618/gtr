<template>
  <div class="bg-white animate-pulse shadow-3xl w-auto">
    <div v-if="!type" class="flex items-center px-5 h-40 w-full rounded">
      <div class="flex gap-x-6 items-center w-full">
        <skeleteon-box width="200px" height="130px" secondClass="rounded" />
        <div class="w-3/5 flex flex-col gap-y-3 h-full justify-between">
          <div class="flex justify-between">
            <skeleteon-box
              v-for="(_, id) in 2"
              :key="id"
              width="15%"
              height="10px"
              secondClass="rounded block"
            />
          </div>
          <div class="flex items-center gap-x-3">
            <skeleteon-box width="15%" height="20px" secondClass="rounded" />
            <skeleteon-box width="80%" height="50px" secondClass="rounded" />
            <skeleteon-box width="15%" height="20px" secondClass="rounded" />
          </div>
          <skeleteon-box width="25%" height="30px" secondClass="rounded" />
          <div class="flex justify-end gap-x-4">
            <skeleteon-box
              v-for="(_, id) in 2"
              width="15%"
              :key="id"
              height="10px"
              secondClass="rounded"
            />
          </div>
        </div>
        <div class="flex flex-col items-center gap-y-2 w-32">
          <skeleteon-box
            width="80%"
            height="10px"
            secondClass="rounded mx-auto"
          />
          <skeleteon-box width="50px" height="10px" secondClass="rounded" />
          <skeleteon-box width="70%" height="40px" secondClass="rounded mt-4" />
        </div>
      </div>
    </div>
    <div v-if="type === 'promotion'" :class="secondClass">
      <skeleteon-box width="100%" height="240px" secondClass="rounded" />
      <div class="px-4">
        <skeleteon-box width="130px" height="12px" secondClass="rounded" />
        <div v-for="_ in 3">
          <skeleteon-box height="12px" secondClass="w-52 rounded" />
        </div>
      </div>
    </div>
    <div v-if="type === 'news'" class="w-full sm:w-72 p-5">
      <skeleteon-box width="40%" height="6px" secondClass="rounded" />
      <div v-for="(_, id) in 3" :key="id">
        <skeleteon-box width="70%" height="10px" secondClass="rounded" />
      </div>
    </div>
    <div
      v-if="type === 'partners'"
      class="w-44 flex justify-center items-center px-6 py-4"
    >
      <skeleteon-box width="100px" height="100px" secondClass="rounded" />
    </div>
    <div v-if="type === 'videos'" class="w-300">
      <skeleteon-box width="100%" height="230px" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "secondClass"],
};
</script>
<style scoped></style>
