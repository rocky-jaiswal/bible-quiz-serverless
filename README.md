# Async-Utils

Compose async functions with ease

```
const arr: number[] = []

const f1 = async (a: number[]) => {
  await delay(300)
  a.push(1)
  return a
}

const f2 = async (a: number[]) => {
  await delay(200)
  a.push(2)
  return a
}

const f3 = async (a: number[]) => {
  await delay(100)
  a.push(3)
  return a
}

const res = await pipeAsync(f1, f2, f3)(arr)
console.log(res) // [1, 2, 3]
```
