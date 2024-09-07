import KPI from "./kpis.model";

const getKPIs = async () => {
  const kpis = await KPI.find();
  return kpis;
};

export { getKPIs };
