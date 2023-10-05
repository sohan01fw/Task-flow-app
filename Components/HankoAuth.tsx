"use client";
import React from "react";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export default function HankoAuth() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
      // handle error
    });
  }, []);
  return <hanko-auth />;
}
