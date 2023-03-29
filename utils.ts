export const getDuration = (start: Date, end: Date): string => {
  const difference = Math.ceil((end.getTime()! - start.getTime()!) / (1000 * 3600))

  let duration: string
  if (difference > 1) {
    duration = `${difference} Stunden`
    if (difference > 23) {
      duration = `${Math.floor(difference / 24)} Tag`
    }
    if (difference > 47) {
      duration = `${Math.floor(difference / 24)} Tage`
    }
  } else {
    duration = `${difference} Stunde`
  }
  return duration
}
