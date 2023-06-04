"use client";
import React, { useCallback, useRef } from "react";
import { SharkDialog } from "@/components/";

export default function TestDialogHome() {
  const diagRef = useRef<HTMLDialogElement>(null);

  const onClick = useCallback(() => {
    diagRef.current?.showModal();
  }, [diagRef]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 style={{ marginBottom: 30 }}>Dialog</h1>
      <SharkDialog ref={diagRef} />
      <button onClick={onClick}>Open dialog</button>
    </main>
  );
}
