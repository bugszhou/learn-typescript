describe("基础类型: 数组和元组", () => {
  it("数组声明正确使用", () => {
    // 元素类型[]
    const arr1: number[] = [1, 2];
    // 泛型接口
    const arr2: Array<number> = [1, 2];

    expect(arr1).toEqual([1, 2]);
    expect(arr2).toEqual([1, 2]);
  });

  it("数组声明错误使用", () => {
    // 元素类型[]
    const arr1: number[] = [1, 2];
    // 泛型接口
    const arr2: Array<number> = [1, 2];

    arr1.push("3");
    arr2.push("3");

    expect(arr1).toEqual([1, 2, "3"]);
    expect(arr2).toEqual([1, 2, "3"]);
  });
});

describe("基础类型: 元组", () => {
  it("正确使用", () => {
    const arr1: [number, string] = [1, "2"];

    expect(arr1[0]).toBe(1);
    expect(arr1[1]).toBe("2");
  });

  it("错误使用", () => {
    const arr1: [number, string] = [1, "2"];

    arr1[2] = 3;

    expect(arr1[0]).toBe(1);
    expect(arr1[1]).toBe("2");
    expect(arr1[2]).toBeUndefined();
  });

  it("push新增元素", () => {
    const arr1: [number, string] = [1, "2"];
    arr1.push(3);

    expect(arr1).toEqual([1, "2", 3]);
  });

  it("push新增元素，取值错误", () => {
    const arr1: [number, string] = [1, "2"];
    arr1.push(3);

    expect(arr1[2]).toBe(3);
  });
});
