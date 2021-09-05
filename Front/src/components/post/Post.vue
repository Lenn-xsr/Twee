<template>
  <article class="post-wrapper" :data-id="post.id" :key="post.id">
    <img :src="post.user.avatar" :alt="'Avatar de ' + post.user.username" />
    <div class="content">
      <div class="user">
        <span class="username">{{ post.user.username }}</span>
      </div>
      <div class="post">
        <p>{{ post.comment }}</p>
      </div>
      <Embed
        class="meta-view"
        v-if="post.attachs[0]"
        :url="post.attachs[0]"
        :key="'embed_' + post.id"
      />
      <slot></slot>
    </div>
  </article>
</template>

<script>
import Embed from "./Embed.vue";

export default {
  name: "Post",
  props: ["post"],
  components: {
    Embed,
  },
};
</script>

<style scoped>
.post-wrapper {
  display: flex;
  text-align: left;
  padding: 10px;
  padding-bottom: 5px;
  max-width: 600px;
  color: var(--text-primary);
  background-color: var(--background-fading);
  border-radius: 5px;
  margin-bottom: 5px;
}

.post-wrapper img {
  border-radius: 100%;
  width: 49px;
  height: 49px;
  max-width: 49px;
  max-height: 49px;
}

.user span {
  font-weight: 700;
}

.content {
  margin: 5px 10px;
  width: clamp(100px, 100%, 510px);
}

.meta-view {
  margin-top: 5px;
}

@media screen and (max-width: 625px) {
  .post-wrapper img {
    max-width: 40px;
    max-height: 40px;
  }
}
</style>