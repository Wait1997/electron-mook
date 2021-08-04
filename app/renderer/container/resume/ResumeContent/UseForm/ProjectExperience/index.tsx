import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import MyModal from '@/renderer/common/components/MyModal'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter'
import Wrapper from '../WrapperExperience'
import Form from './Form'

export interface IProps {
  onClose(): void
}

/**
 * @description dataList传递适配的最新的projectExperience列表
 */
export default function ProjectExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeReducer.projectExperience
  )

  /**
   * @description 回调函数更新数据到redux
   */
  const updateDataList = useCallback(
    (dataList: AdapterExperienceType[]) => {
      updateResumeHook<AdapterExperienceType[]>('projectExperience', dataList)
    },
    [updateResumeHook]
  )
  return (
    <MyModal.Dialog
      title='项目经验'
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}
      width={960}
      childStyle={{ padding: 0 }}>
      <Wrapper dataList={AdapterExperience.project(projectExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </MyModal.Dialog>
  )
}
