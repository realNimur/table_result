import readXlsxFile from "read-excel-file";
import { formatDate } from "./date";
import { TableRowItem } from "../types/DataTypes";

export const parseXMLFile = async (file: File) => {
  let tableData: TableRowItem[] = [];

  const rows = await readXlsxFile(file);

  rows.forEach((row, index) => {
    if (index === 0) return;

    const [date, gas, water] = row;
    tableData = [
      ...tableData,
      {
        date: formatDate(new Date(String(date))),
        gas: +gas,
        water: +water,
      },
    ];
  });

  return tableData;
};
