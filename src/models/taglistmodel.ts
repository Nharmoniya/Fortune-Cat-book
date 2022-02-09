const localStorageKeyName = 'tagList';
type Taglistmodel={
  data:string[]
  fetch:()=>string[]
  create:(name:string)=>'success' | 'duplicated' //success 表示成功，duplicated表示name重复
  save:()=>void
}
const taglistmodel:Taglistmodel= {
  data:[],
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name:string){
    if (this.data.indexOf(name)>=0){return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export {taglistmodel};