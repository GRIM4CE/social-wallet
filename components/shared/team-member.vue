<template lang="html">
  <div class="member-container">
    <img class="member-headshot" :src="member.headshot" :alt="member.name">
    <span class="member-name">{{ member.name }}</span>
    <span class="member-title">{{ member.title }}</span>
    <a class="linkedin-link" href="#" target="_blank">
      <font-awesome-icon class="linkedin-icon" :icon="['fab', 'linkedin-in']" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['member']
}
</script>

<style lang="scss" scoped>
.member-container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  transition: box-shadow .5s, transform .5s;
  border-radius: 25px;
  background-color: $white;
  box-shadow: 0 2px 2px rgba($black, .4);
  overflow: hidden;


  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 4px 4px rgba($black, .2);
  }
}

.member-headshot {
  width: 100%;
}

.member-name {
  width: 100%;
  margin: .75rem 0 .25rem;
  color: $black;
  font-size: 18px;
  font-weight: 400;
  font-weight: 600;
  text-align: center;
}

.member-title {
  width: 100%;
  color: $primary400;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}

.linkedin-link {
  margin: 1rem;
}

.linkedin-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 100%;
  background-color: $primary400;
  color: $white;
}
</style>
