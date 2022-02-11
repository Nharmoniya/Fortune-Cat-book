import notFound from '@/views/NotFound.vue';
import createId from '@/lib/idCreator.ts';

const localStorageKeyName = 'tagList';
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
const taglistmodel: Taglistmodel = {

  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {

    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id:createId.toString(), name: name});
    this.save();
    return 'success';
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    window.alert('删除成功');
    this.save();
    return true;

  },
  update(id: string, name: string) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export {taglistmodel};