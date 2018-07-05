// @flow
import _ from 'lodash';
import Helper from './storageHelper';

let instance = null;

export default class Storage {
  constructor() {
    this.store = Helper.getStore();
  }

  /**
   * Gets a task by id.
   * @param {number} id
   * @returns
   * @memberof Storage
 */
  getTaskById(id: string) {
    return _.find(this.store.tasks, item => item.id === id);
  }

  /**
   * Get all the Tasks back from the local storage
   * @returns
   * @memberof Storage
   */
  getAllTasks() {
    return this.store.tasks || [];
  }

  /**
   * Adds a new task to the local storage
   * @param {string} id
   * @param {string} name
   * @param {string} description
   * @memberof Storage
   */
  addTask(id: string, name: string , description: string, reminderEnabled: bool, tags, status) {
    this.store.tasks.push({
      id,
      name,
      description,
      reminderEnabled,
      tags,
      status,
      createdDate: new Date(),
    });
    Helper.saveStore(this.store);
    return {
      id,
      name,
      description,
      reminderEnabled,
      tags,
      status,
    };
  }

  /**
   * Deletes a task from the storage
   * @param {number} id
   * @memberof Storage
   */
  deleteTask(id) {
    this.store.tasks = _.reject(this.store.tasks, item => item.id === id);
    Helper.saveStore(this.store);
  }

  finishTask(id) {
    this.store.tasks = _.map(this.store.tasks, (item) => {
      if (item.id === id) {
        return Object.assign({}, item, { status: 'complete' });
      }
      return item;
    });
    Helper.saveStore(this.store);
  }

  redoTask(id) {
    this.store.tasks = _.map(this.store.tasks, (item) => {
      if (item.id === id) {
        return Object.assign({}, item, { status: 'open' });
      }
      return item;
    });
    Helper.saveStore(this.store);
  }

  setFilters(filter) {
    this.store.filter = filter;
    Helper.saveStore(this.store);
  }

  /**
   * Deletes all the tasks from the storage.
   * @memberof Storage
   */
  deleteAllTasks() {
    this.store.tasks.length = 0;
    Helper.saveStore(this.store);
  }

  /**
   * Check if a task exists in the storage
   * @param {number} id
   * @returns {boolean}
   * @memberof Storage
   */
  taskExists(id) {
    return _.some(this.store.tasks, x => x.id === id);
  }

  static get() {
    if (!instance) {
      instance = new this();
    }
    return instance;
  }
}
