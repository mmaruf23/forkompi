/**
 * Memformat objek Date menjadi string dengan format: Hari, Tanggal Bulan Tahun.
 * Contoh: Rabu, 01 Oktober 2025
 * * @param date Objek Date yang akan diformat.
 * @param locale Locale yang digunakan (default: 'id-ID' untuk Bahasa Indonesia).
 * @returns String tanggal yang sudah diformat.
 */
export const formatDate = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "";
  }

  const dateToFormat = date;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("id-ID", options);

  return formatter.format(dateToFormat);
};
