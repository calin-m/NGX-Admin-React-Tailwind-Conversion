import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children } = {}) {
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@ngx-corporate.io',
    role: 'Administrator'
  });

  const login = (credentials) => {
    setUser({
      name: credentials?.email?.split('@')[0] || 'Authenticated User',
      email: credentials?.email || 'user@ngx-corporate.io',
      role: 'Member'
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
