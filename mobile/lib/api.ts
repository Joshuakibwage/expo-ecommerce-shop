import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect, useMemo } from "react";


const API_URL = process.env.EXPO_PUBLIC_API_URL 


 export const useApi = () => {
   const { getToken } = useAuth();
  const api = useMemo(
    () =>
      axios.create({
        baseURL: API_URL,
        headers: { "Content-Type": "application/json" },
      }),
    []
  );

   useEffect(() => {
     const interceptor = api.interceptors.request.use(async (config) => {
      let token: string | null = null;
      try {
        token = await getToken();
      } catch {
        // best-effort: allow request to proceed without auth
      }

       if (token) {
        config.headers = { ...(config.headers ?? {}), Authorization: `Bearer ${token}` };
       }

       return config;
     });

     return () => {
       api.interceptors.request.eject(interceptor);
     };
  }, [api, getToken]);

   return api;
 };