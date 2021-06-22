import React from 'react'
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
  return (
    <div className={styles['a4-box']}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.fillColor} />
          <div className={styles.baseData}>
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        <div className={styles.center}>
          <Synopsis />
          <div className={styles.listData}>
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  )
}
