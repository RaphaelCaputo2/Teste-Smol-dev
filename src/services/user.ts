```typescript
import firebase from './firebase';

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
```