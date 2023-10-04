// import { useState } from "react";
export default function Form() {
  function run(e) {
    e.preventDefault();
    // nav.current.style.backgroundColor="blue";
  }
  return (
    <form onSubmit={run}>
      <input type="text" placeholder="enter your name"></input>
      <input type="number" placeholder="enter your number"></input>
      <input type="password" placeholder="enter your password"></input>
      <button type="submit">submit</button>
    </form>
  );
}
