import axios from "./axios"

/**
 * 获取好友信息
 * @param Condition 选1
 */
export const getFriendInfos = (Condition: {
  Username?: string // 好友用户名
  FriendID?: number // 好友编号
  IsFriend?: boolean // 全部朋友
}) => {
  return axios.post('/friend/infos/get', {
    Condition: Condition
  })
}

/**
 * 更新好友信息
 * @param FriendID // 好友编号
 * @param Action // 更新好友信息请求的行为
 */
export const updateFriendInfo = (FriendID: number, Action: {
  IsDisturb?: boolean // 是否免打扰
  IsBlacklist?: boolean // 是否黑名单
  IsTop?: boolean // 是否置顶
  Remark?: string // 备注
  Description?: string // 描述
}) => {
  return axios.post('/friend/info/update', {
    FriendID: FriendID,
    Action: Action
  })
}

/**
 * 获取添加好友申请
 * @param LastAddFriendApplicationId 最后一个添加好友请求的编号（因为是反过来排序的）
 * @param Size 多少条
 */
export const getAddFriendApplications = (LastAddFriendApplicationId: number, Size: number) => {
  return axios.post('/friend/add-friend-applications/get', {
    LastAddFriendApplicationId: LastAddFriendApplicationId,
    Size: Size
  })
}

/**
 * 创建添加好友申请
 * @param FriendID 好友编号
 * @param ApplicationMsg 申请消息
 */
export const createAddFriendApplication = (FriendID: number, ApplicationMsg: string) => {
  return axios.post('/friend/add-friend-application/create', {
    FriendID: FriendID,
    ApplicationMsg: ApplicationMsg
  })
}

/**
 * 更新添加好友申请
 * @param AddFriendApplicationID 添加好友申请编号
 * @param Action 更新添加好友申请请求的行为
 */
export const updateAddFriendApplication = (AddFriendApplicationID: number, Action: {
  ApplicationMsg?: string // 申请消息
  FriendReply?: string // 好友回复
  Accept?: boolean // 接受
  Reject?: boolean // 拒绝
}) => {
  return axios.post('/friend/add-friend-application/update', {
    AddFriendApplicationID: AddFriendApplicationID,
    Action: Action
  })
}