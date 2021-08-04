declare namespace TSResume {
  /**
   * @description 基本信息
   */
  export interface Base {
    /**
     * @description 头像
     */
    avatar?: string
    /**
     * @description 姓名
     */
    username: string
    /**
     * @description 地区
     */
    area?: string
    /**
     * @description 学校
     */
    school?: string
    /**
     * @description 学年
     */
    onSchoolTime?: {
      beginTime: string | number | null
      endTime: string | number | null
    }
    /**
     * @description 专业
     */
    major?: string
    /**
     * @description 学位
     */
    degree?: string
    /**
     * @description 籍贯
     */
    hometown?: string
    /**
     * @description 政治面貌
     */
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
    /**
     * @description 职位
     */
    post?: string
    content?: string
    parseContent?: string[]
  }

  /**
   * @description 完整的简历的数据结构
   */
  export interface IntactResume {
    /**
     * @description 基本信息
     */
    base: Base
    skill: string
    skillList: string[]
    hobby: string
    evaluation: string
    evaluationList: string[]
    certificate: string
    certificateList: string[]
    /**
     * @description 联系方式
     */
    contact: Contact
    /**
     * 求职岗位
     */
    work: Work
    /**
     * @description 工作经验
     */
    workExperience?: WorkExperience[]
    /**
     * @description 在校经历
     */
    schoolExperience?: SchoolExperience[]
    /**
     * 项目经验
     */
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
