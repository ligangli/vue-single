<template>
  <div class="new">
    <h1>This is an new page</h1>
    <p>{{ valA }}</p>
    <input type="checkbox" :checked="checked" @change="change" />
    <button @click="btn">点击</button>
    <input type="text" v-model="inputVal" />
  </div>
</template>
<script lang="ts">
import '../assets/common.scss'
import { Component, Vue, Model, Emit, Watch } from 'vue-property-decorator'
@Component
export default class New extends Vue {
  private inputVal: string = ''
  /* 计算属性 */
  get valA() {
    let str = '1234'
    return str.substring(0)
  }
  @Model('change', {
    type: Boolean
  })
  checked!: boolean
  @Emit('change')
  change(e: MouseEvent) {
    console.log(e)
  }
  created() {
    // store状态
    this.$store.commit('IsShow', 'true')
    /* 开发development  线上：production*/
    console.log('11111111111111:' + process.env.NODE_ENV)
    console.log(this)
  }
  btn() {
    console.log(this.$store.state.isShow)
    let data = {
      'str': '123'
    }
    this.$router.push({ name: 'about', query: data })
  }

  /* 监听数据变化 */
  @Watch('inputVal')
  onInput(val: string, oldVal: string) {
    console.log('1111:' + val, '222:' + oldVal)
  }
}
</script>
