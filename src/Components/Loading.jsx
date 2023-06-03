import React from "react";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="container mt-3">
      <SyncLoader
        className="m-auto blue-gray-900 align-middle text-center mt-56"
        color="rgb(38 50 56)"
        margin={30}
        size={40}
      />
      <div className="m-auto text-4xl text-violet-900 align-middle font-bold text-center mt-5">
        Bang Sabar Bang...
      </div>
    </div>
  );
}
