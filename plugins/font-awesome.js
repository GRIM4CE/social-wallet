import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.config = {
  autoAddCss: false
}

// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(solid, brands)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
