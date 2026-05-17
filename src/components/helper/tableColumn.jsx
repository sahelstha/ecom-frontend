import { FaEdit } from "react-icons/fa";
import Modal from "../shared/Modal";
import { useState } from "react";

export const adminOrderTableColumn = [
  {
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "orderId",
    align: "center",
    flex: 1,
    minWidth: 180,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">Order ID</span>,
  },
  {
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    align: "center",
    flex: 1.5,
    width: 250,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span className="text-center">Email</span>,
  },
  {
    disableColumnMenu: true,
    field: "totalAmount",
    headerName: "Total Amount",
    align: "center",
    flex: 1,
    width: 200,
    editable: false,
    sortable: true,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span className="text-center">Total Amount</span>,
  },
  {
    disableColumnMenu: true,
    field: "status",
    headerName: "Status",
    align: "center",
    flex: 1,
    width: 200,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span className="text-center">Status</span>,
  },
  {
    disableColumnMenu: true,
    field: "date",
    headerName: "Order Data",
    align: "center",
    flex: 1.2,
    width: 250,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span className="text-center">Order Date</span>,
  },
  {
    disableColumnMenu: true,
    field: "action",
    headerName: "Action",
    flex: 1,
    width: 250,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span className="text-center">Action</span>,
    renderCell: (params) => {
      return (
        <div className="flex justify-center items-center space-x-2 h-full pt-2">
          <button
            className="flex items-center bg-blue-500 text-white px-4 h-9 rounded-md"
            onClick={() => <Modal open={open} setOpen={setOpen} />}
          >
            <FaEdit className="mr-2 " />
            Edit
          </button>
        </div>
      );
    },
  },
];
