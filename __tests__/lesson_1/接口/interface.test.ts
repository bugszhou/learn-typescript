describe("interface", () => {
  it("基础语法", () => {
    // 使用interface描述一个学生包含的属性
    interface IStudent {
      name: string;
      age: number;
    }

    // 声明一个学生
    let student1: IStudent;

    // 创建一个学生
    student1 = {
      age: 10,
      name: "李四",
    };

    // 使用interface描述一个教室包含的内容
    interface IClassRoom {
      // 教师
      teacher: string;
      // 学生们
      students: IStudent[];
    }

    // 声明一个教室
    let classes: IClassRoom;

    classes = {
      teacher: "张三",
      students: [student1]
    };
  });

  it("可选属性", () => {
    interface IDemo {
      name: string;
      age?: number;
    }
    
    const demo:IDemo = {
      name: "Tom",
    };
    
    const demo1: IDemo = {
      name: "Tom",
      age: 10,
    }
  });

  it("只读属性", () => {
    interface IDemo {
      name: string;
      readonly age: number;
    }
    
    const demo1: IDemo = {
      name: "Tom",
      age: 10,
    };

    demo1.age = 11;
  });
});
