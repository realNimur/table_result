// eslint-disable-next-line import/named
import { ToastMessage } from "primereact/toast";

export const toastError: ToastMessage = {
  severity: "error",
  summary: "Ошибка",
  detail: `Произошла ошибка загрузки`,
  life: 2000,
};

export const toastFileSuccess: ToastMessage = {
  severity: "success",
  summary: "Успех",
  detail: "Файл успешно импортирован",
  life: 2000,
};

export const toastFileFailed: ToastMessage = {
  severity: "error",
  summary: "Ошибка",
  detail: "Ошибка файла",
  life: 2000,
};
