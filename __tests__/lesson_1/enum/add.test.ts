describe("enum 语法", () => {

  it("添加枚举成员", () => {
    enum ENUM_TYPE {
      name1 = 2,
      name2 = "demo",
    }

    ENUM_TYPE.name3 = "3";
  });
});
