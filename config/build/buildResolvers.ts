import { Configuration } from "webpack";

export function buildResolvers(): Configuration["resolve"] {
  return {
    extensions: [".ts", ".tsx", ".js"],
  };
}
