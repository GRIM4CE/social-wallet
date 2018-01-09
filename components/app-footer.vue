<template lang="html">
  <footer>
    <h6>© {{date.getFullYear()}} Social Wallet</h6>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: $black;
    color: $white;
  }

  h6 {
    font-size: 12px;
    font-weight: 300;
  }
</style>
