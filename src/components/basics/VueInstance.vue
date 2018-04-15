<template>
    <div>
        <h1 ref="heading">{{ title }}</h1>
        <button v-on:click="show">Show Paragraph</button>
        <p v-if="showParagraph">This is not always visible</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'The VueJS Instance',
            showParagraph: false
        }
    },
    methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
}
</script>

<style scoped>

</style>