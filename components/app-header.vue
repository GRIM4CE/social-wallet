<template lang="html">
  <header>
    <img class="header-logo" @click="scroll('home')" src="~/static/logo-header.svg" alt="Social Wallet">
    <nav>
      <a href="#">Whitepaper</a>
      <a @click="scroll('about')">About</a>
      <a @click="scroll('sale')">Sale</a>
      <a @click="scroll('team')">Team</a>
      <a @click="scroll('faq')">FAQ</a>
      <a @click="scroll('roadmap')">Roadmap</a>
      <a @click="scroll('contact')">Contact Us</a>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    scroll (section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 1rem;
    background-color: rgba($white, .9);
    z-index: 10;
}

.header-logo {
    max-height: 30px;
    margin-right: auto;
}

nav {
    display: inline-block;
}

a {
    padding-left: 1rem;
    color: $black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: $primary400;
    }
}
</style>
