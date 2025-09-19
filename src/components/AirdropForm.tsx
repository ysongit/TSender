"use client";

import { useState } from "react"
import InputField from "./ui/InputField";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");

  return (
    <div>
      <InputField
        label="Token Address"
        placeholder="0x"
        value={tokenAddress}
        onChange={e => setTokenAddress(e.target.value)}
      />
      <InputField
        label="Recipients"
        placeholder="0x123, 0x124"
        value={recipients}
        onChange={e => setRecipients(e.target.value)}
        large={true}
      />
      <InputField
        label="Amount"
        placeholder="100, 200"
        value={amounts}
        onChange={e => setAmounts(e.target.value)}
        large={true}
      />
    </div>
  )
}
