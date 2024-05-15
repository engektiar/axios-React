import React, { useEffect, useState } from "react";
import axios from "axios";
const UsingAxiosGet = () => {
  const [userdata, setuserdata] = useState();
  console.log("data", userdata);
  const Getitem = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        setuserdata(response.data);
      })
      .catch(function (error) {
        // handle error
      });
  };
  useEffect(() => {
    Getitem();
  });

  return (
    <div>
      <h1>Axious use Kora Data Get kora Hoisa </h1>
      {userdata &&
        userdata.map((item) => {
          return (
            <>
              <p>{item.title}</p>
            </>
          );
        })}
    </div>
  );
};

export default UsingAxiosGet;
