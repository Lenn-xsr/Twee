<template>
  <section class="posts" v-if="posts">
    <div class="new-post">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/816450123210948649/847553723026505748/unknown.png"
          alt=""
        />
        <PostForm />
      </div>
    </div>
    <transition mode="out-in" name="list">
      <PostOpened
        v-if="postOpened.open && postOpened.data"
        :post="postOpened.data"
      />
    </transition>
    <transition-group mode="out-in" name="list" tag="div">
      <Post v-for="post in posts" :key="'post_' + post.id" :post="post">
        <Interactions :post="post" :key="'interaction_' + post.id" />
      </Post>
    </transition-group>
  </section>
  <Loading v-else />
</template>

<script>
import Post from "@/components/post/Post.vue";
import PostOpened from "@/components/post/PostOpened.vue";
import Interactions from "@/components/post/Interactions.vue";

import { mapState } from "vuex";
import PostForm from "../components/post/PostForm.vue";

export default {
  name: "Home",
  computed: {
    ...mapState(["postOpened", "posts"]),
  },
  components: {
    Post,
    Interactions,
    PostOpened,
    PostForm,
  },
};
</script>
<style scoped>
.new-post {
  width: clamp(300px, 100%, 600px);
  display: grid;
  padding: 15px;
  background-color: var(--background-ascent);
  margin: 10px 0;
  border-radius: 5px;
}

.new-post img {
  width: 50px;
  border-radius: 100%;
}

.new-post div {
  display: flex;
}

.new-post img {
  width: 50px;
  border-radius: 100%;
  height: 50px;
  margin-right: 12px;
}
</style>