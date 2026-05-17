import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";
import useOrderFilter from "../../../hooks/useOrderFilter";

const Orders = () => {
  // const adminOrders = [
  //   {
  //     orderId: 14,
  //     email: "user1@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 12,
  //         product: {
  //           productId: 161,
  //           productName: "Football",
  //           image: "dafc9a09-dd78-475b-bff2-ca27b046710f.webp",
  //           description: "Professional size football for outdoor play",
  //           quantity: 82,
  //           price: 30.0,
  //           specialPrice: 27.6,
  //           discount: 8.0,
  //         },
  //         quantity: 1,
  //         discount: 8.0,
  //         orderedProductPrice: 27.6,
  //       },
  //       {
  //         orderItemId: 13,
  //         product: {
  //           productId: 153,
  //           productName: "Microwave Oven",
  //           image: "f448b32f-5363-4cea-b14f-d9fb2ef8d482.webp",
  //           description: "Compact microwave with multiple cooking modes",
  //           quantity: 33,
  //           price: 150.0,
  //           specialPrice: 138.0,
  //           discount: 8.0,
  //         },
  //         quantity: 1,
  //         discount: 8.0,
  //         orderedProductPrice: 138.0,
  //       },
  //       {
  //         orderItemId: 14,
  //         product: {
  //           productId: 158,
  //           productName: "Office Chair",
  //           image: "3e226540-72c3-4152-bf06-80aa384de0c7.webp",
  //           description: "Ergonomic chair with lumbar support",
  //           quantity: 39,
  //           price: 180.0,
  //           specialPrice: 162.0,
  //           discount: 10.0,
  //         },
  //         quantity: 1,
  //         discount: 10.0,
  //         orderedProductPrice: 162.0,
  //       },
  //     ],
  //     orderDate: "2026-05-08",
  //     payment: {
  //       paymentId: 14,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3TUk24Rk8Nf8072r1kFC67IE",
  //       pgStatus: "succeeded",
  //       pgResponseMessage: "Pyament successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 327.6,
  //     orderStatus: "Order Accepted",
  //     addressId: 34,
  //   },
  //   {
  //     orderId: 18,
  //     email: "admin@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 19,
  //         product: {
  //           productId: 153,
  //           productName: "Microwave Oven",
  //           image: "f448b32f-5363-4cea-b14f-d9fb2ef8d482.webp",
  //           description: "Compact microwave with multiple cooking modes",
  //           quantity: 33,
  //           price: 150.0,
  //           specialPrice: 138.0,
  //           discount: 8.0,
  //         },
  //         quantity: 1,
  //         discount: 8.0,
  //         orderedProductPrice: 138.0,
  //       },
  //       {
  //         orderItemId: 20,
  //         product: {
  //           productId: 157,
  //           productName: "Smart Watch",
  //           image: "27caa0da-9a8e-4bbb-a714-3bced3a64164.webp",
  //           description: "Fitness tracking smartwatch with heart rate monitor",
  //           quantity: 64,
  //           price: 200.0,
  //           specialPrice: 178.0,
  //           discount: 11.0,
  //         },
  //         quantity: 1,
  //         discount: 11.0,
  //         orderedProductPrice: 178.0,
  //       },
  //       {
  //         orderItemId: 21,
  //         product: {
  //           productId: 159,
  //           productName: "Wooden Study Table",
  //           image: "abc35b32-73b8-484f-8abd-feee98ca9984.webp",
  //           description: "Durable wooden table with storage drawers",
  //           quantity: 29,
  //           price: 250.0,
  //           specialPrice: 232.5,
  //           discount: 7.0,
  //         },
  //         quantity: 1,
  //         discount: 7.0,
  //         orderedProductPrice: 232.5,
  //       },
  //     ],
  //     orderDate: "2026-05-12",
  //     payment: {
  //       paymentId: 18,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3TWGEKRk8Nf8072r1GDJ8aFE",
  //       pgStatus: "succeeded",
  //       pgResponseMessage: "Pyament successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 548.5,
  //     orderStatus: "Order Accepted",
  //     addressId: 38,
  //   },
  // ];

  // const pagination = {
  //   pageNumber: 0,
  //   pageSize: 12,
  //   totalElements: 7,
  //   totalPages: 1,
  //   lastPage: true,
  // };

  const { adminOrder, pagination } = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder?.length === 0;

  return (
    <div className="pb-6 pt-20">
      {emptyOrder ? (
        <div className="flex flex-col items-center justify-center text-gray-600 py-10">
          <FaShoppingCart size={50} className="mb-3" />
          <h2 className="text-2xl font-semibold">No Orders Placed Yet</h2>
        </div>
      ) : (
        <div>
          <OrderTable adminOrder={adminOrder} pagination={pagination} />
        </div>
      )}
    </div>
  );
};

export default Orders;
