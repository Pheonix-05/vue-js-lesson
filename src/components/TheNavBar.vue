<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
  },
})
</script>

<template>
    <div class="nav-bar">

        <h2 class="nav-tab">Employee List</h2>
    </div>
    
</template>

<style scoped>
.nav-bar {
    background-color: #ffffff;
    height: 90px;
    /* border-bottom: 1px solid #000000; */
    margin: 0 0 15px 0;
    box-shadow: 0 4px 2px -2px #000000;
}

.nav-tab {
    color: #3a78ff;
    padding: 40px 0 0 100px;
    text-transform: uppercase;
}
</style>