describe("interface", () => {
  it("类型推断", () => {
    // 使用interface描述一个学生包含的属性
    interface IStudent {
      name: string;
      age: number;
    }
    // 使用interface描述一个教室包含的内容
    interface IClassRoom {
      // 教师
      teacher: string;
      // 学生们
      students: IStudent[];
    }

    // 声明一个教室
    let classRoom: IClassRoom;

    let classRoom1 = {
      students: [
        {
          name: "张三",
          age: 15,
        },
      ],
      teacher: "demo",
    };

    classRoom = classRoom1;
  });

  it("类型推断：拥有额外属性", () => {
    // 使用interface描述一个学生包含的属性
    interface IStudent {
      name: string;
      age: number;
    }
    // 使用interface描述一个教室包含的内容
    interface IClassRoom {
      // 教师
      teacher: string;
      // 学生们
      students: IStudent[];
    }

    // 声明一个教室
    let classRoom: IClassRoom;

    let classRoom1 = {
      students: [
        {
          name: "张三",
          age: 15,
        },
      ],
      teacher: "demo",
      className: "class1",
    };

    classRoom = classRoom1;

    classRoom = {
      students: [
        {
          name: "张三",
          age: 15,
          className: "class1",
        },
        {
          name: "张三",
          age: 15,
        },
      ],
      teacher: "demo",
    } as IClassRoom;
  });

  it("类型推断：字面量", () => {
    // 使用interface描述一个学生包含的属性
    interface IStudent {
      name: string;
      age: number;
    }
    // 使用interface描述一个教室包含的内容
    interface IClassRoom {
      // 教师
      teacher: string;
      // 学生们
      students: IStudent[];
    }

    // 声明一个教室
    let classRoom: IClassRoom;

    classRoom = <IClassRoom>{
      students: [
        {
          name: "张三",
          age: 15,
          className: "class1",
        },
        {
          name: "张三",
          age: 15,
        },
      ],
      teacher: "demo",
    };

  });

  it("类型推断：字面量推断错误", () => {
    // 使用interface描述一个学生包含的属性
    interface IStudent {
      name: string;
      age: number;
    }
    // 使用interface描述一个教室包含的内容
    interface IClassRoom {
      // 教师
      teacher: string;
      // 学生们
      students: IStudent[];
    }

    // 声明一个教室
    let classRoom: IClassRoom;

    classRoom = {
      students: [
        {
          name: "张三",
          age: 15,
          className: "class1",
        },
      ],
      teacher: "demo",
    } as IClassRoom;


    const arr = [
      {
        name: "张三",
        age: 15,
        className: "class1",
      },
    ];

    console.log(arr);

  });
});
