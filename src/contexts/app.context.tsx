import type { Record } from "@/apis/profile.api";
import getProfile from "@/apis/profile.api";
import React, { createContext, useEffect, useState } from "react";

interface AppContextInterface {
  profile: Record | null;
}

export const initialAppContext: AppContextInterface = {
  profile: null,
};

export const AppContext = createContext(initialAppContext);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState(initialAppContext.profile);

  useEffect(() => {
    const fetData = async () => {
      try {
        const res = await getProfile();
        setProfile(res.data.record);
      } catch (error) {
        throw error;
      }
    };

    fetData();
  }, []);

  return (
    <AppContext.Provider value={{ profile }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
