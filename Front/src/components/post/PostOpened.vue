<template>
  <div class="opened-post">
    <section class="post-wrapper">
      <div class="close-post">
        <div class="close-content" @click="closePost">
          <div class="int-icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
              ></path>
            </svg>
          </div>
          <span>Sequência</span>
        </div>
      </div>
      <Post :post="post">
        <div class="open-interactions" :key="'open_post_' + post.id">
          <span v-if="post.replys.length"
            >{{ post.replys.length }} <small>Comentários</small></span
          >
          <span v-if="post.reposts.length"
            >{{ post.reposts.length }} <small>Repostagens</small></span
          >
          <span v-if="post.likes.length"
            >{{ post.likes.length }} <small>Curtidas</small></span
          >
        </div>
      </Post>
      <transition-group
        name="list"
        mode="out-in"
        class="replys"
        v-if="post.replys[0]"
      >
        <Post
          v-for="reply in post.replys"
          :key="'open_reply_' + reply.id"
          :post="reply"
        >
          <Interactions :post="reply" :key="'open_int_' + reply.id" />
        </Post>
      </transition-group>
    </section>
  </div>
</template>

<script>
import Post from "./Post.vue";
import Interactions from "./Interactions.vue";

import PostActions from "@/mixins/PostActions.js";

export default {
  name: "PostOpened",
  props: ["post"],
  mixins: [PostActions],
  components: { Post, Interactions },
};
</script>

<style scoped>
.opened-post {
  position: fixed;
  background-color: var(--background-primary);
  z-index: 10;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
}

.post-wrapper > article {
  margin-top: 52px;
}

.int-icon {
  color: rgb(29, 161, 242);
  cursor: pointer;
}

.close-content:hover .int-icon::before {
  content: " ";
  opacity: 0.1;
  background-color: currentColor;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 100%;
  padding: 5px;
  border-radius: 100%;
  transition: all 0.2s;
}

.close-post {
  position: fixed;
  height: 40px;
  width: inherit;
  border-bottom: 1px solid var(--border-fading);
  background-color: var(--background-ascent);
  font-weight: bold;
  margin-top: 5px;
  border-radius: 5px;
}

.close-content {
  display: flex;
  align-items: center;
  color: var(--text-primary);
  width: min-content;
  cursor: pointer;
}

.open-interactions {
  padding: 10px;
  margin-top: 10px;
  display: flex;
  border: 0px solid var(--border-fading);
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.open-interactions span {
  font-weight: bold;
  margin-right: 15px;
}

.open-interactions small {
  font-weight: normal;
  font-size: small;
}
</style>