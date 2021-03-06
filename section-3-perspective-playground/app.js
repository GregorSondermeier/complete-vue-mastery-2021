const initialValues = {
  perspective: 150,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
}

const app = Vue.createApp({
  data() {
    return {
      ...initialValues
    };
  },

  computed: {
    getBoxStyle() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `,
      };
    }
  },

  methods: {
    copy() {
      const sanitizedBoxStyle = this.getBoxStyle.transform
        .trim()
        .replace(/\s+/g, ' ');
      const valueToCopy = `transform: ${sanitizedBoxStyle};`
      navigator.clipboard.writeText(valueToCopy);
    },
    reset() {
      Object.keys(initialValues).forEach((key) => {
        this[key] = initialValues[key];
      });
    },
  },

  template: `
    <h2>CSS3 Perspective Playground</h2>
    <main>
    <section class="settings">
      <div class="settings-container">
        <label>
          perspective: {{ perspective }}px;
          <input
            type="range"
            min="0"
            max="999"
            v-model="perspective"
          />
        </label>

        <label>
          rotateX: {{ rotateX }}deg;
          <input
            type="range"
            min="-180"
            max="180"
            v-model="rotateX"
          />
        </label>

        <label>
          rotateY: {{ rotateY }}deg;
          <input
            type="range"
            min="-180"
            max="180"
            v-model="rotateY"
          />
        </label>

        <label>
          rotateZ: {{ rotateZ }}deg;
          <input
            type="range"
            min="-180"
            max="180"
            v-model="rotateZ"
          />
        </label>

        <button type="button" @click.prevent="reset">Reset</button>
        <button type="button" @click.prevent="copy">Copy</button>
      </div>
    </section>

    <section class="output">
      <div class="box-container">
        <div class="box" :style="getBoxStyle"></div>
      </div>
    </section>
    </main>`,
});

const vm = app.mount('#app');