import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state:() => ({
        personnel: [
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
        ],
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
        editPersonnel(personnelId, nName, nDept, nComE, nPerE, nRecD) {
            this.personnel[personnelId] = {
                id: personnelId,
                fullName: nName,
                department: nDept,
                companyEmail: nComE,
                personalEmail: nPerE,
                recruitmentDate: nRecD
            }
        },
        getPersonnel() {
            return this.personnel
        }
    }
})