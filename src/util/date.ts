export const convertStringToDate = (inputDate: string) => {
  const dateObject = new Date(inputDate) // 2022-01-01
  const [year, month, date] = inputDate.split('-')
  return { year, month, date }
}
