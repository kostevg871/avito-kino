import webpack from "webpack";
import path from "path";
import { BuildMode, BuildPaths } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";

interface Environment {
  mode: BuildMode;
  port: number;
}

const Env = (env: Environment) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 7070,
    mode: env.mode ?? "development",
    paths,
  });
  return config;
};

export default Env;
