import moment from "moment";

export const formatDateToBackend = (date) => {
  return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
};
