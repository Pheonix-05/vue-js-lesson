<script setup>
import { ref, computed } from 'vue'
import { useGlobalStore } from '@/stores/global';

defineProps(['editingPersonnel', 'departments'])

const store = useGlobalStore()

const personnel = store.getPersonnel()

const reversedPersonnel = computed(()=>[personnel.value].reverse())

// deleting function
const confirming = ref(false)
const deleteCurrName = ref('')
const deleteTempIndex = ref('')

const areYouSure = (card, id)=>{
    confirming.value = true
    deleteCurrName.value = card.fullName
    deleteTempIndex.value = id
}
const denyedDelete = ()=>{
    confirming.value = false
    deleteTempIndex.value = ''
}
const confirmedDelete = ()=>{
    confirming.value = false
    store.deletePersonnel(deleteTempIndex.value)
    deleteTempIndex.value = ''
}

// editing function
const editingCard = ref(false)
const editCurrName = ref('')
const editCurrDept = ref('')
const editCurrComEmail = ref('')
const editCurrPersEmail = ref('')
const editCurrRecDate = ref('')
const editTempIndex = ref('')

const recDateTempArr = ref([])
const recDateTempArrStoredVal = ref('')

const recDateEncode = (date)=>{
    recDateTempArr.value = date.split("/")
    recDateTempArrStoredVal.value = recDateTempArr.value[2]
    recDateTempArr.value.pop()
    recDateTempArr.value.unshift(recDateTempArrStoredVal.value)
    recDateTempArrStoredVal.value = ''
    return recDateTempArr.value.join('-')
}


const editCard = (card, id)=>{
    editingCard.value = true
    editCurrName.value = card.fullName
    editCurrDept.value = card.department
    editCurrComEmail.value = card.companyEmail
    editCurrPersEmail.value = card.personalEmail
    editCurrRecDate.value = recDateEncode(card.recruitmentDate)
    editTempIndex.value = id
}
const cancelEdit = ()=>{
    editingCard.value = false
    editCurrName.value = ""
    editCurrDept.value = ""
    editCurrComEmail.value = ""
    editCurrPersEmail.value = ""
    editCurrRecDate.value = ""
    editTempIndex.value = ''
}
const submitEdit = ()=>{
    store.editPersonnel(editTempIndex, editCurrName.value, editCurrDept.value, editCurrComEmail.value, editCurrPersEmail.value, editCurrRecDate.value)
    cancelEdit()
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
        :key="card.fullName"
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
                @click="editCard(card, index)"
                class="editIcon material-symbols-outlined unselectable"
                v-if="editingPersonnel"
            >edit</span>
            <span 
                @click="areYouSure(card, index)"
                class="deleteIcon material-symbols-outlined unselectable"
                v-if="editingPersonnel"
            >delete_forever</span>
        </li>
    </ul>
    <p class="temp">{{ personnel }}</p>
    <p 
    v-if="!personnel.length"
    class="n-a"
    >
        Nothing to see here
    </p>

    <!-- editing pup-up -->
    <div 
        v-if="editingCard"
        class="editPersonnelCard"
    >
        <form 
            class="editForm"
            @submit.prevent="submitEdit"
        >
            <h2 class="formTitle">Edit {{editCurrName}}'s Profile</h2>
            <button class="cancelEdit unselectable" @click="cancelEdit">
            Cancel
            </button>

            <div class="basicInfo">
                <label>
                    <input 
                        type="text" 
                        class="editName" 
                        placeholder="e.g. George W. Bush..."
                        v-model="editCurrName"
                    >
                    Full Name
                </label>
                <label>
                    <input 
                        type="email" 
                        class="editComEmail" 
                        placeholder="e.g. georgewbush@fastboy.net..."
                        v-model="editCurrComEmail"
                    >
                    Company Email
                </label>
                <label>
                    <input 
                        type="date" 
                        class="editRecDate" 
                        v-model="editCurrRecDate"
                    >
                    Recruitment Date
                </label>
                <label>
                    <input 
                        type="email" 
                        class="editPersEmail" 
                        placeholder="e.g. georgewbush@gmail.com..."
                        v-model="editCurrPersEmail"
                    >
                    Personal Email
                </label>
            </div>

            <div class="editDepartment">
                <p>Department</p>
                <label 
                    class="editDepartOption"
                    v-for="department in departments"
                >
                    <input 
                        type="radio"
                        v-model="editCurrDept"
                        :value="department.valueOf()"
                    > {{ department.valueOf() }}
                </label>
            </div>
            
            <button class="submitEdit unselectable" >
            Submit
            </button>
        </form>
    </div>

    <!-- deleting pop-up -->
    <div 
        class="are-you-sure" 
        v-if="confirming"
    >
        <div class="confirmation-field">
            <h3>This Action Cannot Be Undone</h3>
            <p>By clicking "Yes, Delete" you understand that {{deleteCurrName}}'s profile will be deleted forever.</p>
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

.editPersonnelCard{
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 2;
}
.editForm {
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
.cancelEdit {
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
.editName {
    width: 200px;
}
.editComEmail {
    width: 200px;
}
.editPersEmail {
    width: 200px;
}
.editRecDate {
    line-height: 17px;
    width: 200px;
}
.editDepartment {
    display: grid;
    justify-content: center;
    width: 250px;
    padding: 12px;
    margin: auto auto 20px auto;
}
.editDepartment > p {
    line-height: 12px;
    text-align: center;
    padding: 20px 10px;
    font-weight: bold;
}
.editDepartOption {
    display: block;
    padding: 10px;
}
.submitEdit {
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

.temp {
    line-height: 20px;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>