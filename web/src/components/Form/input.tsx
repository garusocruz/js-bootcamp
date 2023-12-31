import { InputHTMLAttributes } from "react";

type InputProdps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProdps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    />
  );
}
