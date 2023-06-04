"use client";
import React, { useCallback, useRef } from "react";
import { SharkDialogHorizon } from "@/components/";

export default function DialogHorizon() {
  const diagRef = useRef<HTMLDialogElement>(null);

  const onClick = useCallback(() => {
    diagRef.current?.showModal();
  }, [diagRef]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 style={{ marginBottom: 30 }}>Dialog Horizon</h1>
      <SharkDialogHorizon ref={diagRef} />
      <button onClick={onClick}>Open dialog</button>
    </main>
  );
}
