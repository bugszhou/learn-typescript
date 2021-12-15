describe("基础类型：number", () => {
  it("正确使用", () => {
    let num: number;

    num = 1;
    num = 2;
    num = 3;

    expect(num).toBe(3);
  });

  it("错误使用", () => {
    let num: number;

    num = "1";

    expect(num).toBe("1");
  });
});
