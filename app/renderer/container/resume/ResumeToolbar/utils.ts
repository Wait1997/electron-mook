/**
 * @description 添加工具条
 * @param {TSResume.Slideritem[]} prevToolbarList 上一轮
 * @param {TSResume.Slideritem} currentToolbar 当前点击的模块
 * @returns {TSResume.Slideritem[]} nextToolList 下一轮
 */
export const onAddToolbar = (
  prevToolbarList: TSResume.Slideritem[],
  currentToolbar: TSResume.Slideritem
): TSResume.Slideritem[] => {
  const addKeys = prevToolbarList.map((toolbar) => toolbar.key)
  const nextToolbarList = [...prevToolbarList]

  !addKeys.includes(currentToolbar.key) && nextToolbarList.push(currentToolbar)

  return nextToolbarList
}

/**
 * @description 删除工具条
 * @param {TSResume.Slideritem[]} prevToolbarList 上一轮
 * @param {TSResume.Slideritem} currentToolbar 当前目标模块
 * @returns {{TSResume.Slideritem[]}} nextToolbarList下一轮
 */
export const onDeleteToolbar = (
  prevToolbarList: TSResume.Slideritem[],
  currentToolbar: TSResume.Slideritem
): TSResume.Slideritem[] => {
  const nextToolbarList = [...prevToolbarList]
  const findIndex = nextToolbarList.findIndex((toolbar) => toolbar.key === currentToolbar.key)
  findIndex > -1 && nextToolbarList.splice(findIndex, 1)

  return nextToolbarList
}
