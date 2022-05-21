import { defineComponent} from 'vue'
export default defineComponent({
    props: {
        msg: String
    },
    render(){
        <div>
            {this.msg}
        </div>
    }

})