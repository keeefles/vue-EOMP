<template>
    <div v-if="isloading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerComp',
        data() {
      return {
        isloading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isloading = false;
      }, 500);
    },
  };
</script>

<style scoped>

</style>