import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ResumeToolbarMaps } from '@r/common/constants/resume'
import Message, { MESSAGE_EVENT_NAME_MAPS } from '@/renderer/common/message'
import LayoutContent from '@r/container/resume/ResumeContent/LayoutContent'
import Content from '@r/container/resume/ResumeContent/Content'
import Avatar from './components/Avatar'
import BaseInfo from './components/BaseInfo'
import Contact from './components/Contact'
import Job from './components/Job'
import Certificate from './components/Certificate'
import Synopsis from './components/Synopsis'
import Skill from './components/Skill'
import Post from './components/Post'
import Project from './components/Project'
import Work from './components/Work'
import styles from './index.less'
import '../styles/template.less'

export default function TemplateOne() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeReducer.base)
  const resumeToolbarKeys: TSResume.ToolKey = useSelector((state: any) => state.templateReducer.resumeToolbarKeys)

  /**
   * @description 接受订阅事件传递过来的参数
   */
  const onReceive = (e: any): void => {
    Message.receive(e, (data: any) => {
      console.log(data)
    })
  }

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive)
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive)
    }
  }, [])

  return (
    <LayoutContent className={styles.container}>
      <Content className={styles.left}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.fillColor} />
        <div className={styles.baseData}>
          <BaseInfo />
          {resumeToolbarKeys.includes(ResumeToolbarMaps.contact) && <Contact />}
          {resumeToolbarKeys.includes(ResumeToolbarMaps.workPrefer) && <Job />}
          {resumeToolbarKeys.includes(ResumeToolbarMaps.certificate) && <Certificate />}
        </div>
      </Content>
      <Content className={styles.right}>
        {(resumeToolbarKeys.includes(ResumeToolbarMaps.evaluation) || base?.username) && <Synopsis />}
        <div className={styles.listData}>
          {resumeToolbarKeys.includes(ResumeToolbarMaps.skill) && <Skill />}
          {resumeToolbarKeys.includes(ResumeToolbarMaps.schoolExperience) && <Post />}
          {resumeToolbarKeys.includes(ResumeToolbarMaps.projectExperience) && <Project />}
          {resumeToolbarKeys.includes(ResumeToolbarMaps.workExperience) && <Work />}
        </div>
      </Content>
    </LayoutContent>
  )
}
