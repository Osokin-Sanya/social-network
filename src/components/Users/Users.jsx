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
