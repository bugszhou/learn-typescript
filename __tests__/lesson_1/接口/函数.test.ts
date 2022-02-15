describe("interface声明函数", () => {
  it("基础语法", () => {
    interface IFn {
      (x: number, y: number): number;
      name: string;
      eat(): void;
    }

    const fn: IFn = (x, y) => x + y;
    fn.name = "Demo";
    fn.eat = () => {
      console.log("eat!");
    }
  });
});
