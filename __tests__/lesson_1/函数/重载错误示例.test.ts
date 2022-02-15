
describe("重载错误声明", () => {
  it("参数类型不兼容", () => {
    function fn(x: string, y: string): string;
    function fn(x: number, y: number): number;

    function fn(x: string, y: any): any {
      if (typeof x === "string") {
        return x;
      }

      return x + y;
    }
  });

  it("返回值类型不兼容", () => {
    function fn(x: string, y: string): string;
    function fn(x: number, y: number): number;

    function fn(x: any, y: any): string {
      if (typeof x === "string") {
        return x;
      }

      return x + y;
    }
  });
});
