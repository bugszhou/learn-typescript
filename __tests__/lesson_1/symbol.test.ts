describe("基础类型: symbol", () => {
  it("不同描述符", () => {
    let symbol1: symbol;
    let symbol2: symbol;

    symbol1 = Symbol();
    symbol2 = Symbol("demo");

    expect(symbol1 === symbol2).toBeFalsy();
  });

  it("相同描述符", () => {
    let symbol1: symbol;
    let symbol2: symbol;

    symbol1 = Symbol("demo");
    symbol2 = Symbol("demo");

    expect(symbol1 === symbol2).toBeFalsy();
  });

  it("唯一标识符", () => {
    const symbol1 = Symbol("demo");
    const symbol2 = Symbol("demo");

    const obj: any = {};
    obj[symbol1] = "test";
    obj[symbol2] = "test1";

    expect(obj[symbol1]).toBe("test");
    expect(obj[symbol2]).toBe("test1");
  });

  it("全局symbol", () => {
    const symbol1 = Symbol.for("demo"); // 全局没有描述符为demo的symbol值时，创建symbol值，有则返回
    const symbol2 = Symbol.for("demo");

    const obj: any = {};
    obj[symbol1] = "test";
    obj[symbol2] = "test1";

    expect(symbol1).toBe(symbol2);
    expect(obj[symbol1]).toBe("test");
    expect(obj[symbol1]).toBe("test1");
    expect(obj[symbol2]).toBe("test1");
  });
});
