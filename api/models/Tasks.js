import monk from 'monk';

import config from '../../config/connection';

const db = monk( config );

db.then(() => console.log('Connected correctly to DB server'));


function validate(task) {
  if (!task) {
      throw Error('');
  }
};

export const taskModel = {

  async getAllTasks() {
    const collection = db.get('tasks');
      return collection.find({}, {
        deleted: {$ne: 0}
      }
    );
  },

  async setOneTask ( document ) {
      validate( document );
      return await db.get('tasks').insert(document);
  },

  // async update(document) {
  //     validate(document);
  //     return await db.get('tasks').update(document._id, document);
  // },

  // async remove(query) {
  //     const tasks = await this.find(query);

  //     const ids = tasks.map(task => task._id.toString())
  //     await db.get('tasks').update({
  //         _id: {
  //             $in: ids
  //         }
  //     }, {
  //         updateMany: true
  //     })
  // },

  // async find(query) {
  //     return await db.get('tasks').find({
  //         ...query,
  //         status: {
  //             $ne: 0
  //         }
  //     })
  // },
  // async findOne(query) {
  //     return await db.get('tasks').findOne({
  //         ...query,
  //         status: {
  //             $ne: 0
  //         }
  //     })
  // }
};

// export const getAllTasks = (db) => {
//   const collection = db.get('tasks');
//     return collection.find();
// };

// export const setOneTask = (task, db) => {
//   const collection = db.get('tasks');
//     return collection.insert(task);
// };

// export const removeOneTask = (key, db) => {
//   const collection = db.get('tasks');
//   return collection.findOneAndDelete({_id: key});
// };

// export const updateOneTask = (key, data, db) =>{
//   const collection = db.get('tasks');
//   console.log(key, data, 'key, data,');
//   return collection.findOneAndUpdate({_id: key}, {$set: data});
// }

// export const updateTaskStatus = (key, status, db) =>{
//   const collection = db.get('tasks');
//   return collection.findOneAndUpdate({_id: key}, {$set: { status }});
// }



















// export const getAllTasks = (db) => {
//   const collection = db.get('tasks');
//     return collection.find();
// };

// export const setOneTask = (task, db) => {
//   const collection = db.get('tasks');
//     return collection.insert(task);
// };

// export const removeOneTask = (key, db) => {
//   const collection = db.get('tasks');
//   return collection.findOneAndDelete({_id: key});
// };

// export const updateOneTask = (key, data, db) =>{
//   const collection = db.get('tasks');
//   console.log(key, data, 'key, data,');
//   return collection.findOneAndUpdate({_id: key}, {$set: data});
// }

// export const updateTaskStatus = (key, status, db) =>{
//   const collection = db.get('tasks');
//   return collection.findOneAndUpdate({_id: key}, {$set: { status }});
// }

