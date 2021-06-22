export enum ResumeToolbarMaps {
  personal = 'personal', // 个人信息
  contact = 'contact', // 联系方式
  education = 'education', // 教育信息
  workPrefer = 'workPrefer', // 工作期望
  schoolExperience = 'schoolExperience', // 在校经历
  projectExperience = 'projectExperience', // 项目经验
  workExperience = 'workExperience', // 工作经历
  certificate = 'certificate', // 获奖证书
  evaluation = 'evaluation', // 个人评价
  skill = 'skill', // 技能清单
  test = 'test' // 测试用例
}

const resumeToolbarList: TSResume.Slideritem[] = [
  {
    key: ResumeToolbarMaps.personal,
    name: '个人信息',
    required: true,
    summary: '更好介绍自己，机会会更多的'
  },
  {
    key: ResumeToolbarMaps.education,
    name: '教育信息',
    required: false,
    summary: '介绍你的学校和专业信息'
  },
  {
    key: ResumeToolbarMaps.contact,
    name: '联系方式',
    required: false,
    summary: '少侠，请留下你的联系方式'
  },
  {
    key: ResumeToolbarMaps.workPrefer,
    name: '工作期望',
    required: false,
    summary: '聊聊你所期望的宜人办公城市'
  },
  {
    key: ResumeToolbarMaps.schoolExperience,
    name: '在校经历',
    required: false,
    summary: '展示在校任职成果和人际关系'
  },
  {
    key: ResumeToolbarMaps.projectExperience,
    name: '项目经验',
    required: false,
    summary: '展示研究过什么优秀项目和成果'
  },
  {
    key: ResumeToolbarMaps.workExperience,
    name: '工作经历',
    required: false,
    summary: '申请岗位的相关经验和能力'
  },
  {
    key: ResumeToolbarMaps.certificate,
    name: '获奖证书',
    required: false,
    summary: '得过什么奖项值得炫耀'
  },
  {
    key: ResumeToolbarMaps.evaluation,
    name: '个人评价',
    required: false,
    summary: '低调夸一夸自己有什么亮点'
  },
  {
    key: ResumeToolbarMaps.skill,
    name: '技能清单',
    required: false,
    summary: '展示具备的技能，突出你的能力'
  },
  {
    key: ResumeToolbarMaps.test,
    name: '测试用例',
    required: true,
    summary: '测试用例，一键覆盖'
  }
]

export default resumeToolbarList
