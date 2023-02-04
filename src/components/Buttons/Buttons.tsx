import React, { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { parseXMLFile } from "../../utils/parseFile";
import { clearData, setData, thunkLoadData } from "../../store/dataSlice";
import {
  toastError,
  toastFileFailed,
  toastFileSuccess,
} from "../../utils/toast";
import styles from "./Buttons.module.css";

export const Buttons = () => {
  const dispatch = useAppDispatch();
  const toastRef = useRef<null | Toast>(null);
  const refInput = useRef<null | HTMLInputElement>(null);
  const { isError } = useAppSelector((state) => state.data);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const tableFromFile = await parseXMLFile(e.target.files[0]);
        dispatch(setData(tableFromFile));
        toastRef.current?.show(toastFileSuccess);
      }
    } catch (e) {
      toastRef.current?.show(toastFileFailed);
    }
    e.target.value = "";
  };

  const loadDataMSW = () => {
    dispatch(thunkLoadData());
  };

  const resetTable = () => dispatch(clearData());

  useEffect(() => {
    if (isError) {
      toastRef.current?.show(toastError);
    }
  }, [isError]);

  return (
    <>
      <Toast ref={toastRef} />
      <div className={styles.wrapper}>
        <Button onClick={loadDataMSW} className={styles.button}>
          <p>Загрузить mock данные</p>
          <i className="pi pi-cloud-download" style={{ fontSize: "1rem" }}></i>
        </Button>
        <Button
          className={`p-button-success ${styles.button}`}
          onClick={() => refInput.current?.click()}
        >
          <p>Загрузить данные из Excel</p>
          <i className="pi pi-file-import" style={{ fontSize: "1rem" }}></i>
          <input
            ref={refInput}
            onChange={handleFileChange}
            className={styles.input_file}
            max={26214400}
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
        </Button>
        <Button
          className={`p-button-danger ${styles.button}`}
          onClick={resetTable}
        >
          <p>Очистить таблицу</p>
          <i className="pi pi-trash" style={{ fontSize: "1rem" }}></i>
        </Button>
      </div>
    </>
  );
};
