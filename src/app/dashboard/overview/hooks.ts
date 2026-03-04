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
