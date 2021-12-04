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