"use client";

import { Form } from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string>("Filter by Region");
  return (
    <main className="max-[375px]:px-3 px-8">
      <Form selected={selected} setSelected={setSelected} />
    </main>
  );
}
