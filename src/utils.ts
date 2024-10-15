export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(date);
}