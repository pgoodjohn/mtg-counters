import React from "react";
import CounterContainer from "./components/counterContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <CounterContainer />
    </main>
  );
}
