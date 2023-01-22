import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  const [data, setData] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const res = await get.json();
      setData(res[0]);
    }
    getData();
  }, []);

  return (
    <div>
      <img src={data.imageUrl} />
      <h4>{data.id}</h4>
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>
    </div>
  );
};

export default UserDetails;
