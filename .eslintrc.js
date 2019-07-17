module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-spaced-func": "off",//函数调用时 函数名与()之间不能有空格
    // "semi": [0, "always"],//语句强制分号结尾
    // "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
