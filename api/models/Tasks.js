export const getAllTasks = (db) => {
  const collection = db.get('tasks');
    return collection.find();
};

export const setOneTask = (task, db) => {
  const collection = db.get('tasks');
    return collection.insert(task);
};

export const removeOneTask = (key, db) => {
  const collection = db.get('tasks');
  return collection.findOneAndDelete({id:key});
};

export const updateOneTask = (key, data, db) =>{
  const collection = db.get('tasks');
  return collection.findOneAndUpdate({id: key}, {$set: data});
}

export const updateTaskStatus = (key, status, db) =>{
  const collection = db.get('tasks');
  return collection.findOneAndUpdate({id: key}, {$set: { status }});
}

