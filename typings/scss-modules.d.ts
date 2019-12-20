declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare interface NodeModule {
  hot: {
    accept(path?: string, fn?: () => void, callback?: () => void): void;
  };
}
