describe("定义函数", () => {
  it("function", () => {
    function fn(arg1: string, arg2: number) {
      return arg1;
    }
  });

  it("变量声明函数", () => {
    let fn: (arg1: string, arg2: number) => string;
  });

  it("类型别名声明：type", () => {
    type fn = (arg1: string, arg2: number) => string;
  });

  it ("interface声明函数", () => {
    interface IFn {
      (x: number, y: number): number;
    }
  });
});
