// Users & Authentication Module
class UserAuth {
  constructor() {
    this.users = [];
    this.sessions = new Map();
  }

  register(email, password, name) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'User already exists' };
    }
    
    const user = { 
      id: this.users.length + 1, 
      email, 
      name,
      createdAt: new Date()
    };
    this.users.push(user);
    return { success: true, user };
  }

  login(email, password) {
    const user = this.users.find(u => u.email === email);
    if (user) {
      const token = 'jwt-' + Date.now();
      this.sessions.set(token, user);
      return { success: true, token, user };
    }
    return { success: false, message: 'Invalid credentials' };
  }

  getUserFromToken(token) {
    return this.sessions.get(token);
  }
}

module.exports = UserAuth;
