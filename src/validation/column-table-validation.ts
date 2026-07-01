import z from "zod";

export default class ColumnTableValidation {
  static readonly SCHEMASONGS = z.object({
    DataSong: z.object({
      Title: z.string(),
      Artist: z.string(),
      ArtistId: z.string(),
      Album: z.string()
    }),
    Plays: z.number(),
    Duration: z.number(),
  });
}
