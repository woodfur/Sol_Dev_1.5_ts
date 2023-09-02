import { createContext } from "react";
import { Web3Auth } from "@web3auth/modal";
import { SafeEventEmitterProvider } from "@web3auth/base";

type Web3AuthContextType = {
  web3auth: Web3Auth | null;
  provider: SafeEventEmitterProvider | null;
  loggedIn: boolean;
  login: () => Promise<void>;
  setLoggedIn: (loggedIn: boolean) => void;
};

const Web3AuthContext = createContext<Web3AuthContextType>({
  web3auth: null,
  provider: null,
  loggedIn: false,
  login: async () => {},
  setLoggedIn: () => {},
});

export default Web3AuthContext;
