<script setup>
import { ref, computed } from 'vue'

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
    }
])
const reversedPersonnel = computed(()=>[personnel.value].reverse())
</script>

<template>
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
    display: inline-block;
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
</style>