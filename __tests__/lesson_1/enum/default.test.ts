describe("enum 语法", () => {
  it("默认枚举值", () => {
    enum ENUM1 {
      name1,
      name2,
    }

    console.log(ENUM1);
    expect(ENUM1.name1 === 0).toBeTruthy();
    expect(ENUM1.name2 === 1).toBeTruthy();
  });
});
