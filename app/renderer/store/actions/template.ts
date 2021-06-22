export const TOOL_KEY = 'TOOL_KEY'

export interface SendToolKeysType {
  type: typeof TOOL_KEY
  payload: TSResume.ToolKey[]
}

export type TemplateType = SendToolKeysType

/**
 * @description 工具条传递过来的keys
 * @param {ToolKey[]} payload 工具条类型
 * @returns action
 */
export const SendToolKeysAction = (payload: TSResume.ToolKey[]): SendToolKeysType => {
  return {
    type: TOOL_KEY,
    payload
  }
}
