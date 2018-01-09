<template lang="html">
  <section id="roadmap" class="section section-round background-dark-gray">
    <h2 class="section-header">Roadmap</h2>
    <img class="roadmap-img" src="roadmap.svg" alt="">
    <img class="roadmap-img-mobile" src="roadmap-vert.svg" alt="">
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.roadmap-img {
  display: none;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.roadmap-img-mobile {
  width: 100%;
}

@media all and (min-width: 37.5rem) {
  .roadmap-img {
    display: inherit;
  }

  .roadmap-img-mobile {
    display: none;
  }
}
</style>
