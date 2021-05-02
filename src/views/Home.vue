<template>
  <div>
    <Header/>
    <Quotes/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Quotes from '@/components/Quotes';

export default {
  name: 'Home',
  components: { Header, Quotes },
}
</script>

<style scoped>

</style>
