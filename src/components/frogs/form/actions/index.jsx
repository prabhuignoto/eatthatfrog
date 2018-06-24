export default function saveTaskToDB(name, description, reminderEnabled, tags) {
  return {
    type: 'SAVE_TASK_TO_DB',
    name,
    description,
    reminderEnabled,
    tags,
  };
}
