import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    AsyncStorage.getItem(`${this.namespace}:token`);
  }

  setAccessToken(accessToken) {
    AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  removeAccessToken() {
    AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
