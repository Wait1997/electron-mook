import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SendToolKeysAction } from '@r/store/actions/template'
import Message, { MESSAGE_EVENT_NAME_MAPS } from '@r/common/message'
import MyScrollBox from '@/renderer/common/components/MyScrollBox'
import resumeToolbarList from '@/renderer/common/constants/resume'
import { onAddToolbar, onDeleteToolbar } from './utils'
import styles from './index.less'

export default function ResumeToolbar() {
  const dispatch = useDispatch()
  const height = document.documentElement.clientHeight
  const [addToolbarList, setAddToolbarList] = useState<TSResume.Slideritem[]>([])
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.Slideritem[]>([])

  // 保存toolkeys中的值到redux中
  const changeResumeToolbarKeys = useCallback(
    (toolKeys: TSResume.ToolKey[]): void => {
      if (toolKeys.length > 0) {
        dispatch(SendToolKeysAction(toolKeys))
      }
    },
    [dispatch]
  )

  // 添加模块
  const onAddSliderAction = (toolbar: TSResume.Slideritem): void => {
    const nextAddSliderList = onAddToolbar(addToolbarList, toolbar)
    setAddToolbarList(nextAddSliderList)

    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, toolbar)
    setUnAddToolbarList(nextUnAddSliderList)

    changeResumeToolbarKeys(nextAddSliderList.map((toolbar) => toolbar.key))
  }

  // 删除模块
  const onDeleteSliderAction = (toolbar: TSResume.Slideritem): void => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, toolbar)
    setAddToolbarList(nextAddSliderList)

    const nextUnAddSliderList = onAddToolbar(unAddToolbarList, toolbar)
    setUnAddToolbarList(nextUnAddSliderList)

    changeResumeToolbarKeys(nextAddSliderList.map((toolbar) => toolbar.key))
  }

  useEffect(() => {
    if (resumeToolbarList.length > 0) {
      const addToolbarList: TSResume.Slideritem[] = []
      const unAddToolbarList: TSResume.Slideritem[] = []
      for (const el of resumeToolbarList) {
        el.required ? addToolbarList.push(el) : unAddToolbarList.push(el)
      }
      setAddToolbarList(addToolbarList)
      setUnAddToolbarList(unAddToolbarList)
      changeResumeToolbarKeys(addToolbarList.map((toolbar) => toolbar.key))
    }
  }, [changeResumeToolbarKeys])

  return (
    <div className={styles.slider}>
      <MyScrollBox maxHeight={height - 180}>
        {addToolbarList.length > 0 && (
          <div className={styles.module}>
            <div className={styles.title}>
              <span className={styles.line} />
              以添加模块
            </div>
            <div className={styles.content}>
              {addToolbarList.map((toolbar: TSResume.Slideritem) => {
                return (
                  <div
                    className={styles.box}
                    key={toolbar.key}
                    onClick={() => {
                      Message.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        formKey: toolbar.key
                      })
                    }}>
                    <div className={styles.info}>
                      <i className={styles.icon} />
                      <div className={styles.text}>
                        <div className={styles.name}>{toolbar.name}</div>
                        <div className={styles.summary}>{toolbar.summary}</div>
                      </div>
                      {toolbar.required && <div className={styles.tips}>必选项</div>}
                      {!toolbar.required && (
                        <div className={styles.action}>
                          <i className={styles.edit} />
                          <i
                            className={styles.delete}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation()
                              onDeleteSliderAction(toolbar)
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {unAddToolbarList.length > 0 && (
          <div className={styles.module}>
            <div className={styles.title}>
              <span className={styles.line} />
              未添加模块
            </div>
            <div className={styles.content}>
              {unAddToolbarList.map((toolbar: TSResume.Slideritem) => {
                return (
                  <div className={styles.box} key={toolbar.key} onClick={() => onAddSliderAction(toolbar)}>
                    <div className={styles.info}>
                      <i className={styles.icon} />
                      <div className={styles.text}>
                        <div className={styles.name}>{toolbar.name}</div>
                        <div className={styles.summary}>{toolbar.summary}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  )
}
