describe("必填参数", () => {
  it("正确用法", () => {
    function fn(x: number, y: number) {
      return x + y;
    }

    const result = fn(1, 2);

    expect(result).toBe(3);
  });

  it("错误用法", () => {
    function fn(x: number, y: number) {
      return x + y;
    }

    fn(1);
    fn("1", "2");
  });
});
