export type TRecentTransactionsResponse = {
  amount: number;
  date: string;
  description: string;
  source: string;
  type: "income" | "expense";
};
