<template lang="html">
  <div @click="toggleMember()" class="member-container" :class='{active : isActive}'>
    <img class="member-headshot" :src="member.headshot" :alt="member.name">
    <span class="member-name">{{ member.name }}</span>
    <span class="member-title">{{ member.title }}</span>
    <div class="member-description-container" :class='{active : isActive}'>
      <p class="member-bio">{{ member.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false
    }
  },
  props: ['member'],
  methods: {
    toggleMember () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.member-container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;

  &:hover,
  &.active {
    .member-headshot {
      border-color: $secondary400;
    }
  }
}

.member-headshot {
  max-width: 200px;
  border: 5px solid $primary400;
  border-radius: 100%;

  &[data-state='active'] {
    border-color: $secondary400;
  }
}

.member-name {
  width: 100%;
  margin: .75rem 0 .25rem;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.member-title {
  width: 100%;
  color: $primary300;
  font-size: 18px;
  text-align: center;
}

.member-description-container {
  display: none;
  position: absolute;
  bottom: -190px;
  width: 100%;
  background-color: $white;
  box-shadow: 0 2px 2px rgba($black, .4);

  &.active {
    display: block;
  }

  &::before {
    position: absolute;
    top: -56px;
    right: 0;
    left: 0;
    margin: 0 auto !important;
    color: $white;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 100px;
    text-align: center;
    content: '\f0d8';
  }
}

.member-bio {
  margin: 0;
  padding: .5rem 1rem;
  color: $black;
}
</style>
