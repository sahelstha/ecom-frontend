import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../../shared/Loader";
import { FaBoxOpen } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { adminProductTableColumn } from "../../helper/tableColumn";

const AdminProducts = () => {
  const products = [
    {
      productId: 202,
      productName: "i-Phone 17 pro max",
      image: "http://localhost:8080/images/null",
      description:
        "High performance smartphone with a 4k display and powerful GPU",
      quantity: 30,
      price: 1500.0,
      specialPrice: 1350.0,
      discount: 10.0,
    },
    {
      productId: 161,
      productName: "Football",
      image:
        "http://localhost:8080/images/dafc9a09-dd78-475b-bff2-ca27b046710f.webp",
      description: "Professional size football for outdoor play",
      quantity: 82,
      price: 30.0,
      specialPrice: 27.6,
      discount: 8.0,
    },
    {
      productId: 160,
      productName: "Sofa Set",
      image:
        "http://localhost:8080/images/21c98bf2-dcaa-4177-8146-fd77ceb90b9e.webp",
      description: "Comfortable 3-seater sofa with modern design",
      quantity: 12,
      price: 800.0,
      specialPrice: 696.0,
      discount: 13.0,
    },
  ];
  const pagination = {
    pageNumber: 0,
    pageSize: 10,
    totalElements: 21,
    totalPages: 3,
    lastPage: false,
  };

  const tableRecords = products?.map((item) => {
    return {
      id: item.productId,
      productName: item.productName,
      description: item.description,
      discount: item.discount,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      specialPrice: item.specialPrice,
    };
  });

  const emptyProduct = !products || products?.length === 0;
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1,
  );

  const handleEdit = (products) => {};

  const handleDelete = (products) => {};

  const handleImageUpload = (products) => {};

  const handleProductView = (products) => {};

  const handlePaginationChange = (paginationModel) => {};

  return (
    <div>
      <div className="pt-6 pb-10 flex justify-end">
        <button className="bg-custom-blue hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md cursor-pointer shadow-md transition-colors hover:text-slate-300 duration-300">
          <MdAddShoppingCart className="text-xl" />
          Add Product
        </button>
      </div>

      {!emptyProduct && (
        <h1 className="text-slate-800 text-3xl text-center font-extrabold pb-6 uppercase">
          All Products
        </h1>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {emptyProduct ? (
            <div className="flex flex-col items-center justify-center text-gray-600 py-10">
              <FaBoxOpen size={50} className="mb-3" />
              <h2 className="text-2xl font-semibold">
                No Products created yet
              </h2>
            </div>
          ) : (
            <div className="max-w-full">
              <DataGrid
                className="w-full"
                rows={tableRecords}
                columns={adminProductTableColumn(
                  handleEdit,
                  handleDelete,
                  handleImageUpload,
                  handleProductView,
                )}
                paginationMode="server"
                rowCount={pagination.totalElements || 0}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: pagination?.pageSize || 10,
                      page: currentPage - 1,
                    },
                  },
                }}
                onPaginationModelChange={handlePaginationChange}
                disableRowSelectionOnClick
                disableColumnResize
                pageSizeOptions={[pagination.pageSize || 10]}
                pagination
                paginationOptions={{
                  showFirstButton: true,
                  showLastButton: true,
                  hideNextButton: currentPage === pagination?.totalPages,
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminProducts;
