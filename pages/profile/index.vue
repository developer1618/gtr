<template>
  <div
    class="xl:container ls mob-cont md:container sm:container 2xl:container mx-auto"
  >
    <div
      class="registration fixed left-0 w-full h-full z-20 visible opacity-100"
      v-if="isShow"
    >
      <div
        class="w-full sm:w rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible"
      >
        <div>
          <div class="enter-form m-auto py-5 px-4 bg-white rounded relative">
            <div v-if="dialog === 'first'">
              <div class="flex justify-between relative">
                <h1 class="text-base-3.5 font-semibold">
                  Подтвердите что это вы
                </h1>
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="mt-5">
                <div class="mb-4">
                  <p class="font-medium text-xs mb-1">Пароль</p>
                  <div class="relative">
                    <Input
                      :type="toShowPas1 ? 'text' : 'password'"
                      v-model="text"
                      placeholder="Например: Mamadziyoev"
                      required
                    />
                    <div
                      class="absolute flex cursor-pointer pr-3 items-center justify-center right-0 h-full top-0"
                    >
                      <img
                        :src="
                          require(`${
                            toShowPas1 ? './img/c1.svg' : './img/c2.svg'
                          }`)
                        "
                        @click="toShowPas1 = !toShowPas1"
                        alt="Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                  <div
                    class="forgot__password"
                    @click="dialog = 'forgotPassword'"
                  >
                    <a
                      href="#"
                      class="link font-semibold cursor-pointer"
                      @click="dialog = 'forgotPassword'"
                    >
                      Забыли пароль?
                    </a>
                  </div>
                  <Button
                    type="secondary"
                    secondClass="px-8"
                    @click="(dialog = 'two'), (text = '')"
                    >Далее</Button
                  >
                </div>
              </div>
            </div>
            <div v-if="dialog === 'two'">
              <div class="flex justify-between relative">
                <h1 class="text-base-3.5 font-semibold">Сменить пароль</h1>
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="mt-5">
                <div class="mb-4">
                  <p class="font-medium text-xs mb-1">Новый пароль</p>
                  <div class="relative">
                    <Input
                      :type="toShowPas1 ? 'text' : 'password'"
                      v-model="text"
                      placeholder="Например: Mamadziyoev"
                      required
                    />
                    <div
                      class="absolute flex cursor-pointer pr-3 items-center justify-center right-0 h-full top-0"
                    >
                      <img
                        :src="
                          require(`${
                            toShowPas1 ? './img/c1.svg' : './img/c2.svg'
                          }`)
                        "
                        @click="toShowPas1 = !toShowPas1"
                        alt="Password"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p class="font-medium text-xs mb-1">
                    Подтвердите новый пароль
                  </p>
                  <div class="relative">
                    <Input
                      v-model="password"
                      :type="toShowPas2 ? 'text' : 'password'"
                      placeholder="Например: Mamadziyoev"
                      required
                    />
                    <div
                      class="absolute flex cursor-pointer pr-3 items-center justify-center right-0 h-full top-0"
                    >
                      <img
                        :src="
                          require(`${
                            toShowPas2 ? './img/c1.svg' : './img/c2.svg'
                          }`)
                        "
                        @click="toShowPas2 = !toShowPas2"
                        alt="Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-3">
                  <Button type="submit secondary" secondClass="px-8"
                    >Далее</Button
                  >
                </div>
              </div>
            </div>
            <div v-if="dialog === 'forgotPassword'">
              <div class="flex justify-between relative">
                <h1 class="text-base-3.5 font-semibold">Сменить пароль</h1>
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p class="my-3">Укожите адрес электронной почты</p>
              <div class="mt-5">
                <div class="mb-4">
                  <p class="font-medium text-xs mb-1">
                    Адрес электронной почты
                  </p>
                  <Input placeholder="Например: Mamadziyoev" required />
                </div>
                <div class="flex justify-end mt-3">
                  <Button
                    type="submit secondary"
                    secondClass="px-8"
                    @click="dialog = 'getCode'"
                    >Далее</Button
                  >
                </div>
              </div>
            </div>
            <div v-if="dialog === 'getCode'">
              <div class="flex justify-between relative">
                <h1 class="text-base-3.5 font-semibold">Сменить пароль</h1>
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p class="my-3">
                Код подверждения отправлен на адрес электронной почты:
                Sadri@gmail.com
              </p>
              <div class="mt-5">
                <div class="mb-4">
                  <p class="font-medium text-xs mb-1">Код подверждения</p>
                  <Input placeholder="Например: Mamadziyoev" required />
                </div>
                <div class="flex justify-end mt-3">
                  <Button
                    type="submit secondary"
                    secondClass="px-8"
                    @click="dialog = 'newCode'"
                    >Далее</Button
                  >
                </div>
              </div>
            </div>
            <div v-if="dialog === 'newCode'">
              <div class="flex justify-between relative">
                <h1 class="text-base-3.5 font-semibold">Сменить пароль</h1>
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="mt-5">
                <div class="mb-4">
                  <p class="font-medium text-xs mb-1">Новый пароль</p>
                  <div class="relative">
                    <Input
                      :type="toShowPas1 ? 'text' : 'password'"
                      v-model="text"
                      placeholder="Например: Mamadziyoev"
                      required
                    />
                    <div
                      class="absolute flex cursor-pointer pr-3 items-center justify-center right-0 h-full top-0"
                    >
                      <img
                        :src="
                          require(`${
                            toShowPas1 ? './img/c1.svg' : './img/c2.svg'
                          }`)
                        "
                        @click="toShowPas1 = !toShowPas1"
                        alt="Password"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p class="font-medium text-xs mb-1">
                    Подтвердите новый пароль
                  </p>
                  <div class="relative">
                    <Input
                      v-model="password"
                      :type="toShowPas2 ? 'text' : 'password'"
                      placeholder="Например: Mamadziyoev"
                      required
                    />
                    <div
                      class="absolute flex cursor-pointer pr-3 items-center justify-center right-0 h-full top-0"
                    >
                      <img
                        :src="
                          require(`${
                            toShowPas2 ? './img/c1.svg' : './img/c2.svg'
                          }`)
                        "
                        @click="toShowPas2 = !toShowPas2"
                        alt="Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-3">
                  <Button type="submit secondary" secondClass="px-8"
                    >Сменить пароль</Button
                  >
                </div>
              </div>
            </div>
            <div v-if="dialog === 'personal'" class="overflow-auto h-full`">
              <div class="flex justify-end relative">
                <div>
                  <svg
                    @click="(isShow = false), (dialog = '')"
                    viewBox="0 0 24 24"
                    class="close-registration text-secondary-2 text-base-4 cursor-pointer"
                  >
                    <path
                      d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div>
                  <img :src="avatar_src" style="border-radius: 50%" />
                </div>
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <label
                    for="in-file"
                    class="cursor-pointer mt-1 font-bold text-blue"
                  >
                    Добавить фото
                    <input
                      type="file"
                      id="in-file"
                      class="hidden"
                      @change="onFile"
                    />
                  </label>
                </ValidationProvider>
              </div>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(formPersonal)">
                  <div class="mt-3 flex flex-col gap-3">
                    <div v-for="(to, ind) in ins">
                      <ValidationProvider
                        v-slot="{ errors }"
                        :rules="
                          ind === 0 ? 'required|alpha_spaces' : 'required'
                        "
                      >
                        <p class="font-medium text-xs mb-1">{{ to.value }}</p>
                        <Input
                          v-model="to.text"
                          @input="onLetter"
                          :error="errors[0]"
                          placeholder="Например: Mamadziyoev"
                          type="text"
                        />
                      </ValidationProvider>
                    </div>
                    <div>
                      <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p class="font-medium text-xs mb-1">Страна</p>
                          <Select
                            val="country"
                            @changeicon="countryActive = $event"
                            class="mt-2 whitespace-nowrap"
                            secondClass="bg-stand h-13 w-full"
                            :list="countries"
                            :active="countryActive.country"
                          />
                        </div>
                        <div>
                          <p class="font-medium text-xs mb-1">Город</p>
                          <Select
                            val="city"
                            @changeicon="citiesActive = $event"
                            class="mt-2 whitespace-nowrap"
                            secondClass="bg-stand h-13 w-full"
                            :list="cities"
                            :active="citiesActive.city"
                          />
                        </div>
                      </div>
                      <div>
                        <ValidationProvider
                          v-slot="{ errors }"
                          rules="required"
                        >
                          <p class="font-medium text-xs mb-1">Улица</p>
                          <Input
                            type="text"
                            v-model="street"
                            :error="errors[0]"
                          />
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <Button
                        type="submit primary"
                        secondClass="px-8"
                        @click="dialog === ''"
                        >Отмена</Button
                      >
                      <Button type="submit secondary" secondClass="px-8"
                        >Применить</Button
                      >
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-6 py-20 flex-wrap xl:flex-nowrap">
      <div class="profile pt-6 pb-8 px-2 sm:px-6 w-full xl:w-auto">
        <div class="flex gap-4 mb-8 items-center">
          <div>
            <img
              :src="auth.photo"
              :alt="user.avatar.alt"
              width="155"
              height="155"
            />
          </div>
          <div>
            <div class="name pt-2 pb-4">
              <p class="font-bold xl:font-medium">
                {{ auth?.username }} <br />
                {{ auth?.full_name }}
              </p>
            </div>
            <div>
              <p class="text-secondary-1 text-base-0.5 mb-1">
                {{ user.bonus }}:
              </p>
              <div class="flex bg-stand items-center gap-3 p-2 rounded">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.775 12.0965V8.3915H8.7785V9.256C8.7785 9.34267 8.80667 9.41417 8.863 9.4705C8.91933 9.5225 8.99733 9.5485 9.097 9.5485H10.4035V11.4075C10.1132 11.5548 9.81633 11.6697 9.513 11.752C9.214 11.8343 8.87167 11.8755 8.486 11.8755C7.97033 11.8755 7.50233 11.7953 7.082 11.635C6.666 11.4747 6.31067 11.2428 6.016 10.9395C5.72133 10.6318 5.49383 10.2592 5.3335 9.8215C5.17317 9.3795 5.093 8.879 5.093 8.32C5.093 7.79133 5.16883 7.3125 5.2505 6.8835C5.47217 6.4545 5.68883 6.0905 5.9705 5.7915C6.25217 5.48817 6.59017 5.25633 6.9845 5.096C7.38317 4.93133 7.8295 4.849 8.3235 4.849C8.6485 4.849 8.93017 4.87283 9.1685 4.9205C9.40683 4.96383 9.617 5.02233 9.799 5.096C9.981 5.16533 10.1413 5.24117 10.28 5.3235C10.423 5.40583 10.5573 5.48383 10.683 5.5575C10.8087 5.6355 10.9257 5.6615 11.034 5.6355C11.1423 5.6095 11.2312 5.54233 11.3005 5.434L11.736 4.7385C11.541 4.5565 11.3265 4.39183 11.0925 4.2445C10.8585 4.09717 10.6028 3.9715 10.3255 3.8675C10.0482 3.7635 9.747 3.68333 9.422 3.627C9.10133 3.56633 8.7525 3.536 8.3755 3.536C7.6345 3.536 6.96717 3.653 6.3735 3.887C5.77983 4.11667 5.27283 4.44383 4.8525 4.8685C4.43217 5.28883 4.10933 5.79367 3.884 6.383C3.65867 6.968 3.546 7.61367 3.546 8.32C3.546 9.022 3.663 9.6655 3.897 10.2505C4.131 10.8355 4.46467 11.3403 4.898 11.765C5.33133 12.1853 5.8535 12.5147 6.4645 12.753C7.07983 12.987 7.76667 13.104 8.525 13.104C9.76 13.104 10.8433 12.7682 11.775 12.0965Z"
                    fill="#222222"
                  />
                </svg>

                <p class="font-semibold text-base">1000</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-base-2 font-medium">
          <ul class="block sm:flex justify-between xl:block">
            <li class="cursor-pointer" @click="isOpenOrders = !isOpenOrders">
              <div class="flex justify-between items-baseline hover:text-blue">
                <p class="mb-6">
                  {{ user.myOrders }}
                </p>
                <img
                  v-if="!isOpenOrders"
                  src="/images/icons/arrowDown.svg"
                  alt="Arrow Down"
                />
                <img
                  v-if="isOpenOrders"
                  src="/images/icons/arrowUp.svg"
                  alt="Arrow Up"
                />
              </div>
              <ul v-if="isOpenOrders" class="block">
                <li
                  class="mb-3.5 text-secondary-1 py-2.5 cursor-pointer hover:bg-secondary"
                  v-for="(item, index) in user.orders"
                  :key="index"
                >
                  <p class="pl-10">
                    {{ item.text }}
                  </p>
                </li>
              </ul>
            </li>
            <li
              class="mb-6 hover:text-blue cursor-pointer"
              @click="
                (listProfile = 'info'), (isShow = true), (dialog = 'personal')
              "
              :class="listProfile === 'info' ? 'active' : ''"
            >
              {{ user.personalInfo }}
            </li>
            <li
              class="mb-6 hover:text-blue cursor-pointer"
              @click="
                (listProfile = 'password'), (isShow = true), (dialog = 'first')
              "
              :class="listProfile === 'password' ? 'active' : ''"
            >
              {{ user.changePassword }}
            </li>
            <li
              class="hover:text-blue cursor-pointer"
              @click="logOut"
              :class="listProfile === 'exit' ? 'active' : ''"
            >
              {{ user.logout }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full xl:w-4/5">
        <div>
          <h1 class="font-medium text-base-4">
            {{ airlines }}
          </h1>
        </div>
        <div class="cards">
          <CardsProfile
            class="w-full shadow-3xl mt-6"
            :flights="flights"
            v-for="num in 4"
            :key="num"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider } from "vee-validate";
