<template lang="html">
  <section id="faq" class="section">
    <h2 class="section-header">FAQ's</h2>
    <div class="faq-container">
      <faq v-for="(faq, index) in faqs" :key="index" :faq="faq"/>
    </div>
  </section>
</template>

<script>
import faq from '../shared/faq.vue'

export default {
  data: function () {
    return {
      faqs: [
        {
          question: 'What is Social Wallet?',
          answer: `Social Wallet has built a platform that allows one social media account to send cryptocurrency to another social media account, even if the recipient is not expecting it or has never heard of it. Simply by knowing an individual or group's social media user name, you can send them currency in a matter of seconds. It is fast, secure, and easy to use. No technical expertise is required by the sender and no prior setup or notification is required by the person receiving the cryptocurrency.`
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do`
        },
        {
          question: 're praesentium quas quae officiis?',
          answer: `re praesentium quas quae officiis! Soluta eligendi libero debitis distinctiofficia autem, dolorum esse do epellendus dicta nostrum, iste recusandae rem laborum explicabo vel dolorum ipsa. Quod maxime, nemo necessitatibus debitis facere id an`
        }
      ]
    }
  },
  components: {
    faq
  }
}
</script>

<style lang="scss" scoped>
.faq-container {
  width: 800px;
  margin: 0 auto;
}
</style>
