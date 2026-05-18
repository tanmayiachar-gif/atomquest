import React, { createContext, useContext, useState } from 'react';

type Role = 'Employee' | 'Manager' | 'Admin';

interface AuthContextType {
  userRole: Role;
  setRole: (role: Role) => void;
  userEmail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const MockAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setRole] = useState<Role>('Employee');
  
  const getEmail = (role: Role) => {
    if (role === 'Admin') return 'admin@atomberg-portal.com';
    if (role === 'Manager') return 'manager@atomberg-portal.com';
    return 'employee@atomberg-portal.com';
  };

  return (
    <AuthContext.Provider value={{ userRole, setRole, userEmail: getEmail(userRole) }}>
      {/* Dev Sticky Switcher Bar for Hackathon Judges */}
      <div style={{ background: '#1e293b', color: '#fff', padding: '8px', display: 'flex', gap: '15px', alignItems: 'center', fontSize: '13px' }}>
        <strong>👉 Hackathon Persona Switcher:</strong>
        <button onClick={() => setRole('Employee')} style={{ background: userRole === 'Employee' ? '#2563eb' : '#475569', border: 'none', color: '#fff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Employee View</button>
        <button onClick={() => setRole('Manager')} style={{ background: userRole === 'Manager' ? '#2563eb' : '#475569', border: 'none', color: '#fff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Manager (L1) View</button>
        <button onClick={() => setRole('Admin')} style={{ background: userRole === 'Admin' ? '#2563eb' : '#475569', border: 'none', color: '#fff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>HR Admin View</button>
        <span style={{ marginLeft: 'auto', opacity: 0.8 }}>Logged in as: <strong>{getEmail(userRole)}</strong></span>
      </div>
      {children}
    </AuthContext.Provider>
  );
};

export const useMockAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useMockAuth must be used within a MockAuthProvider');
  return context;
};
