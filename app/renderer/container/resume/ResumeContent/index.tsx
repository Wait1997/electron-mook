import React, { useState, useEffect } from 'react'
import Message, { MESSAGE_EVENT_NAME_MAPS } from '@/renderer/common/message'
import { ResumeToolbarMaps } from '@r/common/constants/resume'
import MyScrollBox from '@/renderer/common/components/MyScrollBox'
import PersonalForm from '@r/container/resume/ResumeContent/UseForm/Personal'
import ContactForm from '@r/container/resume/ResumeContent/UseForm/Contact'
import SkillForm from '@r/container/resume/ResumeContent/UseForm/Skill'
import EducationForm from '@r/container/resume/ResumeContent/UseForm/Education'
import WorkForm from '@r/container/resume/ResumeContent/UseForm/Work'
import CertificateForm from '@r/container/resume/ResumeContent/UseForm/Certificate'
import * as UseTemplate from './UseTemplate'

export default function ResumeContent() {
  const HEAD_ACTION_HEIGHT = 92
  const height = document.documentElement.clientHeight

  const [formName, setFormName] = useState<string>('')
  const [showFormModal, setShowFormModal] = useState<boolean>(false)

  /**
   * @description 接受订阅事件传递过来的参数
   */
  const onReceive = (e: any): void => {
    Message.receive(e, (data: any) => {
      setShowFormModal(true)
      setFormName(data?.formKey ?? '')
    })
  }

  const onClose = () => {
    setShowFormModal(false)
    setFormName('')
  }

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive)
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive)
    }
  }, [])

  return (
    <MyScrollBox maxHeight={height - HEAD_ACTION_HEIGHT}>
      <UseTemplate.TemplateOne />
      {showFormModal && (
        <>
          {formName === ResumeToolbarMaps.personal && <PersonalForm onClose={onClose} />}
          {formName === ResumeToolbarMaps.contact && <ContactForm onClose={onClose} />}
          {formName === ResumeToolbarMaps.skill && <SkillForm onClose={onClose} />}
          {formName === ResumeToolbarMaps.education && <EducationForm onClose={onClose} />}
          {formName === ResumeToolbarMaps.workPrefer && <WorkForm onClose={onClose} />}
          {formName === ResumeToolbarMaps.certificate && <CertificateForm onClose={onClose} />}
        </>
      )}
    </MyScrollBox>
  )
}
