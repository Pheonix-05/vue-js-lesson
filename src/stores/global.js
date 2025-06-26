import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state:() => ({
        personnel: [],
        id: 0,
    }),
    actions: {
        addPersonnel(name, dept, comE, perE, recD) {
            this.personnel.push({
                id: this.id++,
                fullName: name,
                department: dept,
                companyEmail: comE,
                personalEmail: perE,
                recruitmentDate: recD
            })
        },
        deletePersonnel(personnelId) {
            this.personnel.splice(personnelId, 1)
        },
        getPersonnel() {
            return this.personnel
        }
    }
})