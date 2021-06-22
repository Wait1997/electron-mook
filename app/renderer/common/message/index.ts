export const MESSAGE_EVENT_NAME_MAPS = {
  OPEN_FORM_MODAL: 'open_form_modal' // 简历模板选择
}

class Message {
  public send = (
    eventName: string,
    payload: {
      formKey: TSResume.ToolKey
    }
  ): void => {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          payload
        }
      })
    )
  }

  public receive = (e: any, messageHandler: (value: any) => any): void => {
    if (messageHandler) {
      const payload = e?.detail?.payload
      messageHandler(payload)
    }
  }
}

export default new Message()
