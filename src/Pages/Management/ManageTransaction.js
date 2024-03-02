import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const orderItems = [
  {
    name: "watch for man",
    photo:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVpkACSXE8O04sqGVMCy0UnWaFjUYzjJdy7C2yft9UW51BoxAepP_j6w4_ahmurRmdhvYh9KenES4zxjFZEADdJM1RkqxJvloHci73UrCUXfiFKW_omTRa1A",
    _id: "wjeth34JKs",
    quantity: 2,
    price: 6999,
    sku: "premium watch",
  },
  {
    name: "shoes for man",
    photo:
      "https://www.jiomart.com/images/product/original/rvbvzxi9m3/d-shoes-men-s-stylish-trendy-mesh-lace-ups-converse-style-sneakers-white-product-images-rvbvzxi9m3-0-202303260354.jpg?im=Resize=(1000,1000)",
    _id: "wdiv23kmeg",
    quantity: 1,
    price: 12999,
    sku: "stylish shoes",
  },
];

function ManageTransaction() {
  const [order, setOrder] = useState({
    name: "meet moradiya",
    address: "77 black street",
    city: "surat",
    state: "gujarat",
    country: "india",
    pinCode: 123569,
    status: "Processing",
    subTotal: 25000,
    discount: 5000,
    diliveryCharge: 0,
    tax: 0,
    totalAmount: 19998,
    orderItem: orderItems,
    _id: "jfdi23-werjkc-394jsd",
    orderDate: "27/05/2024",
  });

  const statusHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  const navigate = useNavigate();

  return (
    <section className="transactionPageSection">
      <h1 className="mainlogo">Logo.</h1>
      <h4>Manage Order</h4>
      <div
        className="mainOrderBox"
        style={{
          position: "relative",
        }}
      >
        <div title="Back" onClick={() => navigate("/admin/transactions")}>
          <ChevronLeftRoundedIcon
            style={{
              fontSize: "5rem",
              color: "#343a40",
              position: "absolute",
              right: "1rem",
              cursor: "pointer",
            }}
          />
        </div>
        <h4>Order Items</h4>
        <div className="orderItemCard">
          {order.orderItem.map((product) => (
            <div className="orderCard" key={product._id}>
              <img src={product.photo} alt="productImg" height={125} />
              <div className="tempOrderDetail">
                <Link to={`/product/${product._id}`} target="_blank">
                  {product.name}
                </Link>
                <p>SKU: {product.sku}</p>
                <p>Product Id: {product._id}</p>
              </div>
              <span>
                ${product.price} X {product.quantity} = ${product.price * product.quantity}{" "}
              </span>
            </div>
          ))}
        </div>
        <h4>order detail</h4>
        <div className="orderDetail">
          <div className="orderDate">
            <h5>Order date</h5>
            <p>{order.orderDate}</p>
            <button
              style={{
                marginLeft: 0,
              }}
            >
              Cancel Order
            </button>
          </div>
          <div className="customerDetail">
            <h5>Order details</h5>
            <p>
              <span>Buyer name: </span>
              {order.name}
            </p>
            <p>
              <span>Order Id: </span>
              {order._id}
            </p>
            <p className="addressClass">
              <span>Address: </span>
              {`${order.address}, ${order.city}, ${order.state}, ${order.country}`}
            </p>
            <p>
              <span>Pin Code: </span>
              {order.pinCode}
            </p>
          </div>
          <div className="amountInfo">
            <h5>Amount Info</h5>
            <p>
              <span>Subtotal: </span>
              {order.subTotal}{" "}
            </p>
            <p>
              <span>Shipping CHarges: </span>
              {order.diliveryCharge}{" "}
            </p>
            <p>
              <span>Tax: </span>
              {order.tax}{" "}
            </p>
            <p>
              <span>Discount: </span>
              {order.discount}{" "}
            </p>
            <p>
              <span>Total: </span>
              {order.totalAmount}{" "}
            </p>
          </div>
          <div className="statusInfo">
            <h5>Order Status</h5>

            <p>
              <span>Status: </span>
              <strong
                className={order.status === "Delivered" ? "blue orderStatus" : order.status === "Shipped" ? "green orderStatus" : "red orderStatus"}
              >
                {order.status}
              </strong>
            </p>
            <button onClick={statusHandler} disabled={order.status === "Delivered"}>
              Update Status
            </button>
            <br />
            <button>Print Label</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ManageTransaction;

// ##########################################################################################

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
// import QRCode from "qrcode.react";

// const orderItems = [
//   {
//     name: "watch for man",
//     photo:
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVpkACSXE8O04sqGVMCy0UnWaFjUYzjJdy7C2yft9UW51BoxAepP_j6w4_ahmurRmdhvYh9KenES4zxjFZEADdJM1RkqxJvloHci73UrCUXfiFKW_omTRa1A",
//     _id: "wjeth34JK",
//     quantity: 2,
//     price: 6999,
//     sku: "premium watch",
//   },
//   {
//     name: "shoes for man",
//     photo:
//       "https://www.jiomart.com/images/product/original/rvbvzxi9m3/d-shoes-men-s-stylish-trendy-mesh-lace-ups-converse-style-sneakers-white-product-images-rvbvzxi9m3-0-202303260354.jpg?im=Resize=(1000,1000)",
//     _id: "wjeth34JK",
//     quantity: 1,
//     price: 12999,
//     sku: "stylish shoes",
//   },
// ];

// function PrintLabelPDF({ order }) {
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "column",
//       padding: 20,
//     },
//     section: {
//       marginBottom: 10,
//     },
//     qrCodeContainer: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-around",
//       marginBottom: 20,
//     },
//     qrCode: {
//       margin: 5,
//     },
//     text: {
//       marginBottom: 10,
//     },
//   });

//   return (
//     <Document>
//       {" "}
//       {/* Change PDFViewer to Document */}
//       <Page size="A4" style={styles.page}>
//         <View style={styles.qrCodeContainer}>
//           <QRCode value={order._id} size={100} style={styles.qrCode} />
//           <QRCode value={order.address} size={100} style={styles.qrCode} />
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.text}>Buyer Name: {order.name}</Text>
//           <Text style={styles.text}>
//             Address: {order.address}, {order.city}, {order.state}, {order.country}
//           </Text>
//           <Text style={styles.text}>Order ID: {order._id}</Text>
//           {/* Add more order details here */}
//         </View>
//       </Page>
//     </Document>
//   );
// }

// function ManageTransaction() {
//   const [order, setOrder] = useState({
//     name: "meet moradiya",
//     address: "77 black street",
//     city: "surat",
//     state: "gujarat",
//     country: "india",
//     pinCode: 123569,
//     status: "processing",
//     subTotal: 25000,
//     discount: 5000,
//     diliveryCharge: 0,
//     tax: 0,
//     totalAmount: 19998,
//     orderItem: orderItems,
//     _id: "jfdi23-werjkc-394jsd",
//     orderDate: "27/05/2024",
//   });

//   const handlePrintLabel = () => {
//     try {
//       // Generate PDF
//       const pdfBlob = new Blob([<PrintLabelPDF order={order} />], { type: "application/pdf" });

//       // Create a temporary object URL for the PDF blob
//       const url = URL.createObjectURL(pdfBlob);

//       // Create a temporary link element
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", `order_label_${order._id}.pdf`);

//       // Simulate click to trigger download
//       document.body.appendChild(link);
//       link.click();

//       // Cleanup
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error generating or downloading PDF:", error);
//     }
//   };

//   return (
//     <section>
//       <h1 className="mainlogo">Logo.</h1>
//       <h4>Manage Order</h4>
//       <div className="mainOrderBox">
//         <h4>Order Items</h4>
//         <div className="orderItemCard">
//           {order.orderItem.map((product) => (
//             <div className="orderCard">
//               <img src={product.photo} alt="productImg" height={125} />
//               <div className="tempOrderDetail">
//                 <Link to={`/product/${product._id}`} target="_blank">
//                   {product.name}
//                 </Link>
//                 <p>SKU: {product.sku}</p>
//                 <p>Product Id: {product._id}</p>
//               </div>
//               <span>
//                 ${product.price} X {product.quantity} = ${product.price * product.quantity}{" "}
//               </span>
//             </div>
//           ))}
//         </div>
//         <h4>order detail</h4>
//         <div className="orderDetail">
//           <div className="orderDate">
//             <h5>Order date</h5>
//             <p>{order.orderDate}</p>
//           </div>
//           <div className="customerDetail">
//             <h5>Order details</h5>
//             <p>
//               <span>Buyer name: </span>
//               {order.name}
//             </p>
//             <p>
//               <span>Order Id: </span>
//               {order._id}
//             </p>
//             <p className="addressClass">
//               <span>Address: </span>
//               {`${order.address}, ${order.city}, ${order.state}, ${order.country}`}
//             </p>
//             <p>
//               <span>Pin Code: </span>
//               {order.pinCode}
//             </p>
//           </div>
//           <div className="amountInfo">
//             <h5>Amount Info</h5>
//             <p>
//               <span>Subtotal: </span>
//               {order.subTotal}{" "}
//             </p>
//             <p>
//               <span>Shipping CHarges: </span>
//               {order.diliveryCharge}{" "}
//             </p>
//             <p>
//               <span>Tax: </span>
//               {order.tax}{" "}
//             </p>
//             <p>
//               <span>Discount: </span>
//               {order.discount}{" "}
//             </p>
//             <p>
//               <span>Total: </span>
//               {order.totalAmount}{" "}
//             </p>
//           </div>
//           <div className="statusInfo">
//             <h5>Order Status</h5>
//             <p>
//               <span>Status: </span>
//               {order.status}
//             </p>
//             {/* <button onClick={handlePrintLabel}>Print Label</button> */}
//             <button>Update Status</button>
//             <PDFViewer style={{ width: "100%", height: "500px" }}>
//               <PrintLabelPDF order={order} />
//             </PDFViewer>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default ManageTransaction;

// ########################################################################################

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Document, Page, PDFViewer } from "@react-pdf/renderer"; // Import PDFViewer and Document from @react-pdf/renderer
// import QRCode from "qrcode.react";

