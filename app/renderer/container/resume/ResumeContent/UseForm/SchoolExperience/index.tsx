import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import MyModal from '@r/common/components/MyModal'
import Wrapper from '@r/container/resume/ResumeContent/UseForm/WrapperExperience'
import useUpdateResumeHook from '../../useUpdateResumeHook'
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter'
import Form from './Form'

interface IProps {
  onClose(): void
}

export default function SchoolExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const schoolExperience: TSResume.SchoolExperience[] = useSelector(
    (state: any) => state.resumeReducer.schoolExperience
  )

  /**
   * @description 回调函数更新数据到redux
   */
  const updateDataList = useCallback(
    (dataList: AdapterExperienceType[]) => {
      updateResumeHook<AdapterExperienceType[]>('schoolExperience', dataList)
    },
    [updateResumeHook]
  )

  return (
    <MyModal.Dialog
      title='在校经历'
      width={960}
      showFooter={false}
      childStyle={{ padding: 0 }}
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}>
      <Wrapper dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </MyModal.Dialog>
  )
}
