describe("基础类型：never", () => {
  it("抛出异常，不能函数正常结束", () => {
    const errFunc = (): never => {
      throw new Error("never Error");
    };

    expect(() => {
      errFunc();
    }).toThrowError("never Error");
  });

  it("死循环，不能结束", () => {
    const loopFunc = (): never => {
      while (true) {}
    };
  });
});
