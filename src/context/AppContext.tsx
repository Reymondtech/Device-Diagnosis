import { createContext, useState} from "react";
import type { ReactNode } from "react";

interface AppContextType {
  device: string;
  setDevice: (d: string) => void;
  diagnosis: any;
  setDiagnosis: (d: any) => void;
}

export const AppContext = createContext<AppContextType>({
  device: "",
  setDevice: () => {},
  diagnosis: null,
  setDiagnosis: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);

  return (
    <AppContext.Provider value={{ device, setDevice, diagnosis, setDiagnosis }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
