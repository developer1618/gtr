<template>
  <div
    class="xl:container md:container ls sm:container 2xl:container pt-4 pb-9 mx-auto"
  >
    <div class="aboutUs mob-cont">
      <div class="flex gap-2.5 items-center mb-6 mt-5 md:mt-0">
        <NuxtLink to="/" class="text-base-1">
          {{ title }}
        </NuxtLink>
        <p class="text-base-1">></p>
        <NuxtLink to="#" class="text-base-1">
          {{ aboutUs }}
        </NuxtLink>
      </div>
      <h1 class="font-black text-base-4">
        {{ aboutUs }}
      </h1>
      <div class="py-5">
        <img :src="img.src" :alt="img.alt" class="h-96 w-full" />
      </div>
      <h1 class="font-bold text-base-3.7 pb-4">
        {{ content.title }}
      </h1>
      <article class="font-normal text-base-2.5">
        {{ content.text }}
      </article>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "О нас",
  },
  data() {
    return {
      date: "",
      disabledDates2: [new Date(2019, 10, 2), new Date(2023, 10, 6)],
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: true,
      },
      title: "Главная",
      time1: null,
      aboutUs: "О нас",
      img: {
        src: "/images/images1.jpg",
        alt: "Images 1",
      },
      content: {
        title: "Golden Travel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet consequat, viverra ultrices auctor gravida sit. Ultrices duis turpis massa varius tristique odio id at justo. Ullamcorper venenatis leo sagittis sed sed purus magna augue. Commodo massa enim fringilla vitae nunc sit. Purus, purus in viverra volutpat commodo orci tristique id a. Tellus vitae, diam eleifend gravida aliquet malesuada. Praesent amet, lectus enim, velit id scelerisque fames adipiscing sit. Placerat mauris, nunc, pulvinar suspendisse ut quam ornare in ut. Montes, neque, quam facilisi rhoncus, tristique egestas. Odio dolor vestibulum quis vivamus pellentesque imperdiet turpis odio. Nunc, sagittis mollis condimentum amet, risus risus elit molestie magna. Nullam tellus nunc, lacus tincidunt et sem massa, lorem. Quis facilisi pretium nisi, morbi et mus senectus. Cursus arcu quisque sit odio pulvinar enim. Ultricies nibh nulla vitae quam. Aliquam proin proin pellentesque diam. Purus diam gravida integer a, diam lorem praesent duis. Hendrerit blandit enim non sed integer dolor, nibh enim. Cursus orci elit non dolor cras nibh. Eleifend porta ipsum rhoncus, malesuada a. Adipiscing posuere erat a amet tincidunt et ultricies integer. Viverra suscipit mauris, orci et ligula sit nulla id. Auctor pulvinar ullamcorper vitae in tristique purus vivamus faucibus tellus. Sapien commodo vulputate sit mauris, ac, nullam. Lectus enim consequat elit venenatis sit. Felis ornare tempus arcu aliquam tempor, fermentum nibh morbi eleifend. Eros, iaculis sollicitudin pellentesque tristique mattis cursus enim pulvinar. Elit convallis condimentum tempor cras at donec sed scelerisque. Dolor sed tempor velit enim est turpis neque elementum amet.",
      },
    };
  },
};
</script>
