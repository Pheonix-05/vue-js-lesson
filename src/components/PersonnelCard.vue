<script setup>
import { ref, computed } from 'vue'

defineProps(['editingPersonnel'])

// information array
const personnel = ref([
    {
        fullName: "John Doe",
        department: "Frontend Development",
        companyEmail: "johndoe@fastboy.net",
        personalEmail: "johndoe@gmail.com",
        recruitmentDate: "12/03/2023"
    },
    {
        fullName: "Henry Smith",
        department: "Backend Development",
        companyEmail: "henrysmith@fastboy.net",
        personalEmail: "henrysmith@gmail.com",
        recruitmentDate: "01/13/2003"
    },
    {
        fullName: "Joseph Donner",
        department: "Project Manager",
        companyEmail: "josephdonner@fastboy.net",
        personalEmail: "josephdonner@gmail.com",
        recruitmentDate: "11/23/2000"
    }
])
const reversedPersonnel = computed(()=>[personnel.value].reverse())

// deleting
const confirming = ref(false)
const deleteTempVal = ref('')

const areYouSure = (id)=>{
    confirming.value = true
    deleteTempVal.value = id
}
const denyedDelete = ()=>{
    confirming.value = false
    deleteTempVal.value = ''
}
const confirmedDelete = ()=>{
    confirming.value = false
    personnel.value.splice(deleteTempVal.value, 1)
    deleteTempVal.value = ''
}


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
                @click="areYouSure(index)"
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

    <div 
        class="are-you-sure"
        v-if="confirming"
    >
        <div class="confirmation-field">
            <h3>This Action Cannot Be Undone</h3>
            <p>By clicking "Yes, Delete" you understand that the profile will be deleted forever.</p>
            <div class="confirmation-btn">
                <button class="cancelDelete" @click="denyedDelete">
                    Cancel
                </button>
                <button class="confirmDelete" @click="confirmedDelete">
                    Yes, Delete
                </button>
            </div>
            
        </div>
    </div>
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

.are-you-sure {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 2;
}
.confirmation-field {
    display: block;
    position: absolute;
    top: 35%;
    left: 35%;
    background: #ffffff;
    border: 3px solid #F1F1F1;
    border-radius: 10px;
    width: 30%;
    height: 30%;
    z-index: 3;
    text-align: center;
}
.confirmation-field > h3 {
    line-height: 25%;
    padding: 10% 6% 2% 6%;
    font-weight: bolder;
}
.confirmation-field > p {
    line-height: 150%;
    padding: 10% 10% 10.5% 10%;
}
.confirmation-btn {
    display: flex;
    justify-content: space-around;
}
.cancelDelete {
    background: #F1F1F1;
    border-radius: 7px;
    color: #000000;
    width: 33%;
    font-size: 115%;
    font-weight: bold;
    line-height: 270%;
}
.confirmDelete {
    background: #E63939;
    border-radius: 7px;
    color: #ffffff;
    width: 33%;
    font-size: 115%;
    font-weight: bold;
    line-height: 270%;
}
</style>