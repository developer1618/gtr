<template>
  <div
    class="xl:container md:container ls sm:container 2xl:container mx-auto mob-cont"
  >
    <div class="aboutUs py-16">
      <div class="flex gap-2.5 items-center mb-6">
        <NuxtLink to="/" class="text-base-1">
          {{ title }}
        </NuxtLink>
        <p class="text-base-1">></p>
        <p class="text-base-1">
          {{ advertisement }}
        </p>
      </div>
      <h1 class="font-black text-base-4">
        {{ advertisement }}
      </h1>
      <div class="py-14">
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
    title: "Реклама",
  },
  data() {
    return {
      title: "Главная",
      advertisement: "Реклама",
      img: {
        src: "/images/images1.jpg",
        alt: "Images 1",
      },
      content: {
        title: "Golden Travel",
        text: "Nullam tellus nunc, lacus tincidunt et sem massa, lorem. Quis facilisi pretium nisi, morbi et mus senectus. Cursus arcu quisque sit odio pulvinar enim. Ultricies nibh nulla vitae quam. Aliquam proin proin pellentesque diam. Purus diam gravida integer a, diam lorem praesent duis. Hendrerit blandit enim non sed integer dolor, nibh enim. Cursus orci elit non dolor cras nibh. Eleifend porta ipsum rhoncus, malesuada a. Adipiscing posuere erat a amet tincidunt et ultricies integer. Viverra suscipit mauris, orci et ligula sit nulla id. Auctor pulvinar ullamcorper vitae in tristique purus vivamus faucibus tellus. Sapien commodo vulputate sit mauris, ac, nullam. Lectus enim consequat elit venenatis sit. Felis ornare tempus arcu aliquam tempor, fermentum nibh morbi eleifend. Eros, iaculis sollicitudin pellentesque tristique mattis cursus enim pulvinar. Elit convallis condimentum tempor cras at donec sed scelerisque. Dolor sed tempor velit enim est turpis neque elementum amet. Donec enim, consectetur justo, quam mauris volutpat. Leo, eget amet, odio gravida ullamcorper donec. Id nisl nisl turpis tempus. Sit amet sed ut neque diam amet, nisi, aliquet quam. At viverra tempus, euismod potenti id odio sed. Non morbi in tincidunt aliquam condimentum lectus nibh ultrices posuere. Dis non habitant egestas aliquet. Tellus quis velit massa dui consectetur a, morbi mauris quam. Velit diam massa dui augue volutpat. Pulvinar posuere consequat adipiscing nisl viverra id id sed nunc. Ultrices ipsum senectus ornare eu, ut. Mauris dolor quis tortor, consequat. Est cursus viverra rhoncus, mauris odio commodo. Orci, urna nec parturient dictum amet tellus eros. Lacus, id libero, commodo morbi nisl ut. Et tincidunt a eu auctor maecenas amet. Tincidunt sapien odio cursus habitant. Ut risus iaculis elementum tempus. Et, eget tellus, facilisi justo, mattis vulputate sagittis posuere augue. Vel, sed eleifend ultrices nec vitae, habitant congue nunc. Quis viverra vivamus habitant nisi, posuere pharetra eleifend. Vel, erat quis diam molestie ultrices quis gravida purus. Ultricies gravida neque, ridiculus laoreet eget ut.",
      },
    };
  },
};
</script>
