export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface Kpi {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetKpisResponse {
  data: Kpi[];
  message: string;
  status: string;
}

export interface Product {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transacations: string[];
  createdAt: string;
  updatedAt: string;
}
export interface GetProductsResponse {
  data: Product[];
  message: string;
  status: string;
}
