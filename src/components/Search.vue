<template>
  <div id="searchapp">
    <div class="search" ref="searchEl">
      <input
        id="search__input"
        type="text"
        placeholder="Type for search (min 3 chars)"
        v-model="searchString"
      />

      <transition name="fade">
        <div
          v-if="searchResults.length > 0 && searchResultsVisible"
          class="search__results"
        >
          <ul>
            <li v-for="(doc, k) in searchResults" :key="k">
              {{ doc.text }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- SOURCE LIST -->
    <ul class="list">
      <li class="list__item">
        <div class="list__item__description">Lorem ipsum dolor sit amet</div>
      </li>
      <li class="list__item">
        <div class="list__item__description">Vue.js search component example</div>
      </li>
      <li class="list__item">
        <div class="list__item__description">Simple client side filtering</div>
      </li>
      <li class="list__item">
        <div class="list__item__description">Another lorem ipsum text</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchApp',

  data() {
    return {
      documents: [],
      searchString: '',
      searchResultsVisible: true
    };
  },

  mounted() {
    const docsEls = this.$el.querySelectorAll('.list__item');

    docsEls.forEach(item => {
      this.documents.push({
        text: item.querySelector('.list__item__description').textContent
      });
    });

    document.documentElement.addEventListener('click', this.handleClickOnBody);
    document.addEventListener('keyup', this.handleKeyUp);
  },

  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.handleClickOnBody);
    document.removeEventListener('keyup', this.handleKeyUp);
  },

  computed: {
    activeSearchString() {
      return this.searchString.length >= 3 ? this.searchString : '';
    },

    searchResults() {
      if (!this.activeSearchString) return [];

      return this.documents.filter(d =>
        d.text.toLowerCase().includes(this.activeSearchString.toLowerCase())
      );
    }
  },

  methods: {
    handleClickOnBody(e) {
      const searchEl = this.$refs.searchEl;

      if (!searchEl.contains(e.target)) {
        this.searchResultsVisible = false;
      } else {
        this.searchResultsVisible = true;
      }
    },

    handleKeyUp(e) {
      if (e.key === 'Escape') {
        this.searchResultsVisible = false;
      }
    }
  }
};
</script>

<style scoped>
.search {
  position: relative;
  width: 300px;
}

#search__input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.search__results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.search__results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search__results li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.list {
  margin-top: 40px;
}

.list__item {
  margin-bottom: 10px;
}
</style>
