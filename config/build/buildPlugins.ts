import webpack, { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import Dotenv from "dotenv-webpack";

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: "AvitoKino",
      favicon: path.resolve(paths.public, "favicon.ico"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.TOKEN": JSON.stringify(process.env.TOKEN),
    }),
    isDev ? new webpack.ProgressPlugin() : undefined,
  ];
}
