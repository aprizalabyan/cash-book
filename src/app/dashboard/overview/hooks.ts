import { TRecentTransactionsResponse } from "@/types/recent-transactions";
import { useQuery } from "@tanstack/react-query";

export function useTotalBalance(params: { year: string }) {
  return useQuery({
    queryKey: ["total-balance", params],
    queryFn: async () => {
      try {
        const query = new URLSearchParams({
          year: String(params.year),
        });
        const res = await fetch(
          `/cashbook-api/dashboard/total-balance?${query}`,
        );
        return res.json();
      } catch (err) {
        throw err;
      }
    },
  });
}

export function useMonthlyStatus(params: { year: string; month: string }) {
  return useQuery({
    queryKey: ["monthly-status", params],
    queryFn: async () => {
      try {
        const query = new URLSearchParams({
          year: String(params.year),
          month: String(params.month),
        });
        const res = await fetch(
          `/cashbook-api/dashboard/monthly-status?${query}`,
        );
        return res.json();
      } catch (err) {
        throw err;
      }
    },
  });
}

export function useBalanceStatistics(params: { year: string }) {
  type TApiResponse = {
    category: string;
    data: {
      label: string;
      value: number;
    }[];
  }[];

  return useQuery({
    queryKey: ["balance-statistics", params],
    queryFn: async () => {
      try {
        const query = new URLSearchParams({
          year: String(params.year),
        });
        const res = await fetch(
          `/cashbook-api/dashboard/transaction-timeline?${query}`,
        );
        return res.json();
      } catch (err) {
        throw err;
      }
    },
    select: (data: TApiResponse) => {
      if (!data || data.length === 0) {
        return { categories: [], series: [] };
      }

      const categories = data[0].data.map((item) => item.label);
      const series = data.map((item) => ({
        name: item.category,
        data: item.data.map((d) => d.value),
        smooth: true,
        itemStyle: {
          color: item.category === "Income" ? "#017E00" : "#E53E3E",
        },
      }));

      return { categories, series };
    },
  });
}

export function useRecentTransactions(params: { year: string; limit: number }) {
  return useQuery({
    queryKey: ["recent-transactions", params],
    queryFn: async (): Promise<TRecentTransactionsResponse[]> => {
      try {
        const query = new URLSearchParams({
          year: String(params.year),
          limit: String(params.limit),
        });
        const res = await fetch(
          `/cashbook-api/dashboard/recent-transactions?${query}`,
        );
        return res.json();
      } catch (err) {
        throw err;
      }
    },
  });
}
