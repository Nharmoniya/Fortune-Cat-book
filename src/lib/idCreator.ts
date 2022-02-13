let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createId() {
  id++;
  window.localStorage.setItem('_idMax', id.toString());
  return id;
}

export default createId;