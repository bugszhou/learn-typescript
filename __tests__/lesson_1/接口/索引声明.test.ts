describe("索引声明", () => {
  it("基础语法", () => {
    // 数值索引
    interface INumber {
      [key: number]: string;
    }

    // 字符串索引
    interface IString {
      [key: string]: number;
    }
  });

  it("数值索引", () => {
    interface INumber {
      [key: number]: string;
    }

    const arr: INumber = ["tom", "jack"];
    const obj: INumber = {
      0: "张三",
      1: "李四",
    };

    expect(arr[0]).toBe("tom");
    expect(arr[1]).toBe("jack");
    expect(arr[2]).toBeUndefined();

    expect(obj[0]).toBe("张三");
    expect(obj[1]).toBe("李四");
  });

  it("字符串索引", () => {
    interface IString {
      [key: string]: number;
    }

    const obj: IString = {
      name: 1,
      age: 2,
    };

    expect(obj.name).toBe(1);
    expect(obj.age).toBe(2);
  });

  it("字符串索引和数值索引混合使用", () => {
    interface IMixin {
      [key: number]: number;
      [key: string]: string;
    }
  });
});
