<script setup lang="ts">
import { useStore } from 'vuex'
import { getFriendInfos, createAddFriendApplication, updateFriendInfo, getAddFriendApplications, updateAddFriendApplication, deleteFriend } from '@/api/friend';
import Client from '@/msg/client';
import { createGroup, getGroupInfos } from '@/api/group';

const store = useStore()

const client = Client.newClient()
const sendMsg = () => {
    client.sendMsg({
        Receiver: {
            Type: "User",
            ReceiverID: 12
        },
        Content: {
            TextMsg: {
                Content: "啦啦啦啦"
            }
        }
    })
}

const setToken = () => {
    if (store.state.token === '') {
        store.commit('setToken', 'cfdfcb83-5ed1-4864-81bc-39bd9c28f532')
    } else {
        store.commit('setToken', '')
    }
}

// getGroupInfos({
//     All: true
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// createGroup("哈哈哈这是一个群", "", [2]).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// deleteFriend(2).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// updateAddFriendApplication(9, {
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