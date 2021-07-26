import { parse } from "https://deno.land/std@0.101.0/flags/mod.ts";
import { generatePassword } from "./generatePassword.ts";

const args = parse(Deno.args, {
  alias: {
    number: "n",
    symbol: "s",
    alpha: "a",
    length: "l",
  },
});
const { number, symbol, length, alpha } = args;

generatePassword({ length, number, symbol, alpha });
