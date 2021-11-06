export const fixDate = (date: string | Date, dateFirst = true, prefix?: string, dateTimeSeparator?: string): string => {
  if (!date) {
    return null
  }

  const fixedDate = new Date(date)

  const day = fixedDate.getDate().toString().padStart(2, '0')
  const month = (fixedDate.getMonth() + 1).toString().padStart(2, '0')
  const year = fixedDate.getFullYear()
  const hour = fixedDate.getHours().toString().padStart(2, '0')
  const minute = fixedDate.getMinutes().toString().padStart(2, '0')
  const seconds = fixedDate.getSeconds().toString().padStart(2, '0')

  if (dateFirst) {
    const finalDate = `${prefix} ${day}/${month}/${year} ${dateTimeSeparator || 'as'} ${hour}:${minute}:${seconds}`

    return finalDate.trim()
  }

  const finalDate = `${prefix} ${hour}:${minute}:${seconds} ${dateTimeSeparator || 'em'} ${day}/${month}/${year}`

  return finalDate.trim()
}
