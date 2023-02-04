import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Buttons, HeaderTable, Loader } from "./components";
import { useAppSelector } from "./store/hooks";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  const { data, isFetching } = useAppSelector((state) => state.data);

  return (
    <div className="app">
      {isFetching ? <Loader /> : null}
      <Buttons />
      <DataTable
        emptyMessage={"Нет данных"}
        rowHover
        value={data}
        header={<HeaderTable />}
        responsiveLayout="scroll"
      >
        <Column field="date" header="Дата" />
        <Column field="gas" header="Добыча нефти, т/сут" />
        <Column field="water" header="Добыча жидкости, м3/сут" />
      </DataTable>
    </div>
  );
}

export default App;
