<script setup lang="ts">
import { useStore } from 'vuex'
import { getFriendInfos, createAddFriendApplication, updateFriendInfo, getAddFriendApplications, updateAddFriendApplication } from '@/api/friend';
import Client from '@/msg/client';

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

// updateAddFriendApplication(8, {
//     Accept: true
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getAddFriendApplications(0, 10).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getFriendInfos({
//     FriendID: 2
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// updateFriendInfo(2, {
//     Remark: "leader"
// }).then(res=>{
//     console.log(res)
// }).catch(res=>{
//     console.log(res)
// })

// createAddFriendApplication(2, '你好，我是xhsf').then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

</script>

<template>
    <button @click="sendMsg()">发送消息</button>
    <button @click="setToken()">设置or清空token</button>
</template>

<style scoped lang="scss">
</style>