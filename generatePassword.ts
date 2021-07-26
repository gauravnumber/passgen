import * as Colors from "https://deno.land/std/fmt/colors.ts";

export function generatePassword({
  length = 8,
  number,
  symbol,
  alpha,
}: {
  length: number;
  number: boolean;
  symbol: boolean;
  alpha: boolean;
}) {
  const alphaTxt = "abcdefghijklmnopqrstuvwxyz";
  const numberTxt = "0123456789";
  const symbolTxt = "!@#$%^&*-_+=";
  let cipher,
    total,
    text = "";

  total = alpha === undefined ? alphaTxt : "";
  total += number === undefined ? numberTxt : "";
  total += symbol === undefined ? symbolTxt : "";

  for (let i = 0; i < length; i++) {
    cipher = Math.floor(Math.random() * total.length);
    text += total.charAt(cipher);
  }

  console.log("Genrated text: " + Colors.cyan(`${text}`));
}
