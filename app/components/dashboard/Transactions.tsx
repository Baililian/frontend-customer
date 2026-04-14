import { useState } from "react";

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
  method: string;
  status: "Paid" | "Pending" | "Failed" | "Refunded";
  bookingId?: number;
};

type Props = {
  bookings?: any[];
};

const statusColors: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-600",
  Refunded: "bg-gray-100 text-gray-600",
};

const sampleTransactions: Transaction[] = [
  { id: 1, date: "2025-03-10", description: "VIP Cottage + Food Package", amount: 8800, method: "GCash", status: "Paid", bookingId: 1001 },
  { id: 2, date: "2025-03-22", description: "Adult Pool Access (3 pax)", amount: 750, method: "Cash on Site", status: "Paid", bookingId: 1002 },
  { id: 3, date: "2025-04-01", description: "Boodle Fight Package", amount: 3800, method: "Maya", status: "Pending", bookingId: 1003 },
  { id: 4, date: "2025-04-05", description: "Small Cottage", amount: 1200, method: "Bank Transfer", status: "Refunded", bookingId: 1004 },
];

export default function Payments({ bookings = [] }: Props) {
  const [filterStatus, setFilterStatus] = useState("All");
  const [transactions] = useState<Transaction[]>(sampleTransactions);

  const filteredTx = filterStatus === "All"
    ? transactions
    : transactions.filter((t) => t.status === filterStatus);

  const totalPaid = transactions.filter((t) => t.status === "Paid").reduce((s, t) => s + t.amount, 0);
  const totalPending = transactions.filter((t) => t.status === "Pending").reduce((s, t) => s + t.amount, 0);

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Payments & Billing</h1>
        <p className="text-sm text-gray-500 mt-1">
          View your transaction history and billing records.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-sky-100/60">
          <p className="text-xs text-gray-500 font-medium mb-1">Total Transactions</p>
          <p className="text-2xl font-bold text-sky-800">{transactions.length}</p>
        </div>
        <div className="bg-emerald-50 p-5 rounded-2xl shadow-lg border border-emerald-100">
          <p className="text-xs text-emerald-600 font-medium mb-1">Total Paid</p>
          <p className="text-2xl font-bold text-emerald-700">₱{totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-amber-50 p-5 rounded-2xl shadow-lg border border-amber-100">
          <p className="text-xs text-amber-600 font-medium mb-1">Pending Payment</p>
          <p className="text-2xl font-bold text-amber-700">₱{totalPending.toLocaleString()}</p>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h2 className="text-base font-bold text-sky-800 mb-4">📋 Transaction History</h2>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-4">
          {["All", "Paid", "Pending", "Refunded", "Failed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                filterStatus === s
                  ? "bg-sky-600 text-white border-sky-600"
                  : "text-gray-600 border-gray-200 hover:bg-sky-50 hover:border-sky-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {filteredTx.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-3">💳</p>
            <p className="font-semibold text-gray-500">No transactions found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTx.map((tx) => (
              <div
                key={tx.id}
                className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md border border-sky-100/60 flex justify-between items-start hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-sky-800">{tx.description}</p>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Date:</span> {tx.date}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Method:</span> {tx.method}
                  </p>
                  {tx.bookingId && (
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">Booking Ref:</span> #{tx.bookingId}
                    </p>
                  )}
                  <span className={`inline-block mt-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[tx.status]}`}>
                    {tx.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${tx.status === "Refunded" ? "text-gray-400 line-through" : "text-sky-700"}`}>
                    ₱{tx.amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Transaction #{tx.id}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
