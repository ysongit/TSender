"use client";

import { useState } from "react"
import InputField from "./ui/InputField";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");

  return (
    <div>
      <InputField
        label="Token Address"
        placeholder="0x"
        value={tokenAddress}
        onChange={e => setTokenAddress(e.target.value)}
      />
    </div>
  )
}
