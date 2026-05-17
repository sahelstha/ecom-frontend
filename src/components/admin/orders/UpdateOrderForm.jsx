import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Spiners from "../../shared/Spiners";

const ORDER_STATUSES = [
  "Pending",
  "Processing",
  "Shipped",
  "Deleivered",
  "Cancelled",
  "Accepted",
];

const UpdateOrderForm = ({
  setOpen,
  selectedId,
  selectedItem,
  loader,
  setLoader,
}) => {
  const [orderStatus, setOrderStatus] = useState(
    selectedItem?.status || "Accepted",
  );
  const [error, setError] = useState("");

  return (
    <div className="py-5 relative h-full">
      <form className="space-y-4" onSubmit={() => {}}>
        <FormControl fullWidth variant="outlined" error={!!error}>
          <InputLabel id="order-status-label">Order Status</InputLabel>
          <Select
            labelId="order-status-label"
            label="Order Status"
            value={orderStatus}
            onChange={(e) => {
              setOrderStatus(e.target.value);
              setError("");
            }}
          >
            {ORDER_STATUSES.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>

          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>

        <div className="flex w-full justify-between items-center absolute bottom-14">
          <Button
            disabled={loader}
            onClick={() => setOpen(false)}
            variant="outlined"
            className="text-white py-2.5 px-4 text-sm font-medium"
          >
            Cancle
          </Button>
          <Button
            disabled={loader}
            type="submit"
            color="primary"
            variant="contained"
            className="bg-custom-blue text-white py-2.5 px-4 text-sm font-medium"
          >
            {loader ? (
              <div>
                <Spiners />
              </div>
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateOrderForm;