import { mapMutations } from "vuex";

export default {
  head: {
    title: "Профиль",
  },
  data() {
    return {
      avatar_src: "null",
      street: "",
      text: "",
      formData: null,
      password: "",
      toShowPas1: true,
      toShowPas2: false,
      dialog: "first",
      isShow: false,
      isOpenOrders: false,
      listProfile: "",
      flights: {
        img: "/images/images3.svg",
        takeoff: "Вылет",
        arrival: "Прилет",
        takeoffСity: "Душанбе",
        arrivalСity: "Москва",
        takeoffTime: "01:45",
        arrivalTime: "16:45",
        way: "В пути",
        wayTime: "16h 05m",
        takeoffAiroport: "DYU",
        arrivalAiroport: "DME",
        layoverAiroport: "VOG",
        firstLayover: "8h 05m",
        secondLayover: "8h 05m",
        price: "3000 TJS",
        aviaWebsite: "KupiBilet.ru",
        text: "Вылет из аэропорта “Душанбе” в 01:45 по местному времени",
        button: "Подробнее",
      },
      countryActive: {},
      citiesActive: {},
      countries: [],
      cities: [],
      models: [{ val: "" }, { val: "" }, { val: "" }],
      ins: [
        {
          value: "Ф.И.О",
          text: "",
        },
        {
          value: "Логин",
          text: "",
        },
        {
          value: "Название компании",
          text: "",
        },
      ],
      user: {
        avatar: {
          src: "/images/images2.jpg",
          alt: "Images 2",
        },
        surname: "Мухамадназаров",
        name: "Абдулазиз",
        bonus: "Бонусы",
        myOrders: "Мои заказы",
        orders: [
          {
            text: "Все",
          },
          {
            text: "Авиабилеты",
          },
          {
            text: "Отели",
          },
          {
            text: "Выездные туры",
          },
          {
            text: "Внутренние туры",
          },
        ],
        personalInfo: "Личная Информация",
        changePassword: "Сменить пароль",
        logout: "Выход",
      },
      airlines: "Авиабилеты",
      card: {
        img: {
          src: "images/images3.svg",
          alt: "Airlines Logo",
        },
        takeoff: "Вылет",
        arrival: "Прилет",
        takeoffTime: "01:45",
        arrivalTime: "16:45",
        date: "28 сен 2021, вт",
        takeoffAiroport: "DYU",
        arrivalAiroport: "DME",
        text: "Вылет из аэропорта “Душанбе” в 01:45 по местному времени",
        layoverAiroport: "VOG",
        way: "В пути",
        wayTime: "16h 05m",
        rule: "Правила",
        more: "Подробнее",
        price: "3000 TJS",
        aviaWebsite: "KupiBilet.ru",
        btn: "Купить",
      },
    };
  },
  computed: {
    auth() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    ...mapMutations({
      get_user: "api/SET_USER",
    }),
    async formPersonal() {
      let form_data = new FormData();
      form_data.append("full_name", this.ins[0].text);
      form_data.append("username", this.ins[1].text);
      form_data.append("company_name", this.ins[2].text);
      form_data.append("country_id", this.countryActive.country);
      form_data.append("city", this.citiesActive.id);
      form_data.append("photo", this.formData);
      form_data.append("street", this.street);

      await this.$axios
        .put(`UserProfile/${this?.auth?.id}/`, form_data)
        .then(() => {
          window.location.href = "/";
        });
    },
    onFile(e) {
      this.formData = e.target.files[0];
      this.avatar_src = URL.createObjectURL(e.target.files[0]);
    },
    onLetter() {
      if (/^[A-Za-z]+$/.test(this.ins[0].text)) return true;
    },
    async getCities() {
      await this.$axios.get("/Cities/").then((res) => {
        this.cities = res.data;
        console.log(this.cities);
      });
    },
    async getCountries() {
      await this.$axios.get("/Countries/").then((res) => {
        this.countries = res.data;
      });
    },
    async logOut() {
      await this.$axios.post("logout/").then(() => {
        localStorage.clear();
        window.location.href = "/";
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      this.getCountries();
      this.getCities();
      this.ins[0].text = this.auth?.full_name;
      this.ins[1].text = this.auth?.username;
      this.ins[2].text = this.auth?.company_name;
      this.avatar_src = this.auth?.photo;
    } else {
      this.$router.push("/");
    }
  },
  components: { ValidationProvider },
};
</script>

<style scoped>
input {
  height: 10px !important;
}
.close-registration {
  width: 20px;
  height: 20px;
}
.registration {
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.enter-form {
  overflow: auto;
  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  width: 480px;
}
.profile {
  box-shadow: 20px 20px 120px 15px rgba(0, 0, 0, 0.05);
  height: fit-content;
}
.list li:hover {
  transition: all 0.3s ease;
  border-left: 4px solid #222;
}
.active {
  color: #4c95ff;
}
@media screen and (max-height: 790px) {
  .enter-form {
    height: 100vh;
  }
}
@media screen and (min-width: 680px) and (max-width: 1280px) {
  .profile img {
    border-radius: 50%;
  }
}
@media screen and (max-width: 680px) {
  .enter-form {
    width: 100%;
    height: 100%;
  }

  form {
    height: 100%;
  }
}
</style>
