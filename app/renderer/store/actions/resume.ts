export const BASE = 'BASE'
export const HOBBY = 'HOBBY'
export const CERTIFICATE = 'CERTIFICATE'
export const CONTACT = 'CONTACT'
export const SKILL = 'SKILL'
export const WORK = 'WORK'

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
export interface SendContentHobby<T> {
  type: typeof HOBBY
  payload: T
}

export interface SendContentCertificate<T> {
  type: typeof CERTIFICATE
  payload: T
}

export interface SendContentContact {
  type: typeof CONTACT
  payload: TSResume.Contact
}

export interface SendContentSkill {
  type: typeof SKILL
  payload: {
    skill: string
    skillList: string[]
  }
}

export interface SendContentWork {
  type: typeof WORK
  payload: TSResume.Work
}

export type ResumeType = typeof BASE | typeof HOBBY | typeof CERTIFICATE | typeof CONTACT | typeof SKILL | typeof WORK

export type ResumeContent<T> =
  | SendContentBase
  | SendContentHobby<T>
  | SendContentCertificate<T>
  | SendContentContact
  | SendContentSkill
  | SendContentWork

export function sendContentBaseAction(payload: TSResume.Base) {
  return {
    type: BASE,
    payload
  }
}

export function sendContentHobbyAction<T>(payload: T) {
  return {
    type: HOBBY,
    payload
  }
}

export function sendContentCertificateAction<T>(payload: T) {
  return {
    type: CERTIFICATE,
    payload
  }
}

export function sendContentContactAction(payload: TSResume.Contact): SendContentContact {
  return {
    type: CONTACT,
    payload
  }
}

export function sendContentSkillAction(payload: { skill: string; skillList: string[] }): SendContentSkill {
  return {
    type: SKILL,
    payload
  }
}

export function sendContentWorkAction(payload: TSResume.Work): SendContentWork {
  return {
    type: WORK,
    payload
  }
}
