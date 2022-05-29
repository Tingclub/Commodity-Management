import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 1
    }
  },
  // 采用了组合式api
  render () {
    return (
      <div>有状态组件之{this.msg}
        <p>{this.count}</p>
      </div>
    )
  }
})
