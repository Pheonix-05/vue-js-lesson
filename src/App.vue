<script setup>

import { ref } from 'vue'
import TheNavBar from './components/TheNavBar.vue'
import FilterAndSearch from './components/FilterAndSearch.vue';
import PersonnelCard from './components/PersonnelCard.vue'

const editingEnabled = ref(true)
const departments = ref([
    'Project Manager',
    'Business Analyst',
    'Frontend Development',
    'Backend Development'
])

</script>

<template>
  <div>
  <TheNavBar />
  <FilterAndSearch 
  :editingPersonnel="editingEnabled" 
  :departments="departments"
  @toggle="editingEnabled = !editingEnabled" 
  @editOff="editingEnabled = false"
  />
  </div>
  <div>
  <PersonnelCard 
  :editingPersonnel="editingEnabled"
  :departments="departments" 
  />
  </div>

  <!-- <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Item
    </button>
  </div>
  <form 
  class="add-item-form"
  v-if="editing"
  @submit.prevent="saveItem" 
>
<input 
  v-model.trim="newItem"
  type="text" 
  placeholder="Add an item">
  <label>
    <input type="checkbox" v-model="newItemHighPriority">
    High Priority
  </label>
  <button 
    :disabled="newItem.length < 5"
    class="btn btn-primary"
  >
    Save Item
  </button>
  </form>
  <ul>
    <li 
      v-for="(item, index) in reverssedItems" 
      @click="togglePurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{
        strikeout: item.purchased, 
        priority: item.highPriority}"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">
    Nothing to see here
  </p> -->
</template>
