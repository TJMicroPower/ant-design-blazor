---
category: Components
type: 数据录入
title: Checkbox
subtitle: 多选框
---

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。


## API
Checkbox

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| AutoFocus | 自动获取焦点                             | boolean        | false         |
| Checked            | 指定当前是否选中         | boolean         |false|
| Disabled            | 失效状态         | boolean         |false       |
| Indeterminate |设置 indeterminate 状态，只负责样式控制       | boolean        | false         |
| CheckedChange |变化时回调函数| function(e)|-     |

Checkbox Group

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| CheckboxItems | 自动获取焦点                             | IList<AntCheckbox>        | -         |
| Disable | 整组失效                             | boolean        | false         |
| Options            |指定可选项         | CheckboxOption[]         |-       |
| Value |选中组的值列表     | IList<string>        | Array.Empty<string>()         |
| ValueChanged |变化时回调函数| function(e)|-     |