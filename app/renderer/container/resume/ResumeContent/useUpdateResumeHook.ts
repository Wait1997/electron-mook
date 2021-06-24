import { useSelector, useDispatch } from 'react-redux'
import { sendContentBaseAction, sendContentHobbyAction } from '@r/store/actions/resume'

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

function useUpdateHobbyHook() {
  const dispatch = useDispatch()
  return <T>(stateValue: T) => dispatch(sendContentHobbyAction(stateValue))
}

export default function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook()
  const updateHobbyHook = useUpdateHobbyHook()
  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || []
    if (keys[0] && keys[0] === 'base') {
      updatePersonalHook<T>(keys[1], stateValue)
    }
    if (keys[0] && keys[0] === 'hobby') {
      updateHobbyHook<T>(stateValue)
    }
  }
}
