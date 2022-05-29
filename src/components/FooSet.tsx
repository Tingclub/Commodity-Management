import { defineComponent } from '@vue/runtime-core'

interface PropsType {
  msg: String
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = 99
    return (props : PropsType) => {
      (
        <div>
          <span>{props.msg}</span>
          <span>{count}</span>
        </div>
      )
    }
  }
})
