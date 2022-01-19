describe("enum 语法", () => {

  it("动态计算枚举值", () => {
    enum ENUM_TYPE {
      name1 = 2,
      name2 = "demo".length,
    }

    enum ENUM_TYPE1 {
      name1 = 2,
      name2 = "ENUM_TYPE1".length,
      name3 = ENUM_TYPE.name1,
    }
  });
});
