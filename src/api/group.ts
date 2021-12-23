import axios from "./axios"

/**
 * 获取群信息
 * @param GroupID 群编号
 */
export const getGroupInfo = (GroupID: number) => {
  return axios.post('/group/info/get', {
    GroupID: GroupID,
  })
}

/**
 * 获取用户群信息
 * @param Page 页码
 * @param Size 页大小
 */
export const getUserGroupInfos = (Page: number, Size: number) => {
  return axios.post('/user/group/infos/get', {
    Page: Page,
    Size: Size
  })
}

/**
 * 创建群
 * @param Name 群名
 * @param Icon 群头像
 * @param MemberIDS 群成员
 */
export const createGroup = (Name: string, Icon: string, MemberIDS: number[]) => {
  return axios.post('/group/create', {
    Name: Name,
    Icon: Icon,
    MemberIDS: MemberIDS
  })
}

/**
 * 更新群信息
 * @param GroupID 群编号
 * @param Action 更新行为
 */
export const updateGroupInfo = (GroupID: number, Action: {
  Name?: string, // 群名
  Icon?: string, // 图标
  Notice?: string, // 群公告
  IsInviteJoinGroupNeedConfirm?: boolean, // 是否邀请入群需要管理员或群主确认（默认不需要确认直接入群）
}) => {
  return axios.post('/group/info/update', {
    GroupID: GroupID,
    Action: Action,
  })
}

/**
 * 获取群成员信息
 * @param GroupID 群编号
 * @param Condition 条件
 */
export const getGroupMemberInfos = (GroupID: number, Condition: {
  All?: boolean, // 全部
  MemberID?: number // 成员编号
}) => {
  return axios.post('/group/member/infos/get', {
    GroupID: GroupID,
    Condition: Condition,
  })
}

/**
 * 修改群成员信息
 * @param GroupID 群编号
 * @param Action 行为
 */
export const changeGroupMemberInfo = (GroupID: number, Action: {
  GroupNickName?: string, // 群昵称
  IsDisturb?: boolean, // 是否免打扰
  IsTop?: boolean, // 是否置顶
  IsShowNickName?: boolean, // 是显示群成员昵称
}) => {
  return axios.post('/group/member/info/change', {
    GroupID: GroupID,
    Action: Action,
  })
}

/**
 * 生成群二维码
 * @param GroupID 群编号
 */
export const genGroupQRCode = (GroupID: number) => {
  return axios.post('/group/qrcode/gen', {
    GroupID: GroupID,
  })
}

/**
 * 扫码入群
 * @param QRCode 群二维码
 */
export const scanCodeJoinGroup = (QRCode: string) => {
  return axios.post('/group/join/code/scan', {
    QRCode: QRCode,
  })
}

/**
 * 邀请入群
 * @param GroupID 群编号
 * @param InviteeIDS 被邀请人编号列表
 * @param Reason 邀请理由
 */
export const inviteJoinGroup = (GroupID: number, InviteeIDS: number[], Reason: string) => {
  return axios.post('/group/join/invite', {
    GroupID: GroupID,
    InviteeIDS: InviteeIDS,
    Reason: Reason,
  })
}

/**
 * 获取入群邀请
 * @param JoinGroupInviteID 入群邀请编号
 */
export const getJoinGroupInvite = (JoinGroupInviteID: number) => {
  return axios.post('/group/join/invite/get', {
    JoinGroupInviteID: JoinGroupInviteID,
  })
}

/**
 * 确认入群邀请
 * @param JoinGroupInviteID 入群邀请编号
 */
export const confirmJoinGroupInvite = (JoinGroupInviteID: number) => {
  return axios.post('/group/join/invite/confirm', {
    JoinGroupInviteID: JoinGroupInviteID,
  })
}