/* eslint-disable class-methods-use-this */
export interface AdapterExperienceType {
  /**
   * @description 标题
   */
  title?: string
  /**
   * @description 职位
   */
  post?: string
  /**
   * @description 主要工作
   */
  content?: string
  parseContent?: string[]
  /**
   * @description 开始时间
   */
  beginTime?: number | string | undefined
  /**
   * @description 结束时间
   */
  endTime?: number | string | undefined
  /**
   * @description 额外的补充内容
   */
  supplement?: string
  /**
   * @description 最后的编辑时间
   */
  date?: number
}

class AdapterExperience {
  /**
   * @description 项目经验
   * @param {TSResume.ProjectExperience[]} list 项目经验的数组
   * @returns 项目经验的数组
   */
  public project(list: TSResume.ProjectExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return []
    const adapterList = list.map((item) => {
      return {
        ...item,
        title: item.projectName
      }
    })
    return adapterList
  }

  /**
   * @description 工作经验
   * @param list 数组
   * @returns 数组
   */
  public work(list: TSResume.WorkExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return []
    return list.map((item) => {
      return {
        ...item,
        title: item.department
      }
    })
  }

  /**
   * @description 在校经验
   */
  public school(list: TSResume.SchoolExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return []
    return list.map((item) => {
      return {
        ...item,
        title: item.department
      }
    })
  }
}

export default new AdapterExperience()
