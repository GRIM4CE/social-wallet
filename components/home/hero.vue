<template lang="html">
  <section id="home" class="hero">
    <div class="hero-opacity"></div>
    <div class="hero-content">
      <img class="hero-logo" src="~/static/logo.svg" alt="">
      <h2 class="hero-header">Join our Pre-sale</h2>
      <a class="hero-cta" href="#">Buy Now</a>
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
    height: 100vh;
    background-image: url("~/static/hero.png");
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
    background-color: rgba($black, .3);
}

.hero-content {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    z-index: 1;
}

.hero-logo {
    width: 100%;
    max-width: 600px;
}

.hero-header {
    width: 100%;
    margin: 1rem 0;
    color: $white;
    font-size: 36px;
    font-weight: 300;
    text-align: center;
}

.hero-cta {
    padding: .5rem 5rem;
    background-color: $primary400;
    color: $white;
    text-decoration: none;
}
</style>
