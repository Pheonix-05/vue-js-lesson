<script setup>
import { ref } from 'vue'
const searchPerson = ref("")
</script>

<template>
    <div class="bg">
        <div>
            <input 
                v-model.trim="searchPerson" 
                type="text"
                placeholder="       Search a Name or Email..."
                class="search"
            >
            <span class="icon searchIcon material-symbols-outlined">search</span>
        </div>
        
        <span class="icon sortIcon material-symbols-outlined">sort</span>
        <span class="icon filterIcon material-symbols-outlined">filter_alt</span>
        <span class="icon addIcon material-symbols-outlined">person_add</span>
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
    z-index: 1;
    margin: 0 0 0 5px;
    position: absolute;
}
.searchIcon {
    top: 100px;
    left: 5px;
    color: gray;
}
.sortIcon {
    top: 100px;
    right: 60px;
}
.filterIcon{
    top: 100px;
    right: 35px;
}
.addIcon {
    background: #E0E0E0;
    border-radius: 4px;
    border: 1px solid #474747;
    top: 96px;
    right: 5px;
    padding: 2px;
}
</style>