const data = require("./MOCK_DATA.js");

function straightSearch(data, target) {
  let operations = 0;
  for (let i = 0; i < data.length; i++) {
    operations++;
    if (data[i].sku === target) {
      return { index: i, operations };
    }
  }
  return { index: -1, operations };
}
function measureTime(fn, data, target) {
  const start = process.hrtime();
  const result = fn(data, target);
  const [seconds, nanoseconds] = process.hrtime(start);
  const milliseconds = seconds * 1000 + nanoseconds / 1e6;
  return { index: result.index, milliseconds, operations: result.operations };
}
function binarySearch(data, target) {
  let low = 0;
  let high = data.length - 1;
  let operations = 0;
  while (low <= high) {
    operations++;
    const mid = Math.floor((low + high) / 2);
    const midSKU = data[mid].sku;
    if (midSKU === target) {
      return { index: mid, operations };
    } else if (midSKU < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return { index: -1, operations };
}

function sortWithBinarySearch(data, target) {
  let operations = 0;
  data.sort((a, b) => {
    operations++;
    return a.sku.localeCompare(b.sku);
  });
  const result = binarySearch(data, target);
  result.operations += operations;
  return result;
}
let res = measureTime(straightSearch, data, "83b65687-1774-4172-9e28-44537a619a7e10");
console.log(res, "straight search index last");
res = measureTime(straightSearch, data, "83b65687-1774-4172-9e28-44537a619a7e");
console.log(res, "straight search index 999");
res = measureTime(binarySearch, data, "83b65687-1774-4172-9e28-44537a619a7e"); // binary search work only on sorted data
console.log(res, "binary search on not sorted array");
res = measureTime(sortWithBinarySearch, data, "83b65687-1774-4172-9e28-44537a619a7e10"); // check sort and binary search combined time
console.log(res, "binary search with sorting combined");
data.sort((a, b) => a.sku.localeCompare(b.sku));
res = measureTime(binarySearch, data, "83b65687-1774-4172-9e28-44537a619a7e10");
console.log(res, "binary search on sorted array");
