<template lang="jade">
  #search-form
    div {{msg}}
    form
      input(type="text" name="" value="")
      input(type="submit" value="Search")
</template>

<script>
export default {
  name: 'search-form',
  data () {
    return {
      msg: "msg"
    }
  }
}
</script>

<style>

</style>
