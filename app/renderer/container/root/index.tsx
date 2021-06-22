import React from 'react'
import { shell } from 'electron'
import { useHistory } from 'react-router-dom'
import { ROUTER_ENTRY, ROUTER_KEY } from '@r/common/constants/route'
import { isHttpOrHttpsUrl } from '@r/common/utils/route'
import Logo from '@a/logo.png'
import styles from './index.less'

export default function Root() {
  const history = useHistory()

  const onRouterToLink = (router: TSRouter.Item): void => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url)
    } else if (router.key !== ROUTER_KEY.resume) {
      history.push(router.url)
    } else {
      history.push(router.url)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img className={styles.picUrl} src={Logo} alt='' />
        <div className={styles.title}>electronMook</div>
        <div className={styles.tips}>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className={styles.action}>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => (
            <div
              className={styles.item}
              key={router.url}
              onClick={() => {
                onRouterToLink(router)
              }}>
              {router.text}
            </div>
          ))}
        </div>
        <div className={styles.wrap}>
          <div className={styles.footer}>
            <p className={styles.copyright}>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By laopozhu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
