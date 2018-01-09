<template lang="html">
  <header>
    <img class="header-logo" @click="scroll('home')" src="~/static/logo-header.svg" alt="Social Wallet">
    <nav class="section-nav" :class="{active : mobileMenu}">
      <a @click="scroll()" href="#">Whitepaper</a>
      <a @click="scroll('about')">About</a>
      <a @click="scroll('sale')">Sale</a>
      <a @click="scroll('team')">Team</a>
      <a @click="scroll('faq')">FAQ</a>
      <a @click="scroll('roadmap')">Roadmap</a>
      <a @click="scroll('contact')">Contact Us</a>
      <nav class="social-nav-mobile">
        <a target="_blank" href="https://www.facebook.com/SocialWalletInc/">
          <font-awesome-icon class="social-icons" :icon="['fab', 'facebook-f']" />
        </a>
        <a target="_blank" href="https://twitter.com/SocialWalletInc">
          <font-awesome-icon class="social-icons" :icon="['fab', 'twitter']" />
        </a>
        <a target="_blank" href="https://discord.gg/RQ6j6pp">
          <font-awesome-icon class="social-icons" :icon="['fab', 'discord']" />
        </a>
      </nav>
    </nav>
    <nav class="social-nav">
      <a target="_blank" href="https://www.facebook.com/SocialWalletInc/">
        <font-awesome-icon class="social-icons" :icon="['fab', 'facebook-f']" />
      </a>
      <a target="_blank" href="https://twitter.com/SocialWalletInc">
        <font-awesome-icon class="social-icons" :icon="['fab', 'twitter']" />
      </a>
      <a target="_blank" href="https://discord.gg/RQ6j6pp">
        <font-awesome-icon class="social-icons" :icon="['fab', 'discord']" />
      </a>
    </nav>
    <font-awesome-icon @click="toggleMobileMenu()" :class="{active : mobileMenu}" class="mobile-menu-button" :icon="['fas', 'bars']" />
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      mobileMenu: false
    }
  },
  methods: {
    scroll (section) {
      if (section) {
        document.getElementById(section).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      this.mobileMenu = false
    },
    toggleMobileMenu () {
      console.log('hey')
      this.mobileMenu = !this.mobileMenu
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
    background-color: rgba($black, .9);
    z-index: 10;
}

.header-logo {
    max-height: 25px;
    margin: 0 1rem;
    margin-right: auto;
}

.mobile-menu-button {
  margin: 0 1rem;
  color: $white;

  &:hover,
  &.active {
      color: $primary400;
  }
}

.section-nav {
  display: none;
  position: fixed;
  top: 40px;
  width: 100%;
  margin: 0;
  padding: 1rem;
  background-color: $white;

  &.active {
    display: block;
  }

  a {
    display: flex;
    justify-content: center;
    margin: 2rem 0 1rem;
    color: $black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: $primary400;
    }
  }
}

.social-nav {
  display: none;
}

.social-nav-mobile {
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    margin: 1rem 2rem;
    font-size: 18px;
  }
}

.social-icons {
  &:hover {
    color: $primary400;
  }
}

@media all and (min-width: 37.5rem) {
  .mobile-menu-button {
    display: none;
  }

  .section-nav {
    display: inline-block;
    position: relative;
    top: inherit;
    width: auto;
    margin: 0 1rem;
    padding: 0;
    background-color: transparent;

    a {
      display: inline-block;
      margin: 0;
      padding: 0 1rem;
      color: $white;
    }
  }

  .social-nav {
    display: inherit;
    margin: 0 1rem;
    margin-left: auto;

    a {
      display: inline-block;
      margin: 0;
      padding-left: 1rem;
      color: $white;
    }
  }

  .social-nav-mobile {
    display: none;
  }
}
</style>
