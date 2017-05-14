<template lang="html">
  <div id="user">
    <ul>
      <li>{{userData.id}}</li>
      <li>{{userData.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: ['data'],
  computed: {
    userData() {
      return this.data
    }
  }
}
</script>

<style lang="css">
</style>
