import Sidebar from "@/components/Sidebar";
import React from "react";

export default function MovieLayout({ children, modal, params }) {
  const { lang } = params;
  console.log(params)
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar lang={lang} />
        <div>
          {modal}
          {children}
        </div>
      </div>
    </main>
  );
}
