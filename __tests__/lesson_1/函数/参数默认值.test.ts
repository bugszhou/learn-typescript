describe("函数参数默认值", () => {
  it("基础用法", () => {
    function fn(x: number, y = 1) {
      return x + y;
    }

    expect(fn(3)).toBe(4);
  });

  it("覆盖默认值", () => {
    function fn(x = 1, y: number) {
      return x + y;
    }

    expect(fn(1, 3)).toBe(4);
  });
});
