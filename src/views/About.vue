<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <button @click="jump">点击</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class About extends Vue {
  count: number = 0
  jump() {
    history.go(-1)
  }
  created() {
    console.log(this.$route.query)
  }
}
</script>
