//声明一个类型，里面记录tags，notes，type，amount的类型;注意string[]是字符串数组的意思
type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date  // 类 / 构造函数
}

interface Window{
  tagList:Tag[]
}

type Tag = {
  id: string;
  name: string;
}
type Taglistmodel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //success 表示成功，duplicated表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  save: () => void
  remove: (id: string) => boolean
}