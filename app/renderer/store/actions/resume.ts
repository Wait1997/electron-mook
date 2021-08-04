export const BASE = 'BASE'
export const HOBBY = 'HOBBY'
export const CERTIFICATE = 'CERTIFICATE'
export const CONTACT = 'CONTACT'
export const SKILL = 'SKILL'
export const WORK = 'WORK'
export const PROJECTEXPERIENCE = 'PROJECTEXPERIENCE'
export const SCHOOLEXPERIENCE = 'SCHOOLEXPERIENCE'
export const WORKEXPERIENCE = 'WORKEXPERIENCE'

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

/**
 * @description 修改项目经验
 */
export interface SendContentProjectExperience {
  type: typeof PROJECTEXPERIENCE
  payload: TSResume.ProjectExperience[]
}

export interface SendContentSchoolExperience {
  type: typeof SCHOOLEXPERIENCE
  payload: TSResume.SchoolExperience[]
}

export interface SendContentWorkExperience {
  type: typeof WORKEXPERIENCE
  payload: TSResume.WorkExperience[]
}

export type ResumeType =
  | typeof BASE
  | typeof HOBBY
  | typeof CERTIFICATE
  | typeof CONTACT
  | typeof SKILL
  | typeof WORK
  | typeof PROJECTEXPERIENCE
  | typeof SCHOOLEXPERIENCE
  | typeof WORKEXPERIENCE

export type ResumeContent<T> =
  | SendContentBase
  | SendContentHobby<T>
  | SendContentCertificate<T>
  | SendContentContact
  | SendContentSkill
  | SendContentWork
  | SendContentProjectExperience
  | SendContentSchoolExperience
  | SendContentWorkExperience

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

export function sendContentProjectExperienceAction(
  payload: TSResume.ProjectExperience[]
): SendContentProjectExperience {
  return {
    type: PROJECTEXPERIENCE,
    payload
  }
}

export function sendContentSchoolExperienceAction(payload: TSResume.SchoolExperience[]): SendContentSchoolExperience {
  return {
    type: SCHOOLEXPERIENCE,
    payload
  }
}

export function sendContentWorkExperienceAction(payload: TSResume.WorkExperience[]): SendContentWorkExperience {
  return {
    type: WORKEXPERIENCE,
    payload
  }
}
