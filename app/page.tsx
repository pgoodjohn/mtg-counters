import React from "react";
import Counter from "./components/counter";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="transform rotate-180">
        <Counter />
      </div>
      <Counter />
    </main>
  );
}
