import clone from '@/lib/clone.ts';

const localStorageKeyName = 'recordlist';

const recordlistmodel = {
  data:[] as RecordItem[],
  create(record:RecordItem) {
    // 声明一个deepclone
    const deepClone: RecordItem = clone(record)
    deepClone.createdAt=new Date();
    //把深拷贝的数据push进入recordlist
    this.data.push(deepClone);
  },
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save(data:RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};

export {recordlistmodel};