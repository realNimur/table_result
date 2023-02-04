import React from "react";
import { Calendar } from "primereact/calendar";
import styles from "./HeaderTable.module.css";

export const HeaderTable = () => {
  const dates = [
    new Date("2022-12-31T21:00:00.000Z"),
    new Date("2023-01-30T21:00:00.000Z"),
  ];

  return (
    <div className={styles.wrapper}>
      <p>Динамика добычи на месторождении «Северное» за период</p>
      <Calendar value={dates} selectionMode="range" readOnlyInput />
    </div>
  );
};
