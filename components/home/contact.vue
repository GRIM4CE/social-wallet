<template lang="html">
  <section id="contact" class="section layout-col2">
    <h2 class="section-header layout-col2-full">Get in Touch</h2>
    <div class="col2 contact-container">
      <h2 class="text-head">Contact Support</h2>
      <p>Please contact us at <a href="mailto:support@socialwallet.com">support@socialwallet.com</a></p>
      <h2 class="text-head">Buy into Social Wallet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore id earum, voluptates conseqtur perferendis debitis labore <a chref="#">cta link here</a></p>
      <h2 class="text-head">Check us out on Social Media</h2>
      <li class="social-li">
        <a class="social-links" target="_blank" href="https://www.facebook.com/SocialWalletInc/"><font-awesome-icon class="social-icons" :icon="['fab', 'facebook-f']" /> Facebook</a>
      </li>
      <li class="social-li">
        <a class="social-links" target="_blank" href="https://twitter.com/SocialWalletInc"><font-awesome-icon class="social-icons" :icon="['fab', 'twitter']" /> Twitter</a>
      </li>
      <li class="social-li">
        <a class="social-links" target="_blank" href="https://discord.gg/RQ6j6pp"><font-awesome-icon class="social-icons" :icon="['fab', 'discord']" />Discord</a>
      </li>
    </div>
    <div class="col2 form-container">
      <h2 class="text-head">Send a Message</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" name="name">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" name="email">
        </div>
        <div class="form-group">
          <label for="org">Organization:</label>
          <input type="text" name="org">
        </div>
        <div class="form-group">
          <label for="reason">Reason for Inquery:</label>
          <input type="text" name="reason">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea name="message" rows="8"></textarea>
        </div>
        <button class="form-button" type="button" name="button">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .contact-container {
    margin-bottom: 1rem;
  }

  .text-head {
    margin-bottom: .5rem;
  }

  .social-li {
    margin-bottom: 1rem;
    list-style: none;
  }

  a {
    color: $primary400;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $primary300;
    }
  }

  .social-links {
    display: flex;
    align-items: center;
  }

  .social-icons {
    width: 20px;
    margin-right: 1rem;
    font-size: 18px;
  }

  .contact-form {
    display: flex;
    flex-wrap: wrap;
  }

  .form-button {
    margin-left: auto;
  }

  @media all and (min-width: 37.5rem) {
    .form-container {
      grid-row: 2;
      grid-column: 1;
    }

    .contact-container {
      margin: 0;
      grid-row: 2;
      grid-column: 2;
    }
  }
</style>
