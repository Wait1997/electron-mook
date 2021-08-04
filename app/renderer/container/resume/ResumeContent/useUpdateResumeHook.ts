import { useSelector, useDispatch } from 'react-redux'
import {
  sendContentBaseAction,
  sendContentHobbyAction,
  sendContentCertificateAction,
  sendContentContactAction,
  sendContentSkillAction,
  sendContentWorkAction,
  sendContentProjectExperienceAction,
  sendContentSchoolExperienceAction
} from '@r/store/actions/resume'
import { AdapterExperienceType } from './UseForm/WrapperExperience/adapter'

/**
 * 修改个人基本信息
 * @returns {TS.ResumeBase} base
 */
function useUpdatePersonalHook() {
  const dispatch = useDispatch()
  const base: TSResume.Base = useSelector((state: any) => state.resumeReducer.base)

  return <T>(stateKey: string, stateValue: T) =>
    dispatch(
      sendContentBaseAction({
        ...base,
        [stateKey]: stateValue
      })
    )
}

/**
 * 个人兴趣方法
 * @returns hobby兴趣
 */
function useUpdateHobbyHook() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => dispatch(sendContentHobbyAction(stateValue))
}

function useUpdateCertificateHook() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => dispatch(sendContentCertificateAction(stateValue))
}

function useUpdateContactHook() {
  const dispatch = useDispatch()
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeReducer.contact)

  return <T>(stateKey: string, stateValue: T) =>
    dispatch(
      sendContentContactAction({
        ...contact,
        [stateKey]: stateValue
      })
    )
}

function useUpdateSkillHook() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => {
    const skillList = stateValue ? (stateValue as any).split('｜') : []
    dispatch(
      sendContentSkillAction({
        skill: stateValue as any,
        skillList
      })
    )
  }
}

export function useUpdateWorkHook() {
  const dispatch = useDispatch()
  const work: TSResume.Work = useSelector((state: any) => state.resumeReducer?.work)
  return <T>(stateKey: string, stateValue: T): void => {
    let cityList = work?.cityList ? [...work.cityList] : []
    if (stateKey === 'city') {
      cityList = (stateValue as any).split('｜')
    }
    dispatch(
      sendContentWorkAction({
        ...work,
        cityList,
        [stateKey]: stateValue
      })
    )
  }
}

export function useUpdateProjectExperience() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => {
    const newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      const parseContent = s.content ? s.content.split('｜') : []
      return {
        ...s,
        projectName: s?.title,
        parseContent
      }
    })
    dispatch(sendContentProjectExperienceAction(newList))
  }
}

export function useUpdateSchoolExperience() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => {
    const newList = (stateValue as any)?.map((s: AdapterExperienceType): TSResume.SchoolExperience => {
      const parseContent = s.content ? s.content.split('｜') : []
      return {
        ...s,
        department: s?.title,
        parseContent
      }
    })
    dispatch(sendContentSchoolExperienceAction(newList))
  }
}

export function useUpdateWorkExperience() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => {
    const newList = (stateValue as any)?.map((s: AdapterExperienceType): TSResume.WorkExperience => {
      const parseContent = s.content ? s.content.split('｜') : []
      return {
        ...s,
        department: s?.title,
        parseContent
      }
    })
    dispatch(sendContentSchoolExperienceAction(newList))
  }
}

/**
 * 自定义hook
 * @returns 返回更新的函数
 */
export default function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook()
  const updateHobbyHook = useUpdateHobbyHook()
  const updateCertificateHook = useUpdateCertificateHook()
  const updateContactHook = useUpdateContactHook()
  const updateSkillHook = useUpdateSkillHook()
  const updateWorkHook = useUpdateWorkHook()
  const updateProjectExperience = useUpdateProjectExperience()
  const updateSchoolExperience = useUpdateSchoolExperience()
  const updateWorkExperience = useUpdateWorkExperience()

  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || []
    if (keys[0] && keys[0] === 'base') {
      updatePersonalHook<T>(keys[1], stateValue)
    }
    if (keys[0] && keys[0] === 'hobby') {
      updateHobbyHook<T>(stateValue)
    }
    if (keys[0] && keys[0] === 'certificate') {
      updateCertificateHook<T>(stateValue)
    }
    if (keys[0] && keys[0] === 'contact') {
      updateContactHook<T>(keys[1], stateValue)
    }
    if (keys[0] && keys[0] === 'skill') {
      updateSkillHook<T>(stateValue)
    }
    if (keys[0] && keys[0] === 'work') {
      updateWorkHook<T>(keys[1], stateValue)
    }
    if (keys[0] === 'projectExperience') {
      updateProjectExperience<T>(stateValue)
    }
    if (keys[0] === 'schoolExperience') {
      updateSchoolExperience(stateValue)
    }
    if (keys[0] === 'workExperience') {
      updateWorkExperience(stateValue)
    }
  }
}
