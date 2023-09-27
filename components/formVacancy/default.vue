<template>
  <div class="vacancy-form fixed top-0 bottom-0 left-0 right-0 m-auto z-10">
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="$emit('closeForms')"
    ></div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(sendForm)"
        class="pt-12 pb-11 px-3 sm:px-16 bg-white relative z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded w-auto"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          @click="$emit('closeForms')"
          fill="none"
          class="absolute right-6 top-7 sm:top-3.5 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29183 9.29183C9.38473 9.19871 9.49508 9.12482 9.61657 9.07441C9.73806 9.024 9.8683 8.99805 9.99983 8.99805C10.1314 8.99805 10.2616 9.024 10.3831 9.07441C10.5046 9.12482 10.6149 9.19871 10.7078 9.29183L15.9998 14.5858L21.2918 9.29183C21.3848 9.19886 21.4952 9.12511 21.6167 9.07479C21.7381 9.02447 21.8683 8.99857 21.9998 8.99857C22.1313 8.99857 22.2615 9.02447 22.383 9.07479C22.5045 9.12511 22.6149 9.19886 22.7078 9.29183C22.8008 9.38481 22.8746 9.49519 22.9249 9.61667C22.9752 9.73815 23.0011 9.86835 23.0011 9.99983C23.0011 10.1313 22.9752 10.2615 22.9249 10.383C22.8746 10.5045 22.8008 10.6149 22.7078 10.7078L17.4138 15.9998L22.7078 21.2918C22.8008 21.3848 22.8746 21.4952 22.9249 21.6167C22.9752 21.7381 23.0011 21.8683 23.0011 21.9998C23.0011 22.1313 22.9752 22.2615 22.9249 22.383C22.8746 22.5045 22.8008 22.6149 22.7078 22.7078C22.6149 22.8008 22.5045 22.8746 22.383 22.9249C22.2615 22.9752 22.1313 23.0011 21.9998 23.0011C21.8683 23.0011 21.7381 22.9752 21.6167 22.9249C21.4952 22.8746 21.3848 22.8008 21.2918 22.7078L15.9998 17.4138L10.7078 22.7078C10.6149 22.8008 10.5045 22.8746 10.383 22.9249C10.2615 22.9752 10.1313 23.0011 9.99983 23.0011C9.86835 23.0011 9.73815 22.9752 9.61667 22.9249C9.49519 22.8746 9.38481 22.8008 9.29183 22.7078C9.19886 22.6149 9.12511 22.5045 9.07479 22.383C9.02447 22.2615 8.99857 22.1313 8.99857 21.9998C8.99857 21.8683 9.02447 21.7381 9.07479 21.6167C9.12511 21.4952 9.19886 21.3848 9.29183 21.2918L14.5858 15.9998L9.29183 10.7078C9.19871 10.6149 9.12482 10.5046 9.07441 10.3831C9.024 10.2616 8.99805 10.1314 8.99805 9.99983C8.99805 9.8683 9.024 9.73806 9.07441 9.61657C9.12482 9.49508 9.19871 9.38473 9.29183 9.29183Z"
            fill="#999999"
          />
        </svg>
        <h1 class="font-bold my-0 sm:my-3 tit">Форма вакансии</h1>

        <div class="flex gap-7.5">
          <div class="w-1/2 z">
            <ValidationProvider
              rules="required|alpha_spaces"
              v-slot="{ errors }"
              class="w-full"
            >
              <label class="text-zeroTwo">{{ form.surname }}</label>
              <Input
                class="mt-2"
                v-model="vacancy.firstname"
                :error="errors[0]"
                type="text"
              />
            </ValidationProvider>
          </div>
          <div class="w-1/2 z">
            <ValidationProvider
              rules="required|alpha_spaces"
              v-slot="{ errors }"
              class="w-full"
            >
              <label class="text-zeroTwo">{{ form.name }}</label>
              <Input
                class="mt-2"
                :error="errors[0]"
                type="text"
                v-model="vacancy.name"
              />
            </ValidationProvider>
          </div>
        </div>
        <div
          class="my-3 flex gap-x-7.5 gap-y-2 flex-wrap md:flex-nowrap flex-col sm:flex-row"
        >
          <div class="w-1/2">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              class="w-full"
            >
              <label class="text-zeroTwo">{{ form.phone }}</label>
              <Input
                class="mt-2"
                :error="errors[0]"
                type="number"
                v-model="vacancy.phone"
              />
            </ValidationProvider>
          </div>
          <div class="w-1/2">
            <ValidationProvider
              rules="required|email"
              v-slot="{ errors }"
              class="w-full"
            >
              <label class="text-zeroTwo">{{ form.email }}</label>
              <Input
                class="mt-2"
                type="email"
                :error="errors[0]"
                v-model="vacancy.email"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="mt-6">
          <label
            id="file"
            class="flex py-4 justify-center items-center cursor-pointer"
          >
            <div class="text-center flex flex-col gap-y-5 text-zeroTwo">
              <div class="max-w-medium">
                Перетащите или загрузите файл анкеты* <br />
                (.pdf .doc .jpg .png )
              </div>
              <div>
                Анкеты, отправленные в другой форме, могут не рассматриваться
                банком.
              </div>
            </div>
            <input type="file" accept=".pdf,.doc,.jpg,.png" />
          </label>
        </div>
        <div class="flex justify-between mt-8">
          <VacancyCheck />
          <Button type="secondary" secondClass="search px-6" class="sm:w">
            {{ form.button }}
          </Button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";

export default {
  props: ["form"],
  data() {
    return {
      vacancy: {
        firstname: "",
        name: "",
        phone: "",
        email: "",
        file: "",
      },
    };
  },
  methods: {
    sendForm() {
      alert();
    },
  },
  components: { ValidationObserver },
};
</script>
<style scoped>
.tit {
  font-size: 24px;
}
input[type="file"] {
  display: none;
  width: 500px;
}
#file {
  border: 2px dashed #999;
}
.vacancy-form {
  background-color: rgba(0, 0, 0, 0.5);
}
form {
  width: 780px;
}
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
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
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

@media screen and (max-width: 790px) {
  form {
    padding: 30px;
    width: auto;
  }
  form > div div,
  .agreement + div,
  .agreement + div > div div,
  .zer buttond {
    width: 100%;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .tit {
    font-size: 20px;
  }
  .z {
    width: 50%;
  }
}
</style>
