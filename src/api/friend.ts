import axios from "./axios"

/**
 * 获取好友信息
 * @param condition 选1
 */
export const getFriendInfos = (condition: {
  username?: string // 好友用户名
  friendID?: number // 好友编号
  isFriend?: boolean // 全部朋友
}) => {
  return axios.post('/friend/infos/get', {
    Condition: condition
  })
}

/**
 * 创建添加好友申请
 * @param friendID 好友编号
 * @param applicationMsg 申请消息
 */
export const createAddFriendApplication = (friendID: number, applicationMsg: string) => {
  return axios.post('/friend/add-friend-application/create', {
    FriendID: friendID,
    ApplicationMsg: applicationMsg
  })
}

