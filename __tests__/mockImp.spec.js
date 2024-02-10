test("mockImplementation", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementation(() => "first Call")
    .mockImplementation(() => "second Call");
  const res1 = mockFn();
  const res2 = mockFn();
  const res3 = mockFn();
  console.log(res1);
  console.log(res2);
  console.log(res3);
});

test("mockImplementationOnce", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first Call")
    .mockImplementationOnce(() => "second Call")
    .mockImplementationOnce(() => "Third Call");
  const res1 = mockFn();
  const res2 = mockFn();
  const res3 = mockFn();
  console.log(res1);
  console.log(res2);
  console.log(res3);
});
