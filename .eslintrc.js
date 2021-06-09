module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "no-inner-declarations": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-useless-escape": "off",
    "no-cond-assign": "off",
    "no-control-regex": "off",
    "no-func-assign": "off",
    "no-self-assign": "off",
    "no-constant-condition": "off",
    "no-fallthrough": "off"

  }
};
