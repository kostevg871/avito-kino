import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetsLoader = {
    test: /\.(ico|png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images",
        },
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: {
      loader: "ts-loader",
      options: {
        compilerOptions: {
          noEmit: false,
        },
      },
    },
    exclude: /node_modules/,
  };

  return [assetsLoader, scssLoader, tsLoader];
}
