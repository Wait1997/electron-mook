import React from 'react'
import styles from './index.less'

export default function Synopsis() {
  return (
    <div className={styles.content}>
      <p className={styles.name}>熊国放</p>
      <p className={styles.job}>前端工程师</p>
      <p className={styles.summary}>
        {[
          '投身开源，rc-redux-model 库作者，SugarTurboS Club 开源组织负责人',
          '掘金 lv3 博主，掘金文章 10w+ 阅读量，github blog 300+ star',
          '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
          '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神'
        ].join('，')}
      </p>
    </div>
  )
}