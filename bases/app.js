const app = Vue.createApp({
  data() {
    return {
      quote: `I'm batman`,
      author: "Bruce Wayne",
    };
  },
  methods: {
    changeAuthor() {
        this.author = 'Superman'
    },
    capitalize() {
        this.quote = this.quote.toUpperCase()
    }
  },
});

app.mount("#myApp");
