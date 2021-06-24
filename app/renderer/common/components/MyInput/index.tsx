import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

export const TYPE = {
  text: 'text',
  textarea: 'textarea'
}

export type Size = 'normal' | 'large'
export type InputType = 'text' | 'textarea' | ''

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean
  /**
   * 定义文本框的类型 input|textarea
   */
  inputType?: InputType
  size?: Size
  disabled?: boolean
  /**
   * @description 设置前置标签
   */
  addOnBefore?: React.ReactNode
  /**
   * @description 设置后置标签
   */
  addOnAfter?: React.ReactNode
  allowCount?: boolean
  /**
   * @description 可以点击图标删除内容
   */
  allowClear?: boolean
  /**
   * @description textarea的行数 默认2
   */
  rows?: number
  style?: React.CSSProperties
  value?: string | number | undefined
  placeholder?: string
  id?: string
  maxlength?: number
  bgTransparent?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface InputState {
  focus: boolean
  text: string | number
}

export default class MyInput extends React.PureComponent<InputProps, InputState> {
  // 这里 input 定义为 null 为什么报错
  private input: HTMLInputElement | HTMLTextAreaElement | undefined

  constructor(props: InputProps) {
    super(props)
    this.state = {
      focus: false,
      text: props?.value || ''
    }
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({
        text: this.props.value
      })
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: InputProps) {
    if (nextProps.value) {
      this.setState({
        text: nextProps.value
      })
    }
  }

  saveInput = (input: HTMLInputElement | HTMLTextAreaElement) => {
    this.input = input
  }

  onFocus = () => {
    this.setState({
      focus: true
    })
  }

  onBlur = () => {
    this.setState({
      focus: false
    })
  }

  onInput = (e: any) => {
    this.setState({ text: e.target.value })
    this.actionChange(e)
  }

  onClear = (e: React.MouseEvent) => {
    this.setState({ text: '' })
    this.actionChange(e)
  }

  // 模拟change事件
  actionChange(e: any) {
    const target = this.input as any
    const event = Object.create(e)
    // 如果是点击清除按钮，则需要改target指向input，value清空
    if (e.type === 'click') {
      target.value = ''
      event.target = target
      event.currentTarget = target
    }
    this.props.onChange && this.props.onChange(event)
  }

  focus() {
    this.input && this.input.focus()
  }

  blur() {
    this.input && this.input.blur()
  }

  public renderBefore() {
    const { addOnBefore } = this.props
    // !!表示转换为boolean
    return !!addOnBefore && <div className={styles['my-input-center']}>{addOnBefore}</div>
  }

  public renderAfter() {
    const { addOnAfter } = this.props
    return !!addOnAfter && <div className={styles['my-input-center']}>{addOnAfter}</div>
  }

  public renderClear() {
    const { allowClear } = this.props
    return !!allowClear && this.state.text && <i className={styles['my-input-clear']} onClick={this.onClear} />
  }

  public renderInput() {
    const { placeholder, size = 'normal', maxLength, id, disabled, autoFocus, type } = this.props
    return (
      <div className={classnames(styles['my-input-input'], { [`${styles[`${size}`]}`]: true })}>
        <input
          className={styles.input}
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          value={this.state.text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
          type={type}
          ref={this.saveInput as any}
        />
        {this.renderClear()}
      </div>
    )
  }

  public renderTextarea() {
    const { placeholder, maxLength = 800, id, disabled, allowCount = true, autoFocus, rows = 2 } = this.props
    const { text } = this.state
    return (
      <div className={styles['my-input-textarea']} style={{ height: 24 * rows }}>
        <textarea
          className={styles.textarea}
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          rows={rows}
          value={text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
          ref={this.saveInput as any}
        />
        {this.renderClear()}
        {allowCount && (
          <div className={styles['my-input-textarea-footer']}>
            <span
              className={classnames({
                [`${styles['max-length-text']}`]: !!maxLength && text && String(text).length >= maxLength
              })}>
              {String(text).length}
            </span>
            {!!maxLength && (
              <>
                <span>/</span>
                <span>{maxLength}</span>
              </>
            )}
          </div>
        )}
      </div>
    )
  }

  public render() {
    const { bgTransparent = false, allowClear, type, style } = this.props
    return (
      <div
        style={style}
        className={classnames(styles['my-input'], {
          [`${styles.normal}`]: !bgTransparent,
          [`${styles.focus}`]: this.state.focus,
          [`${styles['allow-clear']}`]: allowClear
        })}>
        {this.renderBefore()}
        {TYPE.textarea === type ? this.renderTextarea() : this.renderInput()}
        {this.renderAfter()}
      </div>
    )
  }
}
