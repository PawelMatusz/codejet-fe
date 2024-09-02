export default function range(start: number, end: number) {
    return Array(end - start)
      .fill(null)
      .map((_, i) => i + start);
  }
  