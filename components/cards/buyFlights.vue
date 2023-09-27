<template>
  <div>
    <div class="px-3 sm:px-6 cursor-default flex-wrap">
      <svg style="display: none">
        <symbol id="right" viewBox="0 0 20 10">
          <path
            d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
          />
        </symbol>
      </svg>
      <div class="flex items-center justify-between mob-s">
        <div class="w-1/5 py-7 flex sm:block">
          <img
            :src="
              `https://gtravel.artesia.tj/${img}.png` || buyflightsImg.img.src
            "
            :alt="buyflightsImg.img.alt"
            class="m-auto"
          />
        </div>
        <div
          class="mob-buy w-3/5 py-7 px-6 border-r-1 border-dashed border-secondary-3"
        >
          <div class="flex w-full justify-between">
            <p class="font-normal text-base-1 text-secondary-1 pb-3">
              {{ buyflightsImg.takeoff }}
            </p>
            <p class="font-normal text-base-1 text-secondary-1 pb-3">
              {{ buyflightsImg.arrival }}
            </p>
          </div>
          <div class="flex">
            <div class="w-1/5 relative">
              <p class="font-semibold text-base-4">
                {{
                  buyflights.itineraries[0].segments[0].departure.at.substring(
                    16,
                    11
                  )
                }}
              </p>
              <div
                class="absolute top-12 left-0 py-2 px-3 rounded bg-secondary text-base-1 w-max"
              >
                <p class="font-semibold">
                  {{ buyflights.itineraries[0].segments[0].departure.iataCode }}
                </p>
                <p class="font-light">
                  {{
                    $moment(buyflights.itineraries[0].segments[0].departure.at)
                      .format("DD MMM yyy, dd")
                      .replace(".", "")
                  }}
                </p>
              </div>
            </div>
            <div
              class="flex justify-between w-3/5 border-b-1 border-solid border-secondary-3"
            >
              <div
                class="startAiroport relative cursor-pointer flex gap-x-5"
                v-for="to in buyflights.itineraries[0].segments.filter(
                  (elem) => elem.departure.iataCode !== elem.arrival.iataCode
                )"
              >
                <p>
                  {{ to.departure.iataCode }}
                </p>
                <p>{{ to.arrival.iataCode }}</p>
                <div
                  class="startAiroport-bottomContent absolute -bottom-1 left-0 w-7 h-1.5 bg-secondary rounded"
                ></div>
                <div
                  class="startAiroport-hint px-3 py-4 rounded bg-secondary-5 w-44 text-center"
                >
                  <p class="font-normal text-white text-base-1">
                    Вылет из аэропорта {{ to.departure.iataCode }} в
                    {{ $moment(to.departure.at).format("HH:mm") }} по местному
                    времени
                  </p>
                </div>
              </div>
            </div>
            <div class="w-1/5 text-right">
              <div>
                <p class="font-semibold text-base-4">
                  {{
                    buyflights.itineraries[0].segments[0].arrival.at.substring(
                      16,
                      11
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="text-center mt-4 mb-3.5">
            <p class="font-normal text-base-1 text-secondary-5">
              {{ buyflightsImg.way }}:
              <span class="tr">
                {{
                  buyflights.itineraries[0].duration
                    .slice(2)
                    .replace("M", "м")
                    .replace("H", "ч  ")
                }}
              </span>
            </p>
          </div>
          <div
            class="flex gap-5 justify-start sm:justify-end mt-13 sm:mt-0 rule"
          >
            <div class="border-b-1 border-solid border-secondary h-fit w-auto">
              <NuxtLink to="/" class="text-normal text-base-1">
                {{ buyflightsImg.rule }}
              </NuxtLink>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <div>
                <p class="text-blue cursor-pointer" @click="isList = !isList">
                  {{ buyflightsImg.more }}
                </p>
              </div>
              <div>
                <svg class="icon w-4 h-2 cursor-pointer" v-if="!isList">
                  <use xlink:href="#right"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-1/5 py-7 text-center flex justify-between items-center sm:block"
        >
          <div>
            <p class="font-bold text-base-3">
              {{
                cur === "TJS"
                  ? Math.round(
                      buyflights.price.grandTotal * exchange[0].dollar_somoni
                    )
                  : buyflights.price.grandTotal.replace(".00", "")
              }}
              {{ cur }}
            </p>
            <p
              class="font-normal text-base-1 text-secondary-1 pt-0.5 pb-0 sm:pb-6"
            >
              {{ buyflightsImg.aviaWebsite }}
            </p>
          </div>
          <Button
            type="secondary"
            @click="$emit('click')"
            secondClass="px-6 w-auto"
          >
            {{ buyflightsImg.btn }}
          </Button>
        </div>
      </div>
    </div>
    <div class="shadow-3xl bg-white" v-if="isList">
      <div
        class="bg-stand px-7 py-4 shadow-3xl flex justify-between"
        v-if="buyflights.itineraries.length > 1"
      >
        <div v-for="(flights, ind) in buyflights.itineraries">
          <h2 class="font-semibold text-base-3">{{ direc[ind] }}</h2>
          <div class="flex gap-10">
            <div>
              <p class="font-medium text-secondary-2">Откуда</p>
              <p class="font-medium">
                {{ flights.segments[0].departure.iataCode }}
              </p>
            </div>
            <div>
              <p class="font-medium text-secondary-2">Куда</p>
              <p class="font-medium">
                {{
                  flights.segments[flights.segments.length - 1].arrival.iataCode
                }}
              </p>
            </div>
            <div>
              <p class="font-medium text-secondary-2">Дата</p>
              <p class="font-medium">
                {{
                  $moment(flights.segments[0].departure.at)
                    .format("L")
                    .replaceAll(".", "/")
                }}
              </p>
            </div>
            <div>
              <p class="font-medium text-secondary-2">Время</p>
              <p class="font-medium">
                {{
                  flights.duration.slice(2).replace("M", "").replace("H", ":")
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-x-9 px-7 py-4">
        <div class="flex justify-between gap-x-9">
          <div>
            <h2 class="text-zero">Класс</h2>
            <p class="font-semibold">Эконом</p>
          </div>
          <div>
            <h2 class="text-zero">Пересадки</h2>
            <p class="font-semibold">1 пересадка(Дубай-048)</p>
          </div>
        </div>
        <div>
          <h2 class="text-zero">Тарифи</h2>
          <div class="flex gap-x-5">
            <div v-for="to in tarif" class="flex gap-x-3">
              <img :src="to.url" alt="Image" class="cursor-pointer" />
              <p class="font-semibold">{{ to.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["buyflights", "buyflightsImg", "img"],
  computed: {
    ...mapState({
      cur: (state) => state.page.currency.activeCurrency,
      exchange: (state) => state.api.currency,
    }),
  },
  data() {
    return {
      isList: false,
      direc: ["Туда", "Обратно"],
      tarif: [
        {
          url: "/images/briefcase.svg",
          text: "С багажом",
        },
        {
          url: "/images/refresh-ccw.svg",
          text: "Возврат",
        },
        {
          url: "/images/dollar-sign.svg",
          text: "Обмен",
        },
      ],
    };
  },
};
</script>
<style scoped>
.icon {
  fill: #4c95ff;
}
.startAiroport:hover .startAiroport-bottomContent {
  transition: all 0.3s ease;
  background-color: #777;
}
.startAiroport:hover .startAiroport-hint {
  display: block;
  transition: all 0.3s ease;
}
.startAiroport-hint {
  display: none;
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translate(-50%, 0);
}

@media screen and (max-width: 770px) {
  .w-max {
    top: 4rem;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .mob-s {
    flex-direction: column;
  }
  .rule {
    padding-bottom: 20px;
    border-bottom: 1px dashed #dedede;
  }
  .mob-s > div:last-child {
    width: 100%;
  }
  .mob-buy {
    padding: 0;
    width: 100%;
    border: 0;
  }
  .startAiroport {
    margin-right: 14px;
  }
  .mob-buy > div p {
    font-size: 15px;
  }
  .rule {
    margin-top: 100px;
  }
  .rule .h-fit {
    width: 48px;
  }
}
@media screen and (max-width: 411px) {
  .mob-buy {
    padding: 0;
  }
}
</style>
