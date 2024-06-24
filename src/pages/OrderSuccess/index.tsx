import checkIcon from "../../assets/icons/checked.svg";

import logo from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";

import downArrowIcon from "../../assets/icons/down-icon.gif";

const OrderSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="bg-slate-100 py-10">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <img className="max-w-[120px]" src={logo} alt="" />
          <NavLink
            to="/"
            className="p-3 text-white rounded bg-amber-500 transition-all ease-linear hover:bg-amber-600"
          >
            হোম পেইজে যান
          </NavLink>
        </div>
        <div className="bg-white relative max-w-[720px] min-h-[60vh] sm:min-h-[80vh] mx-auto my-10 shadow-lg">
          <div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
              <div>
                <img className="w-[100px]" src={checkIcon} alt="" />
              </div>
              <div className="p-10">
                <h4 className="text-2xl text-center">
                  ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।
                </h4>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <img className="" src={downArrowIcon} alt="" />
                </div>
                <p>নিচে স্ক্রল করুন</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[720px] mx-auto border p-5 rounded">
          <h2 className="font-semibold mb-4">Order details</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="text-[15px] text-slate-700">
              <h4 className="mb-1 font-semibold">Contact information</h4>
              <h5>
                Mobile: +88 <span>{state?.contactNo}</span>
              </h5>
              <h5>Email: {state?.email}</h5>
            </div>
            <div className="text-[15px] text-slate-700">
              <h4 className="mb-1 font-semibold">Payment</h4>
              <p>N/A</p>
            </div>
            <div className="text-[15px] text-slate-700">
              <h4 className="mb-1 font-semibold">Shipping address</h4>
              <h5>
                Street: <span>{state?.address?.street}</span>
              </h5>
              <h5>City: {state?.address?.thana}, Dhaka</h5>
            </div>
            <div className="text-[15px] text-slate-700">
              <h4 className="mb-1 font-semibold">Order summary</h4>
              <h5>
                Order ID: #<span>{state?.orderId}</span>
              </h5>
              <h5>
                Order items: <span>{state?.totalOrders}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