// const orderItems = [
//   {
//     name: "watch for man",
//     photo:
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVpkACSXE8O04sqGVMCy0UnWaFjUYzjJdy7C2yft9UW51BoxAepP_j6w4_ahmurRmdhvYh9KenES4zxjFZEADdJM1RkqxJvloHci73UrCUXfiFKW_omTRa1A",
//     _id: "wjeth34JK",
//     quantity: 2,
//     price: 6999,
//     sku: "premium watch",
//   },
//   {
//     name: "shoes for man",
//     photo:
//       "https://www.jiomart.com/images/product/original/rvbvzxi9m3/d-shoes-men-s-stylish-trendy-mesh-lace-ups-converse-style-sneakers-white-product-images-rvbvzxi9m3-0-202303260354.jpg?im=Resize=(1000,1000)",
//     _id: "wjeth34JK",
//     quantity: 1,
//     price: 12999,
//     sku: "stylish shoes",
//   },
// ];

// function PrintLabelPDF({ order }) {
//   const qrCodeSize = 100;

//   return (
//     <Document>
//       <Page size="A4">
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <QRCode value={order._id} size={qrCodeSize} />
//           <QRCode value={order.address} size={qrCodeSize} />
//         </div>
//         <h1>Buyer Name: {order.name}</h1>
//         <p>
//           Address: {order.address}, {order.city}, {order.state}, {order.country}
//         </p>
//         <p>Order ID: {order._id}</p>
//       </Page>
//     </Document>
//   );
// }

