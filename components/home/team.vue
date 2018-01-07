<template lang="html">
  <section id="team" class="section layout-col4 background-dark">
    <h2 class="section-header layout-col4-full">Our Team</h2>
    <teamMember v-for="(member, index) in members" :key="index" :member="member"></teamMember>
  </section>
</template>

<script>
import teamMember from '../shared/team-member.vue'

export default {
  components: {
    teamMember
  },
  data: function () {
    return {
      members: [
        {
          name: 'name',
          title: 'title',
          headshot: 'headshot.jpg',
          bio:
            're praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse doloremque ducimus. Deserunt fugiat minus doloribus aspernatur autem nesciunt earum rem iste, sequi'
        },
        {
          name: 'name',
          title: 'title',
          headshot: 'headshot.jpg',
          bio:
            're praesentium quas quae officiis! Soluta eligendi libero debitis distinctio officia autem, dolorum esse doloremque ducimus. Deserunt fugiat minus doloribus aspernatur autem nesciunt earum rem iste, sequi'
        },
        {
          name: 'name',
          title: 'title',
          headshot: 'headshot.jpg',
          bio:
            're praesentium quas quae officiis! Soluta eligendi libero debitis distinctio officia autem, dolorum esse doloremque ducimus. Deserunt fugiat minus doloribus aspernatur autem nesciunt earum rem iste, sequi'
        },
        {
          name: 'name',
          title: 'title',
          headshot: 'headshot.jpg',
          bio:
            're praesentium quas quae officiis! Soluta eligendi libero debitis distinctio officia autem, dolorum esse doloremque ducimus. Deserunt fugiat minus doloribus aspernatur autem nesciunt earum rem iste, sequi'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
