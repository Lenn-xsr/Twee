import { mapMutations } from 'vuex';

export default {
  methods: {
    addLike(postId) {
      console.log({ postId });
    },
    openPost(data) {
      document.body.style.overflow = 'hidden';
      if (data) {
        this.UPDATE_POST({
          open: true,
          data
        });
      }
    },
    closePost() {
      document.body.style.overflow = 'auto';
      this.UPDATE_POST({
        open: false,
        data: null
      });
    },
    ...mapMutations(['UPDATE_POST'])
  }
};
