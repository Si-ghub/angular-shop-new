import {SimpleService} from "./simple.service";

describe("Testing SimpleService", () => {
  let service: SimpleService;

  beforeEach(() => {
    service = new SimpleService();
    console.log("KARTAS");
  });

  afterEach(() => {});

  afterAll(() => {
    console.log("SimpleService testavimas baigtas");
  });

  it("should add 2 and 2", () => {
    const result = service.addNumbers(2, 2);

    expect(result).toBe(4);
  });

  it("should return that 3 is not an equal number", () => {
    expect(service.isNumberEven(3)).not.toBe(true);
  });

  it("should return that 4 is an equal number", () => {
    expect(service.isNumberEven(4)).toBe(true);
  });

  it("should return correct perimeter", () => {
    const value = service.rectangleData(2, 3); // {perimeter: 10, area: 6}

    expect(value).toEqual({perimeter: 10, area: jasmine.anything()});
  });
});
