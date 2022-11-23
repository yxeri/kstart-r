import { atom } from "recoil";
import { IFormValues } from "../components/Forms/ReactHookForm/RHFinterface";

const userListState = atom<IFormValues[]>({
  key: "Users",
  default: [],
});

export default userListState;