// function ManageTransaction() {
//   const [order, setOrder] = useState({
//     name: "meet moradiya",
//     address: "77 black street",
//     city: "surat",
//     state: "gujarat",
//     country: "india",
//     pinCode: 123569,
//     status: "processing",
//     subTotal: 25000,
//     discount: 5000,
//     diliveryCharge: 0,
//     tax: 0,
//     totalAmount: 19998,
//     orderItem: orderItems,
//     _id: "jfdi23-werjkc-394jsd",
//     orderDate: "27/05/2024",
//   });

//   return (
//     <section>
//       <h1 className="mainlogo">Logo.</h1>
//       <h4>Manage Order</h4>
//       <div className="mainOrderBox">
//         <h4>Order Items</h4>
//         <div className="orderItemCard">
//           {order.orderItem.map((product, index) => (
//             <div className="orderCard" key={index}>
//               <img src={product.photo} alt="productImg" height={125} />
//               <div className="tempOrderDetail">
//                 <Link to={`/product/${product._id}`} target="_blank">
//                   {product.name}
//                 </Link>
//                 <p>SKU: {product.sku}</p>
//                 <p>Product Id: {product._id}</p>
//               </div>
//               <span>
//                 ${product.price} X {product.quantity} = ${product.price * product.quantity}
//               </span>
//             </div>
//           ))}
//         </div>
//         <h4>Order Detail</h4>
//         <div className="orderDetail">
//           <div className="orderDate">
//             <h5>Order date</h5>
//             <p>{order.orderDate}</p>
//           </div>
//           <div className="customerDetail">
//             <h5>Order details</h5>
//             <p>
//               <span>Buyer name: </span>
//               {order.name}
//             </p>
//             <p>
//               <span>Order Id: </span>
//               {order._id}
//             </p>
//             <p className="addressClass">
//               <span>Address: </span>
//               {`${order.address}, ${order.city}, ${order.state}, ${order.country}`}
//             </p>
//             <p>
//               <span>Pin Code: </span>
//               {order.pinCode}
//             </p>
//           </div>
//           <div className="amountInfo">
//             <h5>Amount Info</h5>
//             <p>
//               <span>Subtotal: </span>
//               {order.subTotal}
//             </p>
//             <p>
//               <span>Shipping Charges: </span>
//               {order.diliveryCharge}
//             </p>
//             <p>
//               <span>Tax: </span>
//               {order.tax}
//             </p>
//             <p>
//               <span>Discount: </span>
//               {order.discount}
//             </p>
//             <p>
//               <span>Total: </span>
//               {order.totalAmount}
//             </p>
//           </div>
//           <div className="statusInfo">
//             <h5>Order Status</h5>
//             <p>
//               <span>Status: </span>
//               {order.status}
//             </p>
//             {/* Add PDF viewer here */}
//             <PDFViewer style={{ width: "100%", height: "500px" }}>
//               <PrintLabelPDF order={order} />
//             </PDFViewer>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default ManageTransaction;
