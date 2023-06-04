"use client";
import React, { useCallback, useRef } from "react";
import { SharkDialog2 } from "@/components/";

export default function DialogDouble() {
  const diagRef = useRef<HTMLDialogElement>(null);

  const onClick = useCallback(() => {
    diagRef.current?.showModal();
  }, [diagRef]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 style={{ marginBottom: 30 }}>Dialog Double</h2>
      <SharkDialog2 ref={diagRef} />
      <button onClick={onClick}>Open dialog</button>
    </main>
  );
}
