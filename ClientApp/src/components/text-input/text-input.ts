import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  template: require('./text-input.html'),
})
export class TextInputComponent extends Vue {
  @Prop() label : string = ""

  constructor () {
    super()

  }

}
