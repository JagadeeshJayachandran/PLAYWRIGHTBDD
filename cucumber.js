module.exports = {
  default: [
    "./features/**/*.feature",
    "--require-module ts-node/register",
    "--require ./step-definitions/world.ts",
    "--require ./step-definitions/**/*.ts",
    "--format @cucumber/pretty-formatter",
    "--format html:reports/cucumber-report.html"
  ].join(" ")
};
