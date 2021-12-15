describe("基础类型: string", () => {
  it("正确使用", () => {
    let str: string;

    str = "demo";

    expect(str).toBe("demo");
  });

  it("错误使用", () => {
    let str: string;

    str = 1;

    expect(str).toBe("demo");
  });
});