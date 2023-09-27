<template>
  <div class="error flex justify-center items-center px-3 py-24">
    <div class="text-center">
      <h2 class="title font-bold">404</h2>
      <div>
        <h2 class="font-medium text-2xl">Страница не найдена</h2>
        <p style="max-width: 350px" class="text-lg mb-4">
          Ой! Страницы, которую вы ищете, не существует. Возможно, она была
          перемещена или удалена.
        </p>
        <NuxtLink to="/">
          <Button type="secondary" secondClass="px-7"
            >Перейти на главную</Button
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "empty",
  head: {
    title: "Ошибка",
  },
};
</script>
<style scoped>
.error {
  height: 100vh;
}
.title {
  font-size: 200px;
}
</style>
