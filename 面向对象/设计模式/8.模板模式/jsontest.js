console.log(JSON.parse(`{
  "name": "张三",
  "sex": "男",
  "age": "12"
}`));
const a = `{
    "name": "张三",
        "sex": "男",
        "age": "12",
        "nodejs": "design patterns"
}`;
console.log(JSON.parse(a));

`{
    "name": "张三",
    "sex": "男",
    "age": "12",
    "nodejs": "design patterns"
}`