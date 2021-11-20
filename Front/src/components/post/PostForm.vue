<template>
  <form class="new-post-wrapper">
    <div class="textarea-wrapper">
      <div
        contenteditable="true"
        class="form-control"
        id="new-post"
        @keyup="countPublishCharacters"
        style="resize: none"
      ></div>
      <small id="textarea-counter"
        >{{ comment.length }}/{{ maxCharacteres - 1 }}</small
      >
    </div>
    <button>Postar</button>
  </form>
</template>

<script>
export default {
  name: 'PostForm',
  data() {
    return {
      maxCharacteres: 21,
      comment: ''
    };
  },
  methods: {
    placeCharactersAtEnd(el) {
      el.focus();
      if (
        typeof window.getSelection != 'undefined' &&
        typeof document.createRange != 'undefined'
      ) {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);

        const sel = window.getSelection();

        sel.removeAllRanges();
        sel.addRange(range);
      } else if (typeof document.body.createTextRange != 'undefined') {
        const textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
      }
    },
    countPublishCharacters({ target: element }) {
      const textareaCounter = document.querySelector('#textarea-counter');
      const text = element.innerText || element.textContent;
      const count = this.maxCharacteres - text.length;

      if (count < 0) {
        textareaCounter.innerHTML = `<span class="text-danger">${count}/${
          this.maxCharacteres - 1
        }</span>`;

        const releasedText = text.slice(0, this.maxCharacteres);
        const spareText = text.slice(this.maxCharacteres + 1);
        element.innerHTML = releasedText + '<span>' + spareText + '</span>';

        this.placeCharactersAtEnd(element);
      } else {
        textareaCounter.innerHTML = `<span>${this.comment.length}/${
          this.maxCharacteres - 1
        }</span>`;
      }

      this.comment = text.slice(0, this.maxCharacteres);
    }
  }
};
</script>

<style scoped>
.new-post-wrapper,
.textarea-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.new-post-wrapper button {
  background-color: var(--lighted);
  color: var(--text-primary);
  border: none;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 15px;
  float: right;
  margin-top: 15px;
  cursor: pointer;
}

#new-post {
  border: 1px solid var(--border-fading);
  background-color: transparent;
  color: var(--text-primary);
  resize: vertical;
  padding: 10px;
  border-radius: 5px;
  width: 100% !important;
  max-height: 150px;
  position: relative;
  min-height: 100px;
  word-break: break-word;
}

#textarea-counter {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: var(--text-primary);
}
</style>
