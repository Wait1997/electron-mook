export interface GsStore {
  /**
   * @description 项目路径
   */
  rootPath: string
}

const initialState: GsStore = {
  rootPath: ''
}

const globalReducer = (state: GsStore = initialState, action: any) => {
  return state
}

export default globalReducer
