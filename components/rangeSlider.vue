<template>
  <div class="range-slider">
    <div class="relative">
      <input type="range" min="0" max="1439" step="1" v-model="sliderMin" />
      <input type="range" min="0" max="1439" step="1" v-model="sliderMax" />
      <p class="absolute top-2 left-0 font-normal text-base-1 text-secondary-5">
        {{ minH }}:{{ minM }}
      </p>
      <p
        class="absolute top-2 right-0 font-normal text-base-1 text-secondary-5"
      >
        {{ maxH }}:{{ maxM }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minAngle: "0",
      maxAngle: "1439",
      minH: "00",
      minM: "00",
      maxH: 23,
      maxM: 59,
    };
  },
  computed: {
    sliderMin: {
      get() {
        var val = parseInt(this.minAngle);
        return val;
      },
      set(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
        this.minH = Math.trunc(this.minAngle / 60);
        if (this.minH === 0) {
          this.minH = "00";
        }
        if (this.minH <= 9 && this.minH != 0) {
          this.minH = "0" + this.minH;
        }
        this.minM = this.minAngle % 60;
        if (this.minM <= 9) {
          this.minM = "0" + this.minM;
        }
      },
    },
    sliderMax: {
      get() {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
        this.maxH = Math.trunc(val / 60);
        this.maxM = val % 60;
        if (this.maxM <= 9) {
          this.maxM = "0" + this.maxM;
        }
      },
    },
  },
};
</script>
<style scoped>
.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 16px;
}
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #e0e0e0;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #e0e0e0;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #e0e0e0;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  /* animate: 0.2s; */
  background: #e0e0e0;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 1222;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #e0e0e0;
  height: 16px;
  width: 16px;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}
</style>
