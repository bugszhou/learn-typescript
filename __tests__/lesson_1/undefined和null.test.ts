describe("基础类型: undefined和null", () => {
  it("基本用法", () => {
    let var1: undefined;
    let var2: null;

    var1 = undefined;
    var2 = null;

    expect(var1).toBeUndefined();
    expect(var2).toBeNull();
  });

  it("错误用法", () => {
    let var1: undefined;
    let var2: null;

    var1 = "var1";
    var2 = "var2";

    expect(var1).toBe("var1");
    expect(var2).toBe("var2");
  });
});

describe("赋值null和undefined", () => {
  it("赋值Case", () => {
    const num: number = null;
    const str: string = undefined;
  });
});
