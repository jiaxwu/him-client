<script setup lang="ts">
import { useStore } from 'vuex'
import { getFriendInfos, createAddFriendApplication, updateFriendInfo, getAddFriendApplications, updateAddFriendApplication, deleteFriend } from '@/api/friend';
import Client from '@/msg/client';
import { changeGroupMemberInfo, confirmJoinGroupInvite, createGroup, genGroupQRCode, getGroupInfo, getGroupInfos, getGroupMemberInfos, getJoinGroupInvite, getUserGroupInfos, inviteJoinGroup, scanCodeJoinGroup, updateGroupInfo } from '@/api/group';

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

// confirmJoinGroupInvite(2).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// inviteJoinGroup(1, [5], "").then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getJoinGroupInvite(1).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getGroupInfo(1).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getUserGroupInfos(1, 30).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// scanCodeJoinGroup('i5Peiy2UUAWR+2nhhpDWLasWK8BizH6QoO81SH2DzM0lonCimlAsjfmIkh7reqq/OvqDzCWMfsvaY2Ki3Tpp+P4rKftoVeLcAJHc9KtdmPVisj/K1sGJD2HGHBW7nmxyCwD/6q+w/RurRV9U+tPmq0fuA1QnlaUv65utFDdUdwl0tmJV3cApHX0GhWTo4U76XOwge+Mz3IEN+2fMMDkjpAr5lNrrQ/AzfwergUggDnxFvpy4IZFG8F1PSKw17w5i1Zna5De7xt5nQw5Rs1k4ys+mxjiLzv3uc4A926m5shFEJ8uwtsreOQcTzGirm5IMlAlkRezqDOr+Ibk28Xhhyg==').then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// genGroupQRCode(1).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// changeGroupMemberInfo(1, {
//     GroupNickName: "jiaxwu",
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getGroupMemberInfos(1, {
//     MemberID: 1,
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// updateGroupInfo(1, {
//     IsInviteJoinGroupNeedConfirm: true,
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// getGroupInfos({
//     All: true
// }).then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })

// createGroup("哈哈哈这是一个群", "", [1]).then(res => {
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