<template lang="html">
  <section id="home" class="hero">
    <div class="hero-opacity"></div>
    <div class="hero-content">
      <img class="hero-logo" src="~/static/logo-new.svg" alt="">
      <h2 class="hero-header">Join our Pre-sale</h2>
      <div class="hero-cta-container">
        <a class="hero-cta" href="#">Pre-Sale</a>
        <a class="hero-cta" href="#">Whitepaper</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;
    background-image: url("~/static/banner.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.hero-opacity {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($black, .8);
}

.hero-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 52px;
    z-index: 1;
}

.hero-logo {
    width: 80%;
    max-width: 400px;
    margin-top: 1rem;
}

.hero-header {
    width: 100%;
    margin: 1rem 0;
    color: $white;
    font-size: 36px;
    font-weight: 300;
    text-align: center;
}

.hero-cta-container {
  margin-top: 1rem;
}

.hero-cta {
  @extend %outline-button;
  margin: .5rem;
}

@media all and (min-width: 37.5rem) {
  .hero {
    align-items: center;
  }

  .hero-content {
    margin-top: 0;
  }

  .hero-logo {
      width: 100%;
  }

  .hero-header {
      margin: 1rem 0;
  }

  .hero-cta {
    margin: 1rem;
  }
}
</style>
