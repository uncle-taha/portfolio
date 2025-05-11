import CodeModal from "./CodeModal";
import React, { useState } from "react";
import { Minus, Plus, Trash2, Tag, Truck } from "lucide-react";
import Visa from "./blogImages/visa.png";
import Apple from "./blogImages/applepay.png";
import Master from "./blogImages/master.png";
import Paypal from "./blogImages/paypal.png";
import Chokko1 from "./blogImages/Chokko1.png";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const productPrice = 100;
  const deliveryFee = 12;
  const tax = 0;
  const total = productPrice * quantity + deliveryFee + tax;

  const code = `
import React, { useState } from "react";
import { Minus, Plus, Trash2, Tag, Truck } from "lucide-react";
import Visa from "./your/image/path";
import Apple from "./your/image/path";
import Master from "./your/image/path";
import Paypal from "./your/image/path";
import Chokko1 from "./your/image/path";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const productPrice = 100;
  const deliveryFee = 12;
  const tax = 0;
  const total = productPrice * quantity + deliveryFee + tax;

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl  rounded-2xl border-[0.2px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Cart</h1>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <img
                      src={Chokko1}
                      alt="Man T-shirt"
                      className="rounded-md w-full h-full object-cover "
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-medium">Cat Food</h2>
                      <span className="text-2xl font-medium">
                        ${productPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-gray-700">
                        Color : <span className="font-medium">Black</span>
                      </p>
                      <p className="text-gray-700">
                        Size : <span className="font-medium">L</span>
                      </p>
                      <p className="text-gray-700">
                        Material : <span className="font-medium">Cotton</span>
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={decrementQuantity}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 border-x">{quantity}</span>
                        <button
                          onClick={incrementQuantity}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button className="text-red-500 hover:text-red-700 cursor-pointer">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-4 flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Tag className="text-gray-700" size={20} />
                </div>
                <span className="font-medium">35% on Selected Styles</span>
              </div>

              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-4 flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Truck className="text-gray-700" size={20} />
                </div>
                <span className="font-medium">Free Shipping for Members</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

            <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-6">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-medium">
                    ${(productPrice * quantity).toLocaleString()}.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Delivery:</span>
                  <span className="font-medium">${deliveryFee}.00</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Tax:</span>
                  <span className="font-medium">${tax}</span>
                </div>

                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Total:</span>
                    <span className="font-bold">
                      ${total.toLocaleString()}.00
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-green-800 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium cursor-pointer">
                Check Out
              </button>

              <div className="flex justify-center gap-4 mt-8">
                <img src={Visa} alt="Visa" className="h-9" />
                <img src={Apple} alt="Apple Pay" className="h-7 mt-1" />
                <img src={Master} alt="Mastercard" className="h-9" />
                <img src={Paypal} alt="PayPal" className="h-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

  `;

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl  rounded-2xl border-[0.2px] dark:text-white dark:bg-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Cart</h1>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-6 dark:bg-white/20 ">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <img
                      src={Chokko1}
                      alt="Cat food"
                      className="rounded-md w-full h-full object-cover "
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-medium">Cat Cloth</h2>
                      <span className="text-2xl font-medium">
                        ${productPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 ">
                      <p className="text-gray-700 dark:text-white">
                        Color : <span className="font-medium">Black</span>
                      </p>
                      <p className="text-gray-700 dark:text-white">
                        Size : <span className="font-medium">L</span>
                      </p>
                      <p className="text-gray-700 dark:text-white">
                        Material : <span className="font-medium">Cotton</span>
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={decrementQuantity}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer dark:bg-white/20 dark:text-white"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 border-x">{quantity}</span>
                        <button
                          onClick={incrementQuantity}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer dark:bg-white/20 dark:text-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button className="text-red-500 hover:text-red-700 cursor-pointer">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 ">
              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-4 flex items-center gap-3 dark:bg-white/20">
                <div className="bg-gray-100 p-2 rounded-full ">
                  <Tag className="text-gray-700" size={20} />
                </div>
                <span className="font-medium">35% on Selected Styles</span>
              </div>

              <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-4 flex items-center gap-3 dark:bg-white/20">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Truck className="text-gray-700" size={20} />
                </div>
                <span className="font-medium">Free Shipping for Members</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 ">
            <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

            <div className="bg-white rounded-lg border-[0.2px] shadow-sm p-6 dark:bg-white/20">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-white">
                    Subtotal:
                  </span>
                  <span className="font-medium">
                    ${(productPrice * quantity).toLocaleString()}.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-white">
                    Delivery:
                  </span>
                  <span className="font-medium">${deliveryFee}.00</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-white">Tax:</span>
                  <span className="font-medium">${tax}</span>
                </div>

                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium dark:text-white">
                      Total:
                    </span>
                    <span className="font-bold">
                      ${total.toLocaleString()}.00
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-green-800 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium cursor-pointer">
                Check Out
              </button>

              <div className="flex justify-center gap-4 mt-8 dark:invert ">
                <img src={Visa} alt="Visa" className="h-9 rounded-lg" />
                <img
                  src={Apple}
                  alt="Apple Pay"
                  className="h-7 mt-1 rounded-lg"
                />
                <img src={Master} alt="Mastercard" className="h-9 rounded-lg" />
                <img src={Paypal} alt="PayPal" className="h-9 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeModal codeString={code} />
    </>
  );
};

export default ShoppingCart;
