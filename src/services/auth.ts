import firebase from './firebase';

export const register = async (email: string, password: string) => {
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};