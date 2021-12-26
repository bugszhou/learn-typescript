describe("基础类型：any", () => {
  it("any", () => {
    const var1: any = null;
    const var2: any = 1;
    const var3: any = "string";
    const var4: any = false;
    const var5: any = () => {};
    const var6: any = {};
    const var7: any = Symbol();
  });
});
