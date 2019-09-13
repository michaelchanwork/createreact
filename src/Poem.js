import React from 'react'

//Death is nothing at all.
// It does not count.
// I have only slipped away into the next room.
// Nothing has happened.

// Source: https://www.familyfriendpoems.com/poem/death-is-nothing-at-all-by-henry-scott-holland

export const Poem = () => (
    <div>
    <h1>Death is nothing at all.</h1>
       <p>It does not count</p>
       <p>I have only slipped away in to the next room.</p>
       <p>Nothing has happened.</p>
    </div>
);

export function MessageToggle() {
  const [name,setName] = React.useState("Michael Chan");
  
  function clicky() {
    if(/^Mich/.test(name)){
      setName("Maikeru Chan")
    } else if(/^Maik... [a-zA-Z]{4}$/.test(name)){
      setName("Michael Chan")
    };
  };
  
  return (
      <div>
      <h2> {name} </h2>
      <button onClick={clicky}> change me pls </button>
      </div>
  );
}
