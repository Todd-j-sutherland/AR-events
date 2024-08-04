import mockData from './data'

export function fetchData(): Promise<typeof mockData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 2000)
  })
}
