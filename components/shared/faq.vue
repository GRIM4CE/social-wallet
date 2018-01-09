<template lang="html">
  <div class="faq" :class="{active : isActive}">
    <div class="faq-question-container"  @click="toggleAnswer">
      <font-awesome-icon :class="{active : !isActive}" class="faq-icon" :icon="['fas', 'plus']" />
      <font-awesome-icon :class="{active : isActive}" class="faq-icon" :icon="['fas', 'minus']" />
      <span class="faq-question">
        {{faq.question}}
      </span>
    </div>
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

  .faq-question-container {
    display: flex;
    align-items: top;

    &:hover {
      cursor: pointer;

      .faq-icon {
        color: $primary400;
      }
    }
  }

  .faq-question {
    font-size: 18px;
  }

  .faq-answer {
    display: none;
    margin: .5rem 0 1.5rem;
    margin-left: 1rem;
    color: $gray600;
    font-size: 14px;
  }

  .faq-icon {
    display: none;
    margin-top: 8px;
    margin-right: 1rem;

    &.active {
      display: inline-block;
    }
  }

  @media all and (min-width: 37.5rem) {
    .faq-question {
      font-size: 22px;
    }

    .faq-answer {
      margin: .5rem 0 0;
      margin-left: 3rem;
      font-size: 16px;
    }
  }
</style>
