export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  public: string;
}

export type BuildMode = "development" | "production";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
