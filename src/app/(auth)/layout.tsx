import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="auth-container" style={{ height: "100vh" }}>
      {children}
    </div>
  );
};

export default AuthLayout;
