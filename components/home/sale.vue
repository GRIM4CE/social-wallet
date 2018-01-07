<template lang="html">
  <section id="sale" class="section">
    <h2 class="section-header">Join our Pre-sale</h2>
      <p class="sale-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Fuga inventore id earum, voluptates consequatur enim</p>
      <div class="sale-bar">
        <div class="sale-bar-fill"></div>
      </div>
      <span class="sale-call-out"><strong class="sold-number">{{coinSold}}</strong> out of <strong class="total-number">15,000,000</strong> coins sold</span>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      coinSold: 784
    }
  }
}
</script>

<style lang="scss" scoped>
.sale-text {
    font-weight: 600;
    text-align: center;
}

.sale-bar {
    width: 100%;
    max-width: 1000px;
    height: 20px;
    margin: 2rem auto;
    border: 1px solid $gray600;
    border-radius: 25px;
    background-color: $gray400;
    overflow: hidden;
}

.sale-bar-fill {
    width: 20%;
    height: 100%;
    background-color: $secondary400;
}

.sale-call-out {
  display: block;
  font-size: 24px;
  text-align: center;
}

.sold-number {
  color: $secondary400;
}

.total-number {
  color: $primary400;
}
</style>
