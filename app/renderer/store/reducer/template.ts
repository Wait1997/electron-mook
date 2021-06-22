import { TemplateType, TOOL_KEY } from '@r/store/actions/template'

export interface KeyStore {
  resumeToolbarKeys: TSResume.ToolKey[]
}

const initialState: KeyStore = {
  resumeToolbarKeys: []
}

const templateReducer = (state: KeyStore = initialState, action: TemplateType): KeyStore => {
  const { type, payload } = action
  const newState: KeyStore = state
  switch (type) {
    case TOOL_KEY:
      newState.resumeToolbarKeys = [...payload]
      break
    default:
      newState
  }
  return newState
}

export default templateReducer
