<script setup lang="ts">
import Client from '@/sdk/client';
import { useStore } from 'vuex'

const store = useStore()

const client = Client.newClient()
const sendMsg = () => {
    client.sendMsg({
        Receiver: {
            Type: "User",
            ReceiverID: 2
        },
        Content: {
            TextMsg: {
                Content: "测试测试哈哈哈"
            }
        }
    })
}

const setToken = () => {
    if (store.state.token === '') {
        store.commit('setToken', 'c61e1dd2-ebc3-4ed1-9cd7-335e7fac201e')
    } else {
        store.commit('setToken', '')
    }
}

</script>

<template>
    <button @click="sendMsg()">发送消息</button>
    <button @click="setToken()">设置or清空token</button>
</template>

<style scoped lang="scss">
</style>