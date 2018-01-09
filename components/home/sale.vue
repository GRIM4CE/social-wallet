<template lang="html">
  <section id="sale" class="section">
    <h2 class="section-header">Join our Pre-sale</h2>
      <p class="sale-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Fuga inventore id earum, voluptates consequatur enim</p>
      <div class="sale-bar">
        <div :style="{width : tokenSold / totalTokens * 100 + '%'}" class="sale-bar-fill"></div>
        <div class="sale-bar-shadow"></div>
      </div>
      <span class="sale-call-out"><strong class="sold-number">{{tokenSold.toLocaleString('en')}}</strong> out of <strong class="total-number">{{totalTokens.toLocaleString('en')}}</strong> Tokens sold</span>
      <div class="cta-container">
        <a class="cta-button" href="#">Buy Now</a>
      </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      tokenSold: 15000000 - 12113100,
      totalTokens: 15000000
    }
  },
  created () {
    axios.get(`http://104.207.140.17/api/remainingcoins`).then(response => {
      this.tokenSold = 15000000 - response.data
    })
  }
}
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    background-color: $secondary400;
  }

  50% {
    background-color: $secondary300;
  }

  100% {
    background-color: $secondary400;
  }
}

.sale-text {
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
}

.sale-bar {
    position: relative;
    width: 100%;
    max-width: 1000px;
    height: 30px;
    margin: 2rem auto;
    border-radius: 25px;
    background-color: $gray200;
    overflow: hidden;
}

.sale-bar-shadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  border: 1px solid $gray400;
  border-radius: 25px;
  box-shadow: inset 0 0 3px 2px rgba($white, .8);
  z-index: 2;
}

.sale-bar-fill {
    height: 100%;
    background-color: $secondary400;
    box-shadow: 1px 0 2px rgba($black, .2), inset 0 0 1px 1px rgba($white, .4);
    animation: pulse infinite 4s;
}

.sale-call-out {
  display: block;
  font-size: 24px;
  text-align: center;
}

.sold-number {
  color: $primary300;
}

.total-number {
  color: $primary400;
}

.cta-container {
  display: flex;
  justify-content: center;
}

.cta-button {
  @extend %button;
  margin-top: 1rem;
}
</style>
