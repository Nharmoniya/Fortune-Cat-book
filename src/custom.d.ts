//声明一个类型，里面记录tags，notes，type，amount的类型;注意string[]是字符串数组的意思
type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date  // 类 / 构造函数
}