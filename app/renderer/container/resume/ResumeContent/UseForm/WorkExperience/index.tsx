import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import MyModal from '@r/common/components/MyModal'
import WrapperHoc from '@r/container/resume/ResumeContent/UseForm/WrapperExperienceHoc'
import useUpdateResumeHook from '../../useUpdateResumeHook'
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter'

interface IProps {
  onClose(): void
}

export default function SchoolExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeReducer.workExperience)

  /**
   * @description 回调函数更新数据到redux
   */
  const updateDataList = useCallback(
    (dataList: AdapterExperienceType[]) => {
      updateResumeHook<AdapterExperienceType[]>('workExperience', dataList)
    },
    [updateResumeHook]
  )

  return (
    <MyModal.Dialog
      title='工作经历'
      width={960}
      showFooter={false}
      childStyle={{ padding: 0 }}
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}>
      <WrapperHoc dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList} />
    </MyModal.Dialog>
  )
}
