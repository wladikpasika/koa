export const getAllUsers = (db) => {
  const collection = db.get('users');
    return collection.find();
};

export const setOneUser = (user, db) => {
  const collection = db.get('users');
    return collection.insert(user);
};

