describe("enum 语法", () => {

  it("修改枚举成员值", () => {
    enum ENUM_TYPE {
      name1 = 2,
      name2 = "demo",
    }

    ENUM_TYPE.name1 = 3;
  });
});
