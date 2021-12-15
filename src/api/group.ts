import axios from "./axios"

/**
 * 获取群信息
 * @param Condition 选1
 */
export const getGroupInfos = (Condition: {
  GroupID?: number // 群编号
  All?: boolean // 全部
}) => {
  return axios.post('/group/infos/get', {
    Condition: Condition
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
  Name?:   string, // 群名
	Icon?:   string, // 图标
	Notice?: string, // 群公告
 }) => {
  return axios.post('/group/info/update', {
    GroupID: GroupID,
    Action: Action,
  })
}
