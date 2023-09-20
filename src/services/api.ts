import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export function authorization(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
