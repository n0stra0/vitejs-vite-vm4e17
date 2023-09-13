<template>
  <div>
    <h1>{{ $t('message.hello') }} bbb</h1>
    <div>{{ $t('language') }}</div>
    <HelloWorld />
  </div>
</template>
<script>
import HelloWorld from './components/component.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
