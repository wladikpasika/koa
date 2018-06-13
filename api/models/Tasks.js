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
  
  async findOne( _id ){
    const collection = db.get('tasks');
      return await collection.find(
        {
          "_id":_id,
          "deleted": { $ne: 1 }
      }
    )
  },

  async getAllTasks() {
    const collection = db.get('tasks');
      return await collection.find({
        deleted: { $ne: 1 }
      }
    );
  },

  async setOneTask ( document ) {
      validate( document );
      return await db.get('tasks').insert(document);
  },

  async updateOneTask ( _id, document ){

      validate( _id );
      validate( document );

      const { title, description } = document;
      const task = await taskModel.findOne( _id );
      const newDocument = {...task[0], title, description };
      return  db.get('tasks').update(_id, newDocument ).then( resolve =>
        resolve.ok
        ?newDocument
        :resolve 
      );
  },

  async updateTaskStatus( _id, status ){

      validate( _id );
      validate( status );
      const task = await this.findOne( _id );
      const newDocument = {...task[0], status};

      return  db.get('tasks').update(_id, newDocument).then( resolve =>
        resolve.ok
        ?newDocument
        :resolve 
      );
  },

  async removeOneTask( _id ) {
      validate( _id );
      const task = await this.findOne( _id );
      const newDocument = {...task[0], "deleted": 1};
      return await db.get('tasks').update({ _id },  newDocument )
      .then( resolve =>
        resolve.ok
        ?newDocument
        :resolve 
      )
  }
};
