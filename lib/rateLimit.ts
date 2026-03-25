type RateData = {
  count: number;
  lastReset: number;
};

const TIME_LIMIT = 10 * 1000; // 10 seconds
const MAX_LIMIT = 5; // 5 requests per 10 seconds

const store = new Map<string, RateData>();

export const rateLimit = (ip: string) => {
  const now = Date.now();
  if (!store.has(ip)) {
    store.set(ip, { count: 1, lastReset: now }); // first request
    return { success: true };
  }
  const data = store.get(ip)!;

  if (now - data?.lastReset > TIME_LIMIT) {
    store.set(ip, { count: 1, lastReset: now }); // reset count
    return { success: true };
  }
  if (data.count > MAX_LIMIT) {
    return { success: false };
  }

  data.count++;

  console.log("store", store);
  return { success: true };
};
