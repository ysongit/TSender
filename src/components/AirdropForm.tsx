"use client";

import { useMemo, useState } from "react"
import InputField from "./ui/InputField";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useAccount, useChainId, useConfig, useReadContract } from "wagmi";
import { readContract } from "@wagmi/core";

import { calculateTotal } from "@/utils/calculateTotal/calculateTotal";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");
  const total: number = useMemo(() => calculateTotal(amounts), [amounts]);

  const chainId = useChainId();
  const config = useConfig(); // Required for core actions like readContract
  const account = useAccount();

  async function getApproveAmount(tSenderAddress: string | null): Promise<number> {
    if (!tSenderAddress) {
      alert("No address found, please use a supported chain");
      return 0;
    }
    // read from the chain to see if we have approved enough token
    const response = await readContract(config, {
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      functionName: "allowance",
      args: [account.address, tSenderAddress  as `0x${string}`]
    });

    // token.allowance(account, tsender)
    return response as number;
  }

  async function handleSubmit() {
    // 1a. If already approved, moved to step 2
    // 1b. Approve our tsender contract to send our tokens
    // 2. Call the airdrop function on the tsender contract
    // 3. Wait for the transaction to be mined
    const tSenderAddress = chainsToTSender[chainId]["tsender"];
    const approvedAmount = getApproveAmount(tSenderAddress);
    console.log(approvedAmount);
  }

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
      <button onClick={handleSubmit} className="px-6 py-3 bg-green-400 hover:bg-green-700 text-white font-bold rounded-lg shadow-sm">
        Send Tokens
      </button>
    </div>
  )
}
