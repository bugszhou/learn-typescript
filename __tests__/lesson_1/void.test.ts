describe("基础类型：void", () => {
  it("JS中的void", () => {
    let var1 = void 0;
    let var2 = undefined;

    expect(var1 === var2).toBeTruthy();
  });

  it("覆盖undefined", () => {
    const undefined = "undefined";
    let var1 = undefined;

    expect(var1).toBe("undefined");
  });

  it("函数返回值", () => {
    const voidFunc = () => {};
    const voidFunc1 = (): void => {
      return undefined;
    };
    const voidFunc2 = (): void => {
      return;
    };

    expect(voidFunc()).toBeUndefined();
    expect(voidFunc1()).toBeUndefined();
    expect(voidFunc2()).toBeUndefined();
  });

  it("函数返回值错误类型", () => {
    const voidFunc1 = (): void => {
      return "demo";
    };
  });
});
