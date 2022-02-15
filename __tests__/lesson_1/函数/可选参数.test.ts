
describe("可选参数", () => {
  it("正确用法", () => {
    function fn(x: string, y?: string) {
      return x + (y || "");
    }

    const result1 = fn("Hello");

    const result2 = fn("Hello", "World");

    expect(result1).toBe("Hello");
    expect(result2).toBe("HelloWorld");
  });

  it("错误用法", () => {
    function fn(x?: string, y: string) {
      return x + (y || "");
    }
  });
});
