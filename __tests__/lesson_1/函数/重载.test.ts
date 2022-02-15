
describe("重载", () => {
  it("基础用法", () => {
    function fn(x: string, y: string): string;
    function fn(x: number, y: number): number;

    function fn(x: any, y: any): any {
      if (typeof x === "string") {
        return x;
      }

      return x + y;
    }

    const result = fn("1", "2");

    expect(result).toBe("1");

    const result1 = fn(1, 2);

    expect(result1).toBe(3);
  });
});
