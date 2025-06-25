<script setup>
import { ref, computed } from 'vue'

defineProps(['editingPersonnel'])

const personnel = ref([
    {
        id: 1,
        fullName: "John Doe",
        department: "Frontend Development",
        companyEmail: "johndoe@fastboy.net",
        personalEmail: "johndoe@gmail.com",
        recruitmentDate: "12/03/2023"
    },
    {
        id: 2,
        fullName: "Henry Smith",
        department: "Backend Development",
        companyEmail: "henrysmith@fastboy.net",
        personalEmail: "henrysmith@gmail.com",
        recruitmentDate: "01/13/2003"
    },
    {
        id: 3,
        fullName: "Joseph Donner",
        department: "Project Manager",
        companyEmail: "josephdonner@fastboy.net",
        personalEmail: "josephdonner@gmail.com",
        recruitmentDate: "11/23/2000"
    }
])
const reversedPersonnel = computed(()=>[personnel.value].reverse())
</script>

<template>

    <!-- Category Names -->
    <div class="category">
        <div class="title">Full Name</div>
        <span class="divider"></span>
        <div class="title">Department</div>
        <span class="divider"></span>
        <div class="title">Company Email</div>
        <span class="divider"></span>
        <div class="title">Personal Email</div>
        <span class="divider"></span>
        <div class="title">Recruitment Date</div>
    </div>

    <!-- Personnel Card Information -->
    <ul>
        <li
        v-for="(card, index) in personnel"
        :key="card.id"
        class="person-card"
        >
            <div class="card">
                <div class="info">{{card.fullName}}</div>
                <span class="divider divider2"></span>
                <div class="info">{{card.department}}</div>
                <span class="divider divider2"></span>
                <div class="info">{{card.companyEmail}}</div>
                <span class="divider divider2"></span>
                <div class="info">{{card.personalEmail}}</div>
                <span class="divider divider2"></span>
                <div class="info">{{card.recruitmentDate}}</div>
            </div>
            <span 
                class="editIcon material-symbols-outlined"
                v-if="editingPersonnel"
            >edit</span>
            <span 
                class="deleteIcon material-symbols-outlined"
                v-if="editingPersonnel"
            >delete_forever</span>
        </li>
    </ul>

    <p 
    v-if="!personnel.length"
    class="n-a"
    >
        Nothing to see here
    </p>
</template>

<style scoped>
.category {
    box-shadow: 0 4px 2px -2px #C2C2C2;
    height: 33px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.title {
    text-align: center;
    line-height: 12px;
    padding: 1px;
   
    width: 330px;
    max-width: 330px;

    color: #909090;
}
.divider {
    position: relative;
    top: 1px;
    background: #B0B0B0;
    border-radius: 20px;
    width: 2px;
    height: 25px;
}
.divider2 {
    height: 30px;
}

.person-card {
    position: relative;
    top: 2px;
    background: #ffffff;
    line-height: 30px;
}
.card {
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 2px;
}
.info {
    text-align: center;
    line-height: 12px;
    padding: 10px;
    
    width: 330px;
    max-width: 330px;
}

.n-a {
    position: relative;
    top: 10px;
    padding: 20px;
    text-align: center;
    color: #B0B0B0;
}

.editIcon {
    position: absolute;
    top: 21%;
    right: 60px;
    background: #E0E0E0;
    border-radius: 4px;
    border: 1px solid #474747;
    padding: 2px;
    font-size: 25px;
    z-index: 1;
}
.deleteIcon {
    position: absolute;
    top: 21%;
    right: 20px;
    background: #E63939;
    color: #ffffff;
    border-radius: 4px;
    border: 1px solid #474747;
    padding: 2px;
    font-size: 25px;
    z-index: 1;
}
</style>