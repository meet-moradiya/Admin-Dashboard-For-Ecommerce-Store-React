// import React from "react";

// function ManageProduct() {
//   return <div>ManageProduct</div>;
// }

// export default ManageProduct;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useForm } from "react-hook-form";

function ManageProduct({ product }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      category: product?.category,
      brandName: product?.brandName || "",
      sku: product?.sku || "",
      productName: product?.productName || "",
      description: product?.description || "",
      bulletPoints: product?.buttetPoints || "",
      modelNo: product?.modelNo || "",
      price: product?.price || "",
      mrp: product?.mrp || "",
      sizes: product?.sizes,
      stock: product?.stock || "",
      color: product?.color || "",
      material: product?.material || "",
      manufacturer: product?.manufacturer || "",
      warranty: product?.warranty || "",
      madeIn: product?.madeIn || "",
    },
  });
  const [images, setImages] = useState([]);

  const changeImageHandler = (index, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const updatedImages = [...images];
      updatedImages[index] = reader.result;
      setImages(updatedImages);
    };
  };

  const handleImageChange = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  const submitProduct = (productData) => {
    console.log(productData);
  };

  return (
    <div className="article">
      <h1 className="mainlogo">Logo...</h1>
      <h4>Add New Product</h4>
      <form onSubmit={handleSubmit(submitProduct)} className="productForm">
        <div className="textInput">
          <div className="box categoryBox">
            <label htmlFor="category" title="Select the category for this product (e.g., 'Electronics', 'Clothing', 'Home & Kitchen').">
              Category*:
            </label>
            <select className="category" name="category" {...register("category", { required: true })}>
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing-apparel">Clothing & Apparel</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="health-beauty">Health & Beauty</option>
              <option value="sports-outdoors">Sports & Outdoors</option>
              <option value="toys-games">Toys & Games</option>
              <option value="books-media">Books & Media</option>
              <option value="automotive">Automotive</option>
              <option value="jewelry-accessories">Jewelry & Accessories</option>
              <option value="furniture-decor">Furniture & Decor</option>
              <option value="pet-supplies">Pet Supplies</option>
              <option value="food-grocery">Food & Grocery</option>
              <option value="tools-home-improvement">Tools & Home Improvement</option>
              <option value="baby-kids">Baby & Kids</option>
              <option value="office-supplies">Office Supplies</option>
              <option value="arts-crafts">Arts & Crafts</option>
              <option value="garden-outdoor-living">Garden & Outdoor Living</option>
              <option value="travel-luggage">Travel & Luggage</option>
              <option value="fitness-exercise">Fitness & Exercise</option>
              <option value="party-supplies">Party Supplies</option>
              <option value="musical-instruments">Musical Instruments</option>
              <option value="electronics-accessories">Electronics Accessories</option>
              <option value="watches">Watches</option>
              <option value="bags-backpacks">Bags & Backpacks</option>
              <option value="personal-care-hygiene">Personal Care & Hygiene</option>
              <option value="cookware-bakeware">Cookware & Bakeware</option>
              <option value="home-appliances">Home Appliances</option>
              <option value="stationery-writing-supplies">Stationery & Writing Supplies</option>
              <option value="diy-craft-supplies">DIY & Craft Supplies</option>
              <option value="sporting-goods">Sporting Goods</option>
              <option value="shoes-footwear">Shoes & Footwear</option>
              <option value="gadgets-gizmos">Gadgets & Gizmos</option>
              <option value="computer-hardware">Computer Hardware</option>
              <option value="cosmetics-makeup">Cosmetics & Makeup</option>
              <option value="vintage-collectibles">Vintage & Collectibles</option>
              <option value="photography-videography">Photography & Videography</option>
              <option value="specialty-foods">Specialty Foods</option>
              <option value="eco-friendly-products">Eco-friendly Products</option>
              <option value="office-furniture">Office Furniture</option>
              <option value="handmade-crafts">Handmade Crafts</option>
              <option value="educational-toys-games">Educational Toys & Games</option>
              <option value="smart-home-devices">Smart Home Devices</option>
              <option value="outdoor-clothing-gear">Outdoor Clothing & Gear</option>
              <option value="board-games-puzzles">Board Games & Puzzles</option>
              <option value="musical-equipment-gear">Musical Equipment & Gear</option>
              <option value="art-supplies">Art Supplies</option>
              <option value="camping-hiking-gear">Camping & Hiking Gear</option>
              <option value="virtual-reality-accessories">Virtual Reality Accessories</option>
              <option value="luxury-watches-jewelry">Luxury Watches & Jewelry</option>
              <option value="home-decor-accents">Home Decor & Accents</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="box brandNameBox">
            <label htmlFor="brandName" title="Enter the brand name of the product.">
              Brand Name*:
            </label>
            <input type="text" id="brandName" name="brandName" {...register("brandName", { required: !product })} />
          </div>

          <div className="box skuBox">
            <label htmlFor="sku" title="Enter a unique Stock Keeping Unit (SKU) for the product.">
              SKU*:
            </label>
            <input type="text" id="sku" name="sku" {...register("sku", { required: !product })} />
          </div>

          <div className="box productName">
            <label htmlFor="productName" title="Enter the name of the product.">
              Product Name*:
            </label>
            <input type="text" id="productName" name="productName" {...register("productName", { required: !product })} />
          </div>

          <div className="box descriptionBox">
            <label htmlFor="description" title="Provide a brief description of the product.">
              Description*:
            </label>
            <textarea id="description" name="description" {...register("description", { required: !product })}></textarea>
          </div>

          <div className="box bpBox">
            <label htmlFor="bulletPoints" title="Enter key features or bullet points about the product.">
              Bullet Points*:
            </label>
            <textarea id="bulletPoints" name="bulletPoints" {...register("bulletPoints", { required: !product })}></textarea>
          </div>

          <div className="box modelBox">
            <label htmlFor="modelNo" title="Enter the model number of the product.">
              Model No*:
            </label>
            <input type="text" id="modelNo" name="modelNo" {...register("modelNo", { required: !product })} />
          </div>

          <div className="box priceBox">
            <label htmlFor="price" title="Enter the selling price of the product.">
              Price*:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              min="0"
              onInput={(e) => {
                e.target.value = Math.abs(e.target.value);
              }}
              {...register("price", { required: !product })}
            />
          </div>

          <div className="box mrpBox">
            <label htmlFor="mrp" title="Enter the Manufacturer's Recommended Price of the product.">
              MRP*:
            </label>
            <input
              type="number"
              id="mrp"
              name="mrp"
              step="0.01"
              min="0"
              onInput={(e) => {
                e.target.value = Math.abs(e.target.value);
              }}
              {...register("mrp", { required: !product })}
            />
          </div>

          <div className="box sizeBox">
            <label htmlFor="sizes" title="Enter available sizes for the product (e.g., 'Small', 'Medium', 'Large', 'Standard').">
              Sizes*:
            </label>
            <select className="sizes" name="sizes" {...register("sizes", { required: true })}>
              <option value="">Select a size</option>
              <option value="large">Large</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          <div className="box stockBox">
            <label htmlFor="stock" title="Enter the available stock quantity for the product.">
              Stock*:
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              onInput={(e) => {
                e.target.value = Math.abs(e.target.value);
              }}
              {...register("stock", { required: !product })}
            />
          </div>

          <div className="box colorBox">
            <label htmlFor="color" title="Enter the color options available for the product (if applicable).">
              Color:
            </label>
            <input type="text" id="color" name="color" {...register("color")} />
          </div>

          <div className="box materialBox">
            <label htmlFor="material" title="Enter the material(s) used in the product (if applicable).">
              Material:
            </label>
            <input type="text" id="material" name="material" {...register("material")} />
          </div>

          <div className="box manufacBox">
            <label htmlFor="manufacturer" title="Enter the name of the manufacturer of the product.">
              Manufacturer*:
            </label>
            <input type="text" id="manufacturer" name="manufacturer" {...register("manufacturer", { required: !product })} />
          </div>

          <div className="box warrBox">
            <label htmlFor="warranty" title="Enter warranty details (e.g., '1 Month', '1 Year', '90 Days').">
              Warranty:
            </label>
            <input type="text" id="warranty" name="warranty" {...register("warranty")} />
          </div>

          <div className="box madeinBox">
            <label htmlFor="madeIn" title="Enter the country of manufacture for the product.">
              Made in*:
            </label>
            <input type="text" id="madeIn" name="madeIn" {...register("madeIn", { required: !product })} />
          </div>
        </div>

        <div className="imgInput">
          {[...Array(6)].map((_, index) => (
            <div className={`img img${index + 1}`} key={index} title="image ratio should be 1:1">
              {images[index] ? (
                <EditRoundedIcon
                  onClick={(e) => handleImageChange(index, e)}
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "7px",
                    zIndex: "1",
                    color: "#212529",
                    fontSize: "3.5rem",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <label htmlFor={`image${index + 1}`} title={`Upload ${index === 0 ? "Main Image" : `Image ${index + 1}`}`}>
                  <CameraEnhanceRoundedIcon
                    style={{
                      fontSize: "4rem",
                      color: "#343a40",
                    }}
                  />
                  {index === 0 ? "Main Image*" : `Image ${index + 1}`}
                </label>
              )}

              <input
                type="file"
                id={`image${index + 1}`}
                name="image[]"
                accept="image/*"
                onChange={(e) => changeImageHandler(index, e)}
                required={index === 0}
              />

              {images[index] && (
                <div id={`imagePreview${index}`} className="imagePreview">
                  <img src={images[index]} alt={`productImage${index + 1}`} height={270} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="formBtns">
          <div className="formBtn1">
            <Link to={"/admin/products"}>
              <button>Cancel</button>
            </Link>
          </div>
          <div className="formBtn2">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ManageProduct;
