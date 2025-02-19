"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export const WaitList = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const sendData = async () => {
    if (!email) {
      throw new Error("Please enter a valid email");
    }
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    if (response.status === 200 && response.ok) {
      return data.message || "Congratulations! You have joined the wait-list.";
    }
  };

  return (
    <>
      <Input
        type="email"
        placeholder="Enter your email"
        className="max-w-sm"
        required
        aria-required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Button
        type="submit"
        className="bg-[#0a1128] hover:[#0a1128] text-white"
        disabled={loading}
        onClick={() => {
          setLoading(true);
          sendData()
            .then((message) =>
              toast({
                description: message,
              })
            )
            .catch((err) => {
              toast({
                description: (err as Error).message,
              });
            })
            .finally(() => {
              setEmail("");
              setLoading(false);
            });
        }}
      >
        Get Notified
        {loading ? (
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="ml-2 h-4 w-4" />
        )}
      </Button>
    </>
  );
};
