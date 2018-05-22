import Vue from 'vue'
import { makeHot, reload } from './util/hot-reload'
import { createRouter } from './router'
import { MdInput, MdField } from 'vue-material/dist/components'

import './sass/main.scss'

const HeadingComponent = () => import('./components/heading').then(({ HeadingComponent }) => HeadingComponent)
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent)

if (process.env.ENV === 'development' && module.hot) {
  const headingModuleId = './components/heading'

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(headingModuleId, HeadingComponent,
    module.hot.accept('./components/heading', () => reload(headingModuleId, (require('./components/heading') as any).HeadingComponent)))
}

Vue.use(MdField)

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'heading': HeadingComponent,
    'md-field': MdField,
    'md-input': MdInput
  }
})
