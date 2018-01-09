<template lang="html">
  <section id="faq" class="section">
    <h2 class="section-header">FAQ's</h2>
    <div class="topic-container">
      <a class="topic-link"
        :class="{active : topicSelection == 'token'}"
        @click="selectTopic('token')">Token</a>
      <a class="topic-link"
        :class="{active : topicSelection == 'wallet'}" @click="selectTopic('wallet')">Wallet</a>
      <a class="topic-link"
        @click="selectTopic('platform')"
        :class="{active : topicSelection == 'platform'}">Platform</a>
    </div>
    <div class="faq-container">
      <faq v-for="(faq, index) in faqs" :key="index" :faq="faq" v-if="topicSelection == faq.type"/>
    </div>
  </section>
</template>

<script>
import faq from '../shared/faq.vue'

export default {
  data: function () {
    return {
      topicSelection: 'token',
      faqs: [
        {
          question: 'What is Social Wallet?',
          answer: `Social Wallet has built a platform that allows one social media account to send cryptocurrency to another social media account, even if the recipient is not expecting it or has never heard of it. Simply by knowing an individual or group's social media user name, you can send them currency in a matter of seconds. It is fast, secure, and easy to use. No technical expertise is required by the sender and no prior setup or notification is required by the person receiving the cryptocurrency.`,
          type: 'token'
        },
        {
          question: 're praesentium quas quae officiis asd asdasdasdasdasdasdasdsd asd adasd?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do`,
          type: 'token'
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do epellendus dicta nostrum, iste recusandae rem laborum explicabo vel dolorum ipsa. Quod maxime, nemo necessitatibus debitis facere id an`,
          type: 'token'
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do`,
          type: 'wallet'
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do epellendus dicta nostrum, iste recusandae rem laborum explicabo vel dolorum ipsa. Quod maxime, nemo necessitatibus debitis facere id an`,
          type: 'wallet'
        },
        {
          question: 'What is Social Wallet?',
          answer: `Social Wallet has built a platform that allows one social media account to send cryptocurrency to another social media account, even if the recipient is not expecting it or has never heard of it. Simply by knowing an individual or group's social media user name, you can send them currency in a matter of seconds. It is fast, secure, and easy to use. No technical expertise is required by the sender and no prior setup or notification is required by the person receiving the cryptocurrency.`,
          type: 'platform'
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do epellendus dicta nostrum, iste recusandae rem laborum explicabo vel dolorum ipsa. Quod maxime, nemo necessitatibus debitis facere id an`,
          type: 'platform'
        }
      ]
    }
  },
  methods: {
    selectTopic (topic) {
      this.topicSelection = topic
    }
  },
  components: {
    faq
  }
}
</script>

<style lang="scss" scoped>
.faq-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.topic-container {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.topic-link {
  margin: 0 .5rem;
  padding: .25rem 1rem;
  border: 1px solid $gray400;
  border-radius: 50px;
  color: $gray600;
  font-size: 14px;
  cursor: pointer;

  &.active {
    border-color: $gray600;
    color: $black;
  }
}

@media all and (min-width: 37.5rem) {
  .topic-link {
    margin: 0 1rem;
    padding: .25rem 1.5rem;
    font-size: 16px;
  }
}
</style>
