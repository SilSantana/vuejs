<template>
  <section>
    <h2>{{ getGreeting }}</h2>
    <p>This is the Hello World component.</p>
  </section>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    let reversedGreeting = "!dlrow olleH";

    return {
      reversedGreeting
    }
  },
  computed: {
    getGreeting() {
      return this.reversedGreeting.split("").reverse().join("");
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
}
</style>