import dialogReduser from "./dialog-reduser";
import profileReduser from "./profile-reduser";
import friendsReduser from "./friends-reduser";

let store = {
  _state: {
    postData: [
      {
        post: "post test",
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      },
      {
        post: "post test",
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      },
      {
        post: "post test",
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      },
      {
        post: "post test",
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      },
      {
        post: "post test",
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      },
    ],
    massagesPage: {
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
    },
    friends: [],
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    // почитать про замыкание
    this._callSubscriber = observer;
  },
  // _callFn: () => { },
  dispatch(action) {
    this._state.postData = profileReduser(this._state.postData, action);
    this._state.massagesPage = dialogReduser(this._state.massagesPage, action);
    // this._state.friends = friendsReduser(this._state.friends, action);
    this._callSubscriber(this._state); // что способствует ререндерингу
  },
};

export default store;
