"use client";

import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("@/layout/Preloader"), {
  ssr: false,
});

export default function ClientPreloader() {
  return <Preloader />;
}
