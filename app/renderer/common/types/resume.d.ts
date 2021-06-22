declare namespace TSResume {
  /**
   * @description 基本信息
   */
  export interface Base {
    avatar?: string
    username: string
    area?: string
    school?: string
    onSchoolTime?: {
      beginTime: string | number | null
      endTime: string | number | null
    }
    major?: string
    degree?: string
    hometown?: string
    political?: string
  }

  /**
   * @description 联系方式
   */
  export interface Contact {
    phone?: string
    email?: string
    github?: string
    juejin?: string
  }

  /**
   * @description 求职岗位
   */
  export interface Work {
    /**
     * @description 意愿岗位
     */
    job?: string
    city?: string
    cityList?: string[]
  }

  export interface Experience {
    beginTime?: number | string
    endTime?: number | string
    /**
     * @description 额外补充内容
     */
    supplement?: string
    /**
     * @description 最后修改时间
     */
    date?: number
  }

  export interface SchoolExperience extends Experience {
    /**
     * @description 部门
     */
    department?: string
    /**
     * @description 职位
     */
    post?: string
    /**
     * @description 主要工作
     */
    content?: string
    parseContent?: string[]
  }

  export interface WorkExperience extends Experience {
    /**
     * @description 部门
     */
    department?: string
    post?: string
    content?: string
    parseContent?: string[]
  }

  export interface ProjectExperience extends Experience {
    /**
     * @description 项目名
     */
    projectName?: string
    post?: string
    content?: string
    parseContent?: string[]
  }

  /**
   * @description 完整的简历的数据结构
   */
  export interface IntactResume {
    base: Base
    skill: string
    skillList: string[]
    hobby: string
    evaluation: string
    evaluationList: string[]
    certificate: string
    certificateList: string[]
    contact: Contact
    work: Work
    workExperience?: WorkExperience[]
    schoolExperience?: SchoolExperience[]
    projectExperience?: ProjectExperience[]
  }

  /**
   * @description 简历模版
   */
  export interface TemplateItem {
    id: string
    name: string
    /**
     * @description 模版封面
     */
    cover: string
  }

  export type ToolKey =
    | 'personal'
    | 'contact'
    | 'education'
    | 'workPrefer'
    | 'schoolExperience'
    | 'projectExperience'
    | 'workExperience'
    | 'certificate'
    | 'evaluation'
    | 'skill'
    | 'test'

  export interface Slideritem {
    key: ToolKey
    name: string
    summary: string
    required?: boolean
  }
}
