const addMassageType = "ADD-MESSEGE";

let initialState = {
  nemeData: [
    { name: "Alina", id: "1" },
    { name: "lorem", id: "2" },
    { name: "Vlad", id: "3" },
    { name: "Andrey", id: "4" },
    { name: "Koni Pedalney", id: "5" },
  ],
  messageData: [
    { message: "dialogMessage-1", id: 1 },
    { message: "dialogMessage-2", id: 2 },
    { message: "dialogMessage-3", id: 3 },
    { message: "dialogMessage-4", id: 4 },
    { message: "dialogMessage-5", id: 5 },
  ],
};
const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case addMassageType:
      // let copyState = { ...state, messageData: [...state.messageData] };
      // let addMassage = {
      //   message: action.addMassage,
      //   id: 7,
      // };
      // let addName = {
      //   name: "Valera",
      //   id: 7,
      // };
      // copyState.messageData.push(addMassage);
      // copyState.nemeData.push(addName);
//////////////////////////////////////////
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { message: action.addMassage, id: 7 },
        ],
        nemeData: [...state.nemeData, { name: "Valera", id: 7 }],
      };
    default:
      return state;
  }
};

export const addMassageActionCreator = (value) => ({
  type: addMassageType,
  addMassage: value,
});

export default dialogReduser;
