import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RoleRoute = ({ allowedRoles = [], children }) => {
  const { user, token } = useAuth();

  if (!token) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
