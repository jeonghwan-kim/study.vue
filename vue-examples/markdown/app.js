document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#editor',
    data: {
      input: '# hello'
    },
    computed: {
      compiledMarkdown: function() {
        console.log(this.input.toUpperCase());
        return this.input.toUpperCase();
      },
    },
    methods: {
      update: function(e) {
        console.log(e.target)
      }
    }
  })
})
