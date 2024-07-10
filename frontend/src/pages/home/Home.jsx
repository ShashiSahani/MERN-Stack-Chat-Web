import React from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex sm:h-px] md:h-[px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-black">
      <Sidebar/>
      {/* <Chat /> */}
    </div>
  );
}

export default Home;
