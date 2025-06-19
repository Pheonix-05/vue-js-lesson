<script setup>
import { ref } from 'vue'
const searchPerson = ref("")
</script>

<template>
    <div class="bg">
        
        <input 
            v-model.trim="searchPerson" 
            type="text"
            placeholder="Search a Name/Email"
            class="search"
        >
    </div>
</template>

<style scoped>
.bg {
    background-color: #ffffff;
    box-shadow: 0 4px 2px -2px gray;
    height: 25px;
}
.search {
    position: relative;
    top: -20px;
    border-radius: 20px;
    padding: 5px 5px 5px 15px;
    margin: 10px 0 0 5px;
}
</style>