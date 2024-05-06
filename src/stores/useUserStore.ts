import { create } from "zustand";

interface UserState {
  rpcUrl: string;
  setRpcUrl: (newUrl: string) => void;

  network: string;
  setNetwork: (newNetwork: string) => void;
}

const useCoreUserStore = create<UserState>()((set) => ({
  rpcUrl: "https://fullnode.devnet.sui.io/",
  setRpcUrl: (newUrl) => set({ rpcUrl: newUrl }),

  network: "devnet",
  setNetwork: (newNetwork) => set({ network: newNetwork }),
}));

export const useUserStore = () => {
  const store = useCoreUserStore();
  return { ...store };
};
