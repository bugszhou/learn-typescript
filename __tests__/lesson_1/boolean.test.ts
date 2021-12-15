describe("基础类型: boolean", () => {
  it("正确使用", () => {
    let bool: boolean;

    bool = true;
    bool = false;

    expect(bool).toBeFalsy();
  });

  it("错误使用", () => {
    let bool: boolean;

    bool = 1;

    expect(bool).toBe("1");
  });
});