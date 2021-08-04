import React, { useState, useEffect, useCallback } from 'react'
import MyModal from '@/renderer/common/components/MyModal'
import Left from '../WrapperExperience/Left'
import Menu from '../WrapperExperience/Menu'
import Form from '../WorkExperience/Form'
import { AdapterExperienceType } from '../WrapperExperience/adapter'
import styles from './index.less'

export interface IProps {
  dataList: any[]
  updateDataList: (dataList: any[]) => void
}

export const onAddExperience = (prevList: AdapterExperienceType[]): AdapterExperienceType[] => {
  const nextList = [...prevList]
  const newAddItem: AdapterExperienceType = {
    title: '未命名条目',
    date: Date.now(),
    post: '',
    content: '',
    parseContent: [],
    beginTime: '',
    endTime: '',
    supplement: ''
  }
  nextList.unshift(newAddItem)
  return nextList
}

export const onDeleteExperience = (deleteIndex: number, prevList: AdapterExperienceType[]): AdapterExperienceType[] => {
  const nextList = [...prevList]
  nextList.splice(deleteIndex, 1)
  return nextList
}

export default function WrapperExperience({ dataList, updateDataList }: IProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [currentItem, setCurrentItem] = useState<AdapterExperienceType>({})
  const [experienceList, setExperienceList] = useState<AdapterExperienceType[]>([])
  // 删除状态
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    deleteIndex: -1
  })

  // 编辑状态
  const [editModal, setEditModal] = useState({
    showByCancel: false, // 编辑状态下的取消弹窗
    showBySave: false, // 编辑状态下的保存弹窗
    status: false, // 编辑状态
    tempSaveItem: {}, // 暂时保存的数据
    onAfterFn: () => null // 操作之后的执行方法
  })

  // 初次条目列表不为空，默认选中第一条
  useEffect(() => {
    if (dataList && dataList?.length > 0) {
      setCurrentIndex(0)
    }
  }, [dataList])

  // 当条目数据列表修改更新，则更新数据
  useEffect(() => {
    if (dataList && dataList?.length > 0) {
      setExperienceList(dataList ?? [])
    } else {
      setExperienceList([])
    }
  }, [dataList])

  // 当条目索引发生变化，更新当前选中的条目数据
  useEffect(() => {
    if (currentIndex >= 0) {
      // 当前选中的条目数据项
      setCurrentItem(experienceList[currentIndex])
    }
  }, [currentIndex, experienceList])

  // 修改编辑状态
  const onToggleEditModal = useCallback((config) => {
    setEditModal((prev) => {
      return {
        ...prev,
        ...config
      }
    })
  }, [])

  // 添加条目
  const onAddItem = (): void => {
    if (editModal.status) {
      onToggleEditModal({
        showByCancel: true,
        onAfterFn: () => {
          const newList = onAddExperience(experienceList)
          if (newList.length > 0) {
            setCurrentIndex(0) // 第一条保持高亮
            setExperienceList(newList) // 更新Left列表数据
            updateDataList && updateDataList(newList) // 更新数据到redux
          }
        }
      })
    } else {
      const newList = onAddExperience(experienceList)
      if (newList.length > 0) {
        setCurrentIndex(0)
        setExperienceList(newList)
        updateDataList && updateDataList(newList)
      }
    }
  }

  // 修改选中的条目
  const onChangeItem = useCallback(
    (index: number): void => {
      if (editModal.status) {
        onToggleEditModal({
          showByCancel: true,
          onAfterFn: () => {
            setCurrentIndex(index)
          }
        })
      } else {
        setCurrentIndex(index)
      }
    },
    [editModal.status, onToggleEditModal]
  )

  // 删除条目
  const onDeleteItem = (index: number): void => {
    setDeleteModal({
      show: true,
      deleteIndex: index
    })
  }

  const onDeleteCancel = useCallback(() => {
    setDeleteModal({
      show: false,
      deleteIndex: -1
    })
  }, [])

  const onDeleteOK = useCallback(() => {
    const newList = onDeleteExperience(deleteModal.deleteIndex, experienceList)
    if (newList.length > 0) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(-1)
    }
    // 关闭弹窗
    setDeleteModal({
      show: false,
      deleteIndex: -1
    })
    // 更新列表数据
    setExperienceList(newList)
    updateDataList && updateDataList(newList) // 更新数据同步到redux
  }, [deleteModal.deleteIndex, experienceList, updateDataList])

  const onSaveEditValue = useCallback(() => {
    const newList = [...experienceList]
    const item = editModal?.tempSaveItem ? { ...editModal?.tempSaveItem } : { ...currentItem }
    newList[currentIndex] = item
    // 更新当前Left列表项
    setExperienceList(newList)
    // 为了更新Right数据到redux
    updateDataList && updateDataList(newList)
    onToggleEditModal({
      status: false // 按钮变为编辑状态,且表单不可编辑
    })
  }, [currentIndex, experienceList, currentItem, updateDataList, onToggleEditModal, editModal.tempSaveItem])

  const onCancelEditValue = useCallback(() => {
    onToggleEditModal({
      showByCancel: true
    })
  }, [onToggleEditModal])

  const onChangeEditStatus = useCallback(() => {
    onToggleEditModal({
      status: true,
      // 编辑时暂存当前的项
      tempSaveItem: { ...currentItem }
    })
  }, [onToggleEditModal, currentItem])

  const onChangeCurrentItem = useCallback(
    (item: AdapterExperienceType) => {
      onToggleEditModal({
        tempSaveItem: { ...item }
      })
      setCurrentItem(item)
    },
    [onToggleEditModal]
  )

  return (
    <div className={styles.form}>
      <div className={styles['left-box']}>
        <Left
          index={currentIndex}
          experienceList={experienceList}
          onAdd={onAddItem}
          onChange={onChangeItem}
          onDelete={onDeleteItem}
        />
      </div>
      <div className={styles['right-box']}>
        {experienceList.length > 0 && (
          <>
            <div className={styles.header}>
              <Menu
                isEdit={editModal?.status}
                currentItem={currentItem}
                onCancelEditValue={onCancelEditValue}
                onSaveEditValue={onSaveEditValue}
                onChangeEditStatus={onChangeEditStatus}
              />
            </div>
            <div className={styles.content}>
              <Form
                isDisable={!editModal?.status}
                currentItem={currentItem}
                onChangeCurrentItem={onChangeCurrentItem}
              />
            </div>
          </>
        )}
      </div>
      {deleteModal.show && (
        <MyModal.Confirm
          title='确定要删除条目吗？'
          description='删除后将无法恢复~'
          config={{
            cancelBtn: {
              isShow: true,
              callback: onDeleteCancel
            },
            submitBtn: {
              isShow: true,
              callback: onDeleteOK
            }
          }}
        />
      )}
      {editModal.showByCancel && (
        <MyModal.Confirm
          title='你确定放弃编辑的笔记内容？'
          description='放弃后将无法恢复哦～'
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  showByCancel: false
                })
              }
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  status: false,
                  showByCancel: false,
                  tempSaveItem: {}
                })
                editModal?.onAfterFn && editModal?.onAfterFn()
                setCurrentItem(experienceList[currentIndex])
              }
            }
          }}
        />
      )}
    </div>
  )
}
