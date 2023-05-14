"use client";
import {useSession, signIn, signOut} from "next-auth/react";

export default function Page() {
    const {data: session, status} = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session) {
    return (
      <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
  return (
    <>

        <h1>Protected Page</h1>
        <h4>Welcome {session.user.name} </h4>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}