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
