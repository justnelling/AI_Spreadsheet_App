export interface Cell {
  value: string;
}

export type SpreadsheetRow = Cell[];

export interface SpreadsheetData {
  title: string;
  data: SpreadsheetRow[];
}
