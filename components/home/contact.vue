<template lang="html">
  <section id="contact" class="section layout-col2">
    <h2 class="section-header layout-col2-full">Get in Touch</h2>
    <div class="col2">
      <h2 class="text-head">Send a Message</h2>
      <form class="">
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
        <button type="button" name="button">Submit</button>
      </form>
    </div>
    <div class="col2">
      <h2 class="text-head">Contact Support</h2>
      <p>Please contact us at <a href="mailto:support@socialwallet.com">support@socialwallet.com</a></p>
      <h2 class="text-head">Buy into Social Wallet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore id earum, voluptates conseqtur perferendis debitis labore <a href="#">cta link here</a></p>
      <h2 class="text-head">Check us out on Social Media</h2>
      <li class="social-li"><a class="social-links" href="#"><i class="social-icons fa fa-facebook"></i>Facebook</a></li>
      <li class="social-li"><a class="social-links" href="#"><i class="social-icons fa fa-twitter"></i>Twitter</a></li>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .form-group {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  label,
  input,
  textarea {
    width: 100%;
  }

  label {
    margin-bottom: .5rem;
    font-size: 16px;
  }

  input {
    padding: .5rem;
    border: 1px solid $gray300;
    border-radius: 3px;
    outline: 0;
    font-size: 16px;
    box-shadow: 0;

    &:active,
    &:focus {
      border-color: $primary400;
    }
  }

  textarea {
    padding: .5rem;
    border: 1px solid $gray300;
    border-radius: 3px;
    font-size: 16px;
    resize: none;

    &:active,
    &:focus {
      border-color: $primary400;
    }
  }

  button {
    padding: .5rem 1.5rem;
    transition: .5s background-color;
    border: 0;
    background-color: $primary400;
    color: $white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: $primary300;
    }
  }

  .text-head {
    margin-bottom: .5rem;
  }

  .social-li {
    margin-bottom: 1rem;
    list-style: none;
  }

  .social-links {
    color: $primary400;
    text-decoration: none;
  }

  .social-icons {
    width: 30px;
  }
</style>
