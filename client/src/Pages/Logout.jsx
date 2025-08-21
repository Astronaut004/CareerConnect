import { use } from "react";


const clearUser = useUserStore((state) => state.clearUser);
clearUser(); // Clear user data from Zustand store
