<template>
  <div v-if="isTooSmall" class="screen-guard">
    <div class="screen-guard__stars"></div>

    <div class="screen-guard__content">
      <img
        class="screen-guard__logo"
        :src="$img('/Interfaces/Accueil/starcraft_title.webp')"
        alt="Starcraft"
      />
      <p class="screen-guard__subtitle">- Le Jeu de Plateau -</p>

      <div class="screen-guard__divider"></div>

      <p class="screen-guard__message">
        Ce site est optimisé pour une résolution<br />
        minimale de <strong>1800 × 900 px</strong>.
      </p>
      <p class="screen-guard__resolution">
        Résolution actuelle : <strong>{{ width }} × {{ height }} px</strong>
      </p>
      <p class="screen-guard__hint">
        Veuillez agrandir votre fenêtre ou utiliser un écran plus large.
      </p>
    </div>
  </div>
</template>

<script>
const MIN_WIDTH = 1800;

export default {
  name: 'ScreenGuard',
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  computed: {
    isTooSmall() {
      return this.width < MIN_WIDTH;
    },
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  created() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
.screen-guard {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #05090f;
  background-image: var(--bg-etoiles);
  font-family: 'univers', sans-serif;
  color: #c9daea;
  text-align: center;
}

.screen-guard__stars {
  position: absolute;
  inset: 0;
  background-image: var(--bg-constellations);
  background-repeat: no-repeat;
  opacity: 0.35;
  pointer-events: none;
}

.screen-guard__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 2rem;
  max-width: 520px;
}

.screen-guard__logo {
  max-width: 340px;
  width: 80vw;
}

.screen-guard__subtitle {
  font-size: 1rem;
  letter-spacing: 0.15em;
  color: #7ba7c2;
  margin: 0;
}

.screen-guard__divider {
  width: 160px;
  height: 1px;
  background: linear-gradient(to right, transparent, #4a8ab5, transparent);
  margin: 0.8rem 0;
}

.screen-guard__message {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #c9daea;
  margin: 0;
}

.screen-guard__resolution {
  font-size: 0.9rem;
  color: #7ba7c2;
  margin: 0;
}

.screen-guard__hint {
  font-size: 0.85rem;
  color: #506070;
  margin: 0.4rem 0 0;
}

strong {
  color: #e8f4ff;
}
</style>
