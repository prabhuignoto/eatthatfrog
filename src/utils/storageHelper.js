import Store from 'store';

export default class StorageHelper {
  static getStore() {
    if (!StorageHelper.checkStore()) {
      Store.set('etf', {
        _id: `etf_${new Date().getMilliseconds()}`,
        tasks: [],
        filter: {},
      });
    }
    return Store.get('etf');
  }

  static saveStore(obj) {
    Store.set('etf', obj);
  }

  static deleteStore() {
    Store.remove('etf');
  }

  static checkStore() {
    return Store.get('etf') !== undefined;
  }
}
