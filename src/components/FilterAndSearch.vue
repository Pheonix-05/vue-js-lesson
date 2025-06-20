<script setup>
import { ref } from 'vue'
const searchPerson = ref("")
</script>

<template>
    <div class="bg">
        <input 
            v-model.trim="searchPerson" 
            type="text"
            placeholder="       Search a Name or Email..."
            class="search"
        >
        <span v-if="!searchPerson" class="icon material-symbols-outlined">
        search
        </span>

        
    </div>
</template>

<style scoped>
.bg {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 4px 2px -2px gray;
    height: 25px;
}
.search {
    position: relative;
    top: -11px;
    border-radius: 12px;
    padding: 5px;
    margin: 10px 0 0 5px;
    width: 200px;
}
.icon {
    position: absolute;
    top: 100px;
    left: 5px;
    z-index: 1;
    margin: 0 0 0 5px;
    color: gray;
}
</style>