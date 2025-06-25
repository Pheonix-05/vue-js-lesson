import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state:()=>({
        showModal: false,
        packetData: null
    }),
    actions:{
        toggleModal(value) {
            this.showModal = value
        },
        setPack(data) {
            this.packetData = data
        }
    }
})