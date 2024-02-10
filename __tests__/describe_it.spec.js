beforeAll(() => {
  console.log("beforeAll");
});

afterAll(() => console.log("afterAll"));

beforeEach(() => console.log("beforeEach"));

afterEach(() => console.log("afterEach"));

describe("Auth", () => {
  test("test1", () => {});
  test("test2", () => {});
});

describe("Product", () => {
  it("product1", () => {});
  it("product2", () => {});
});
