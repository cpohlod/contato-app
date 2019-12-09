import { data } from "./../components/data";
import Types from "../types";
const INITIAL_STATE = { data };

const contact = (state = INITIAL_STATE, action) => {
  let contatos;
  switch (action.type) {
    case Types.EDIT_CONTACT:
      contatos = state.data.map((item, idx) =>
          action.index === idx ? action.newData : item
      );
      localStorage.setItem("mData", JSON.stringify(contatos));
      return {
        ...state,
        data: contatos
      };

    case Types.DELETE_CONTACT:
      contatos = state.data.filter((_, idx) => idx !== action.index);
      localStorage.setItem("mData", JSON.stringify(contatos));
      return {
        ...state,
        data: contatos
      };

    case Types.ADD_CONTACT:
      contatos = [...state.data, action.newData];
      localStorage.setItem("mData", JSON.stringify(contatos));
      return {
        ...state,
        data: contatos
      };

    default:
      return state;
  }
};

export default contact;
