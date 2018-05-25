export default function addTask(name, description) {
  return {
    type: 'ADD_TASK',
    name,
    description,
  };
}
