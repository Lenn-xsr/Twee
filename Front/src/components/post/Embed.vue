<template>
  <a :href="url" class="embed-content" v-if="metas.title">
    <img :src="metas.image" :alt="metas.description" v-if="!embed.has" />
    <iframe :src="embed.url" v-else> </iframe>
    <div class="info">
      <span class="title">{{ formatString(metas.title) }}</span>
      <small class="baseurl">{{
        url.match('https://(.*?)/')[1].replace('www.', '')
      }}</small>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Embed',
  props: ['url'],
  data() {
    return {
      metas: {},
      embed: {
        url: null,
        has: false
      }
    };
  },
  methods: {
    getMeta(url) {
      let cleanMatch,
        result = {};
      fetch(url)
        .then((r) => r.text())
        .then((match) => {
          cleanMatch = [
            ...match.matchAll(/property="og:(.*?)" content="(.*?)"(.*?)>/g)
          ];
          cleanMatch.forEach((og) => (result[og[1]] = og[2]));
          this.metas = result;
        });
    },
    verifyEmbed() {
      const docWidth = document.body.clientWidth;
      const matchURLID = this.url.match(/v=(.*)(?=&|)/);
      if (
        matchURLID &&
        matchURLID[1] &&
        this.url.match(/youtube|watch/) &&
        docWidth >= 365
      ) {
        this.embed = {
          url: 'https://www.youtube.com/embed/' + matchURLID[1],
          has: true
        };
      }
    },
    formatString(str) {
      return str.replace(/(&quot;)/g, '"');
    }
  },
  created() {
    this.verifyEmbed();
    this.getMeta(this.url);
  }
};
</script>

<style scoped>
.embed-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid rgba(43, 44, 45, 0.7);
  border-radius: 5px;
  overflow: hidden;
  width: clamp(210px, 100%, 600px);
}

.embed-content .info {
  padding: 10px;
  padding-top: 0;
  font-size: small;
  display: grid;
  gap: 5px;
}

.embed-content iframe {
  border: none;
  width: 100%;
  aspect-ratio: 16/9;
}

@media screen and (max-width: 625px) {
  .embed-content {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .embed-content img {
    width: 80px;
  }

  .embed-content .info {
    padding: 0;
  }
}
</style>
