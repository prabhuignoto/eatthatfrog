import _ from 'lodash';
import Helper from './storageHelper';

let instance = null;

export default class Storage {
  constructor() {
    this.store = Helper.getStore();
  }

  getTaskById(id) {
    return _.find(this.store.tasks, item => item.id === id);
  }

  getAllTasks() {
    return this.store.tasks || [];
  }

  addTask(id, name, description) {
    this.store.tasks.push({
      id,
      name,
      description,
    });
    Helper.saveStore(this.store);
  }

  deleteTask(id) {
    this.store.tasks = _.reject(this.store.tasks, item => item === id);
    Helper.saveStore(this.store);
  }

  deleteAllTasks() {
    this.store.tasks.length = 0;
    Helper.saveStore(this.store);
  }

  getStats() {
    return {
      totalTasks: _.size(this.store.tasks),
    };
  }

  static get() {
    if (!instance) {
      instance = new this();
    }
    return instance;
  }
}
