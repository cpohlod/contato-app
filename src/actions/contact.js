import Types from "../types";

export const criar = idx => ({
  type: Types.ADD_CONTACT,
  newData: { name: "Fulano1", email: "Fulano1@email.com" }
});

export const edit = idx => ({
  type: Types.EDIT_CONTACT,
  index: idx,
  newData: { name: "Fulano", email: "Fulano@email.com" }
});

export const deleteItem = idx => ({
  type: Types.DELETE_CONTACT,
  index: idx
});
