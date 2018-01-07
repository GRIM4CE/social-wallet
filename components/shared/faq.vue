<template lang="html">
  <div class="faq" :class="{active : isActive}">
    <h2 class="faq-question" @click="toggleAnswer"><i class="fa faq-icon" :class="{'fa-minus' : isActive, 'fa-plus' : !isActive}"></i>{{faq.question}}</h2>
    <p class="faq-answer">{{faq.answer}}</p>
  </div>
</template>

<script>
export default {
  props: ['faq'],
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleAnswer () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
  .faq {
    margin-bottom: .5rem;

    &.active {
      .faq-icon {
        color: $primary400;
      }
      .faq-answer {
        display: block;
      }
    }
  }

  .faq-question {
    &:hover {
      cursor: pointer;

      .faq-icon {
        color: $primary400;
      }
    }
  }

  .faq-answer {
    display: none;
    margin: .5rem 0 0;
    margin-left: 3rem;
  }

  .faq-icon {
    margin-right: 1rem;
  }
</style>
