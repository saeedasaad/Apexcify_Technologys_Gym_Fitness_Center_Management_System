import React from "react";

export const Table = ({ children }) => (
  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-left border-collapse">{children}</table>
  </div>
);

export const TableHead = ({ children }) => (
  <thead className="bg-[#eaf7f9] text-gray-700">{children}</thead>
);

export const TableRow = ({ children }) => (
  <tr className="border-b hover:bg-gray-50">{children}</tr>
);

export const TableHeader = ({ children }) => (
  <th className="px-2 sm:px-4 py-2 border-b font-semibold text-sm sm:text-base">
    {children}
  </th>
);

export const TableCell = ({ children }) => (
  <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">{children}</td>
);