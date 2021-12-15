describe("基础类型: object", () => {
  it("Object声明正确使用", () => {
    let obj: {
      x: number;
      y: string;
      z: boolean; // 多个属性之间的分隔可以用逗号(,)或者分号(;)
    };

    obj = {
      x: 1,
      y: "2",
      z: false,
    };

    expect(obj).toEqual({
      x: 1,
      y: "2",
      z: false,
    });
  });

  it("Object声明错误使用", () => {
    let obj: {
      x: number;
      y: string;
      z: boolean; // 多个属性之间的分隔可以用逗号(,)或者分号(;)
    };

    obj = {
      x: "1",
      y: "2",
      z: false,
    };
  });
});
