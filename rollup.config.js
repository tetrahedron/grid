/* eslint-disable */
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import inject from "rollup-plugin-inject";
import json from "rollup-plugin-json";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";

const processShim = "\0process-shim";

const prod = process.env.PRODUCTION;
const env = prod ? "production" : "development";

console.log(`Creating ${env} bundle...`);

const targets = prod
  ? [{ dest: "dist/tetrahedron.grid.min.js", format: "umd" }]
  : [
      { dest: "dist/tetrahedron.grid.js", format: "umd" },
      { dest: "dist/tetrahedron.grid.es.js", format: "es" },
    ];

const plugins = [
  {
    resolveId(importee) {
      if (importee === processShim) return importee;
      return null;
    },
    load(id) {
      if (id === processShim) return "export default { argv: [], env: {} }";
      return null;
    },
  },
  babel({
    exclude: "node_modules/**",
    babelrc: false,
    presets: ["es2015-rollup", "react", "stage-2"],
    plugins: [
      [
        "styled-components",
        {
          ssr: false,
          displayName: true,
          fileName: true,
          preprocess: false,
          minify: true,
          transpileTemplateLiterals: true,
        },
      ],
      "array-includes",
      "external-helpers",
    ],
  }),
  filesize(),
  commonjs(),
  inject({
    process: processShim,
  }),
  json(),
  nodeResolve(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(prod ? "production" : "development"),
  }),
];

if (prod) plugins.push(uglify());

export default {
  entry: "src/index.js",
  exports: "named",
  external: ["react", "styled-components"],
  globals: { react: "React", "styled-components": "styled" },
  moduleName: "tetrahedron.grid",
  plugins,
  targets,
};
