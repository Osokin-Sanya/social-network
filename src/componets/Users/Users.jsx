import React from "react";
import Pagination from "@mui/material/Pagination";
import { UsersSubscription } from "./UsersSubscription";

import "./Users.css";
export const Users = (props) => {
  let [page, setPage] = React.useState(1);
  let pagesCount = Math.ceil(Number(props.totalPages) / Number(props.sizePage));
  let arrayPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrayPages.push(i);
  }
  const handleChange = (e, p) => {
    setPage(p);
    props.onPageChanged(p);
  };
  return (
    <div className="userContainer">
      <div>
        <Pagination
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          siblingCount={2}
          onChange={handleChange}
          page={page}
        />
      </div>
      <UsersSubscription
        users={props.users}
        getUnsab={props.getUnsab}
        getSab={props.getSab}
        subscriptionProcess={props.subscriptionProcess}
      />

      <div>
        <Pagination
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          siblingCount={2}
          onChange={handleChange}
          page={page}
        />
      </div>
    </div>
  );
};

// class Users extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`
//       )
//       .then((res) => {
//         this.props.setUsers(res.data.items);
//         this.props.totalCount(res.data.totalCount);
//       });
//   }

//   onPageChanged = (pageNumber) => {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`
//       )
//       .then((res) => {
//         this.props.setUsers(res.data.items);
//       });
//     this.props.pageCurrent(pageNumber);
//   };

// render() {
//   }
// }

// const Users2 = (props) => {
//   if (props.users.length === 0) {
//   props.setUsers([
//     {
//       id: "1",
//       Fullname: "Alina",
//       status: "Статус 1",
//       location: { country: "Украина ", city: "Днепр" },
//       friend: true,
//       icon: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
//     },
//     {
//       id: "2",
//       Fullname: "lorem",
//       status: "Статус 1",
//       location: { country: "Сервер", city: "Блокнот" },
//       friend: false,
//       icon: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
//     },
//     {
//       id: "3",
//       Fullname: "Vlad",
//       status: "Статус 1",
//       location: { country: "Абобия", city: "Амонгокус" },
//       friend: true,
//       icon: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
//     },
//     {
//       id: "4",
//       Fullname: "Andrey",
//       status: "Статус 1",
//       location: { country: "Украина", city: "Каменское" },
//       friend: true,
//       icon: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
//     },
//     {
//       id: "5",
//       Fullname: "Koni Pedalnyy",
//       status: "Статус 1",
//       location: { country: "Марс", city: "Стойло" },
//       friend: false,
//       icon: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
//     },
//   ]);
// }
//   axios
//     .get("https://social-network.samuraijs.com/api/1.0/users")
//     .then((res) => {
//       console.log(res);
//     });
//   //

//   //

//   return (
//     <div className="userContainer">
//       {props.users.map((e) => (
//         <div className="userblock" key={e.id}>
//           <div className="userFollow">
//             <div className="userIcon">
//               <img src={e.icon} />
//             </div>
//             <div className="follow">
//               {e.friend ? (
//                 <button
//                   onClick={() => {
//                     props.follow(e.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(e.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               )}
//             </div>
//           </div>
//           <div className="userInfo">
//             <div className="nameUser">{e.Fullname}</div>
//             <div className="countryUser">{e.location.country}</div>
//             <div className="statusUser">{e.status}</div>
//             <div className="cityUser">{e.location.city}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
