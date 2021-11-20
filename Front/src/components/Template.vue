<template>
  <div class="post">
    {{ comment }}
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    post(text) {
      console.log(text);
      this.$socket.emit('post', text);
    }
  },
  sockets: {
    posts: (posts) => {
      console.log(posts);
    }
  },
  watch: {
    comment(text) {
      this.post(text);
    }
  }
};
</script>
