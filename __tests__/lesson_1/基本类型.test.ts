describe("基础类型：number", () => {
  it("正确使用", () => {
    let num: number;

    num = 1;
    num = 2;
    num = 3;

    expect(num).toBe(3);
  });

  it("错误使用", () => {
    let num: number;

    num = "1";

    expect(num).toBe("1");
  });
});

describe("基础类型: boolean", () => {
  it("正确使用", () => {
    let bool: boolean;

    bool = true;
    bool = false;

    expect(bool).toBeFalsy();
  });

  it("错误使用", () => {
    let bool: boolean;

    bool = 1;

    expect(bool).toBe("1");
  });
});

describe("基础类型: string", () => {
  it("正确使用", () => {
    let str: string;

    str = "demo";

    expect(str).toBe("demo");
  });

  it("错误使用", () => {
    let str: string;

    str = 1;

    expect(str).toBe("demo");
  });
});

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

describe("基础类型: 函数", () => {
  it("函数声明正确使用", () => {
    let func1: () => number;
    // 参数名称可以不一致
    let func2: (param1: number) => number;

    func1 = () => 2;

    func2 = (a) => a;

    expect(func1).toEqual(() => 2);
    expect(func2).toEqual((a) => a);
  });

  it("函数声明错误使用", () => {
    let func1: () => number;
    // 参数名称可以不一致
    let func2: (param1: number) => number;

    func1 = (a) => 2;

    func1 = () => "2";

    func2 = (a, b) => 4;
  });
});

describe("基础类型: object", () => {
  it("Object声明正确使用", () => {
    let obj: {
      x: number;
      y: string;
      z: boolean; // 多个属性之间的分隔可以用逗号(,)或者分号(;)
    };

    obj = {
      x: 1,
      y: "2",
      z: false,
    };

    expect(obj).toEqual({
      x: 1,
      y: "2",
      z: false,
    });
  });

  it("Object声明错误使用", () => {
    let obj: {
      x: number;
      y: string;
      z: boolean; // 多个属性之间的分隔可以用逗号(,)或者分号(;)
    };

    obj = {
      x: "1",
      y: "2",
      z: false,
    };
  });
});
