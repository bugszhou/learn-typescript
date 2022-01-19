describe("enum 语法", () => {
  it("自定义枚举值: 相同类型", () => {
    enum ENUM_TYPE {
      name1 = 2,
      name2,
    }

    console.log("相同类型：", ENUM_TYPE);
    expect(ENUM_TYPE.name1 === 2).toBeTruthy();
    expect(ENUM_TYPE.name2 === 3).toBeTruthy();
  });

  it("自定义枚举值：不同类型", () => {
    enum ENUM_TYPE1 {
      name1 = 2,
      name2 = "demo",
    }

    console.log("不同类型：", ENUM_TYPE1);
    expect(ENUM_TYPE1.name1 === 2).toBeTruthy();
    expect(ENUM_TYPE1.name2 === "demo").toBeTruthy();
  });

  it("自定义枚举值：不同类型", () => {
    enum ENUM_TYPE1 {
      name1 = 2,
      name2 = "demo",
      name3,
    }
  });
});
