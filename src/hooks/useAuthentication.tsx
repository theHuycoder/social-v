import React, { useEffect, useState } from 'react';

enum EAuthStatus {
  PENDING = "PENDING",
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS"
}

const useAuthentication = () => {
  const [status, setStatus] = useState(EAuthStatus.PENDING);
  useEffect(() => {
    const tokenInStorage = localStorage.getItem("social-v-token");
    const token = tokenInStorage ? JSON.parse(tokenInStorage as string) : null;
    if (token){
      setStatus(EAuthStatus.SUCCESS);
    }
    if (!token){
      setStatus(EAuthStatus.FAILURE);
    }

  }, [])
  return status;
};

export default useAuthentication;