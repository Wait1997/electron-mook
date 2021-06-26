import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.less'

export default function Contact() {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeReducer.contact)
  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        {contact?.phone && <li className={styles.item}>电话：{contact.phone}</li>}
        {contact?.email && <li className={styles.item}>邮箱：{contact.email}</li>}
        {contact?.github && <li className={styles.item}>github：{contact.github}</li>}
        {contact?.juejin && <li className={styles.item}>juejin：{contact.juejin}</li>}
      </ul>
    </div>
  )
}
