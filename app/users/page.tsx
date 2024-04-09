import React, { Suspense, use } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams:{sortOrder:string}
}

const UserPage = async ({searchParams:{sortOrder}}: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className="btn">NEW USER</Link>
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  );
};

export default UserPage;
