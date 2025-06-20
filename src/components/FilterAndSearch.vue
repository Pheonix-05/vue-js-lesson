<script setup>
import { ref } from 'vue'

const searchPerson = ref("")
const sorting = ref(false)
const filtering = ref(false)
const catMode = ref(1)
</script>

<template>
    <div class="bg">
        <!-- Search field and icon -->
        <div>
            <input 
                v-model.trim="searchPerson" 
                type="text"
                placeholder="       Search a Name or Email..."
                class="search"
            >
            <span class="icon searchIcon material-symbols-outlined">search</span>
        </div>
        
        <!-- Sorting pop-up menu -->
        <div 
            @mouseenter="sorting = true" 
            @mouseleave="sorting = false"
        >
            <span class="icon sortIcon material-symbols-outlined">sort</span>
            <div 
                v-if="sorting"
                class="sort-pop-up"
            >
                <h3 class="sortTitle">Sort By</h3>
                <div class="sortInfo">
                    <input class="sort-info-btn" v-model="catMode.value" type="button">
                        <span v-if="true" class="catIcon material-symbols-outlined">swap_vert</span>
                        <span v-if="false" class="catIcon material-symbols-outlined">arrow_upward_alt</span>
                        <span v-if="false" class="catIcon material-symbols-outlined">arrow_downward_alt</span>
                    <p class="sort-info-text">Name</p>
                </div>
                <div class="sortInfo">
                    <input class="sort-info-btn" v-model="catMode.value" type="button">
                        <span v-if="true" class="catIcon material-symbols-outlined">swap_vert</span>
                        <span v-if="false" class="catIcon material-symbols-outlined">arrow_upward_alt</span>
                        <span v-if="false" class="catIcon material-symbols-outlined">arrow_downward_alt</span>
                    <p class="sort-info-text">Recruitment Date</p>
                </div>
            </div>
        </div>

        <!-- filter pop-up menu -->
        <div
            @mouseenter="filtering = true" 
            @mouseleave="filtering = false"
        >
            <span class="icon filterIcon material-symbols-outlined">filter_alt</span>
            <div 
                v-if="filtering"
                class="filt-pop-up"
            >
                <h3 class="filtTitle">Filter</h3>
                <div class="filtInfo">
                    <input class="filt-info-box" v-model="catMode.value" type="checkbox">
                    <p class="filt-info-text">Project Manager</p>
                </div>
                <div class="filtInfo">
                    <input class="filt-info-box" v-model="catMode.value" type="checkbox">
                    <p class="filt-info-text">Business Analyst</p>
                </div>
                <div class="filtInfo">
                    <input class="filt-info-box" v-model="catMode.value" type="checkbox">
                    <p class="filt-info-text">Frontend Development</p>
                </div>
                <div class="filtInfo">
                    <input class="filt-info-box" v-model="catMode.value" type="checkbox">
                    <p class="filt-info-text">Backend Development</p>
                </div>
            </div>
        </div>

        <!-- Add personnel field pup-up -->
        <div>
            <span class="icon addIcon material-symbols-outlined">person_add</span>
        </div>

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
    border: 2px solid #000000;
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
    font-size: 25px;
}

.sortIcon {
    top: 92px;
    right: 70px;
    font-size: 36px;
}
.sort-pop-up {
    position: absolute;
    top: 100px;
    right: 102px;
    background: #000000;
    border-radius: 10px;
    width: 165px;
    height: 110px;
    opacity: 0.6;
    z-index: 1;

}
.sortTitle {
    position: relative;
    top: 8px;
    color: #ffffff;
    padding: 10px 10px 20px 10px;
    text-align: center;
}
.sortInfo {
    position: relative;
    color: #ffffff;
    padding: 10px 5px;
    display: flex;
    justify-content: start;
}
.sort-info-text {
    position: relative;
    top: 7px;
}
.sort-info-btn {
    background: rgba(81, 81, 81, 0.4);
    border: 1px solid #000000;
    width: 16px;
    height: 16px;
    color: #ffffff;
    z-index: 2;
}
.catIcon {
    position: relative;
    right: 15px;
    top: 1px;
    font-size: 15px;
}

.filterIcon{
    top: 94px;
    right: 35px;
    font-size: 35px;
}
.filt-pop-up {
    position: absolute;
    top: 100px;
    right: 64px;
    background: #000000;
    border-radius: 10px;
    width: 165px;
    height: 210px;
    opacity: 0.6;
    z-index: 1;

}
.filtTitle {
    position: relative;
    top: 8px;
    color: #ffffff;
    padding: 10px 10px 20px 10px;
    text-align: center;
}
.filtInfo {
    position: relative;
    color: #ffffff;
    padding: 10px 5px;
    display: flex;
    justify-content: start;
}
.filt-info-text {
    position: relative;
    top: 7px;
}
.filt-info-btn {
    background: rgba(81, 81, 81, 0.4);
    border: 1px solid #000000;
    width: 16px;
    height: 16px;
    color: #ffffff;
    z-index: 2;
}

.addIcon {
    background: #E0E0E0;
    border-radius: 4px;
    border: 1px solid #474747;
    top: 96px;
    right: 5px;
    padding: 2px;
    font-size: 25px;
}
</style>