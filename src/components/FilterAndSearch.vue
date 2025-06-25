<script setup>
import { ref } from 'vue'

const searchPerson = ref('')
const sorting = ref(false)
const filtering = ref(false)
const catMode = ref(1)
const addingPerson = ref(false)
const departments = ref([
    'Project Manager',
    'Business Analyst',
    'Frontend Development',
    'Backend Development'
])
const selName = ref("")
const selDepartment = ref("")
const selComEmail = ref("")
const selPersEmail = ref("")
const selRecDate = ref()
const editingPersonnel = ref(false)


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
            <span 
                class="icon searchIcon material-symbols-outlined"
                v-if="!searchPerson"
            >search</span>
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
                <div v-for="department in departments" class="filtInfo">
                    <input class="filt-info-box" v-model="catMode.value" type="checkbox">
                    <p class="filt-info-text">{{ department.valueOf() }}</p>
                </div>
            </div>
        </div>

        <!-- Add personnel field pup-up -->
        <div>
            <span 
                @click="addingPerson = true" 
                class="icon addIcon material-symbols-outlined"
            >person_add</span>
            <div 
                v-if="addingPerson"
                class="addNewPerson"
            >
                <form class="addForm">
                    <h2 class="formTitle">Add a Personnel</h2>
                    <button class="cancelAdd" @click="addingPerson = false">
                    Cancel
                    </button>

                    <div class="basicInfo">
                        <label>
                            <input 
                                type="text" 
                                class="addName" 
                                placeholder="e.g. George W. Bush..."
                                v-model="selName"
                            >
                            Full Name
                        </label>
                        <label>
                            <input 
                                type="email" 
                                class="addComEmail" 
                                placeholder="e.g. georgewbush@fastboy.net..."
                                v-model="selComEmail"
                            >
                            Company Email
                        </label>
                        <label>
                            <input 
                                type="date" 
                                class="addRecDate" 
                                v-model="selRecDate"
                            >
                            Recruitment Date
                        </label>
                        <label>
                            <input 
                                type="email" 
                                class="addPersEmail" 
                                placeholder="e.g. georgewbush@gmail.com..."
                                v-model="selPersEmail"
                            >
                            Personal Email
                        </label>
                    </div>

                    <div class="addDepartment">
                        <p>Department</p>
                        <label 
                            class="addDepartOption"
                            v-for="department in departments"
                        >
                            <input 
                                type="radio" 
                                v-model="selDepartment"
                                :value="department.valueOf()"
                            > {{ department.valueOf() }}
                        </label>
                    </div>
                    
                    <button class="submitAdd">
                    Submit
                    </button>
                </form>
            </div>
        </div>

        <!-- editing function -->
        <span 
            @click="editingPersonnel = !editingPersonnel"
            class="icon editIcon material-symbols-outlined"
            :class="{
                editing: editingPersonnel
            }"
        >edit</span>
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
    right: 105px;
    font-size: 36px;
}
.sort-pop-up {
    position: absolute;
    top: 100px;
    right: 137px;
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
    right: 70px;
    font-size: 35px;
}
.filt-pop-up {
    position: absolute;
    top: 100px;
    right: 98px;
    background: #404040;
    border-radius: 10px;
    width: 205px;
    height: 210px;
    opacity: 0.8;
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
    right: 40px;
    padding: 2px;
    font-size: 25px;
}
.addNewPerson{
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 2;
}
.addForm {
    display: block;
    position: absolute;
    top: 25%;
    left: 25%;
    background: #ffffff;
    border: 3px solid #F1F1F1;
    border-radius: 10px;
    width: 50%;
    height: 50%;
    z-index: 3;
}
.formTitle {
    position: relative;
    top: 10px;
    line-height: 20px;
    color: #000000;
    text-align: center;
}
.cancelAdd {
    position: relative;
    left: 89%;
    top: -10px;
    background: #F1F1F1;
    border-radius: 5px;
    color: #000000;
    width: 80px;
    height: 30px;
}
.basicInfo {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 20px 10%;
    padding: 5px;
    margin: 60px 0 10px 0;
}
.basicInfo > label {
    display: block;
    font-weight: bold;
}
.addName {
    width: 200px;
}
.addComEmail {
    width: 200px;
}
.addPersEmail {
    width: 200px;
}
.addRecDate {
    line-height: 17px;
    width: 200px;
}
.addDepartment {
    display: grid;
    justify-content: center;
    width: 250px;
    padding: 12px;
    margin: auto auto 20px auto;
}
.addDepartment > p {
    line-height: 12px;
    text-align: center;
    padding: 20px 10px;
    font-weight: bold;
}
.addDepartOption {
    display: block;
    padding: 10px;
}
.submitAdd {
    background: #F1F1F1;
    position: relative;
    left: -2px;
    border: 3px solid #F1F1F1;
    border-radius: 10px;
    line-height: 12px;
    width: 100.5%;
    height: 40px;
    margin: 30px 0 0 0;
}

.editIcon {
    background: #E0E0E0;
    border-radius: 4px;
    border: 1px solid #474747;
    top: 96px;
    right: 5px;
    padding: 2px;
    font-size: 25px;
}
.editing {
    background: #999999;
}

*,
*::before,
*::after {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>