export const BASE = 'BASE'
export const HOBBY = 'HOBBY'

/**
 * @description 更新基本信息
 */
export interface SendContentBase {
  type: typeof BASE
  payload: TSResume.Base
}

/**
 * @description 更新兴趣爱好
 */
export interface SendContentHobby {
  type: typeof HOBBY
  payload: string
}

export type ResumeType = typeof BASE | typeof HOBBY
export type ResumeContent = SendContentBase | SendContentHobby

export function sendContentBaseAction(payload: TSResume.Base) {
  return {
    type: BASE,
    payload
  }
}

export function sendContentHobbyAction(payload: string) {
  return {
    type: HOBBY,
    payload
  }
}
