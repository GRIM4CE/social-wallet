<template lang="html">
  <section id="about" class="section layout-col2 background-dark">
    <h2 class="section-header layout-col2-full">About Social Wallet</h2>
    <div class="col2 illustration-container">
      <img class="icon-image" src="~/static/wallet.svg" alt="">
    </div>
    <div class="col2">
      <h2 class="text-head center">Social Wallet</h2>
      <h3 class="text-subhead center">A wallet without boundaries</h3>
      <p>Social Wallet has built a platform that allows one social media account to send cryptocurrency to another social media account, even if the recipient is not expecting it or has never heard of it. Simply by knowing an individual or group's social media user name, you can send them currency in a matter of seconds. It is fast, secure, and easy to use. No technical expertise is required by the sender and no prior setup or notification is required by the person receiving the cryptocurrency.</p>
    </div>
    <div class="col2">
      <h2 class="text-head center">Social Token</h2>
      <h3 class="text-subhead center">A new kind of coin</h3>
      <p>Social Wallet allows for the quick and easy transfer of money on social media by using a cryptocurrency token. This utility token is called the Money Token and this is what enables the social media platform to send money from one person to another. Simply purchase the dollar amount of tokens you would like to send to someone and with a few simple clicks they will have your funds. Once the person receiving the funds has taken possession of the token they can then Share as much or as little of the token with others on social media. Our platform allows the person sending the token to divide the token into any amount they want. For instance if you have $100 worth of tokens, you could send somebody any amount of the token you desire, ranging from less than a penny all the way up to the full $100 that you own. You can purchase the Share token in our token sale.</p>
    </div>
    <div class="col2 illustration-container">
      <img class="icon-image" src="~/static/token.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-image {
    width: 100%;
    height: 300px;
    margin-bottom: 4rem;
    background-color: $primary400;
}

.illustration-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-image {
  width: 100%;
  max-width: 350px;
}
</style>
