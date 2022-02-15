
describe("不定参数", () => {
  it("正确用法", () => {
    // 除了第一个参数的值会赋值给x，剩余的值都会放在args中，args是一个数组
    function fn(x: number, ...args: number[]) {
      expect(Array.isArray(args)).toBeTruthy();
      expect(args.length).toBe(2);
    }

    fn(1, 2, 3);
  });
});
