<template>
<main>
  <hero/>
  <about/>
  <sale/>
  <team/>
  <faq/>
  <roadmap/>
  <contact/>
</main>
</template>

<script>
import hero from '~/components/home/hero.vue'
import about from '~/components/home/about.vue'
import sale from '~/components/home/sale.vue'
import team from '~/components/home/team.vue'
import faq from '~/components/home/faq.vue'
import roadmap from '~/components/home/roadmap.vue'
import contact from '~/components/home/contact.vue'

export default {
  components: {
    hero,
    about,
    sale,
    team,
    roadmap,
    faq,
    contact
  }
}
</script>

<style>
</style>
