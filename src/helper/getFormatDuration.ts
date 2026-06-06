/**
 *
 * @param duration in second
 */
export function getFormatDurationAllSong(duration: number) {
  // Is more than 3600?
  if (duration >= 3600) {
    if (duration % 3600 == 0) {
      const hour = Math.floor(duration / 3600);
      return `${hour + hour > 1 ? "hour" : "hours"} 0 minute 0 sec`;
    }
  }
}

export function getFormatDurationSong(duration: number) {
  if (duration >= 60) {
    const remaining = duration % 60;
    const minute = Math.floor(duration / 60);
    if (remaining === 0) {
      return `${minute}:00`;
    }

    let second = remaining.toString();
    if (remaining < 10) {
      second = "0" + remaining;
    }

    return `${minute}:${second}`;
  }

  let second = duration.toString();
  if (duration < 10) {
    second = "0" + duration;
  }

  return `00:${second}`;
}
