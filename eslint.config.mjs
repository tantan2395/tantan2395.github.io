import nextCoreVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: ["assets/**", "images/**", "index.html", "README.txt"]
  },
  ...nextCoreVitals,
  ...nextTypescript
];

export default config;
