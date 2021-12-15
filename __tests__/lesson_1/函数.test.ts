describe("基础类型: 函数", () => {
  it("函数声明正确使用", () => {
    let func1: () => number;
    // 参数名称可以不一致
    let func2: (param1: number) => number;

    func1 = () => 2;

    func2 = (a) => a;

    expect(func1).toEqual(() => 2);
    expect(func2).toEqual((a) => a);
  });

  it("函数声明错误使用", () => {
    let func1: () => number;
    // 参数名称可以不一致
    let func2: (param1: number) => number;

    func1 = (a) => 2;

    func1 = () => "2";

    func2 = (a, b) => 4;
  });
});