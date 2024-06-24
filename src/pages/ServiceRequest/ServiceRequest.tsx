import { ChangeEvent, useState } from "react";
import JustifyGrid from "../../components/ui/JustifyGrid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { servicesOption } from "../../data";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { NavLink, useNavigate } from "react-router-dom";

import sideBannerImg from "../../assets/images/side-banner.jpg";

const ServiceRequest = () => {
  const [checked, setChecked] = useState(false);
  const [serviceType, setServiceType] = useState<string>("individual");
  const [selectedServices, setSelectedServices] = useState<
    Record<string, string>[] | []
  >([]);
  const [date, setDate] = useState(new Date());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (data: any) => {
    setDate(data);
  };
  const thanas = [
    "আদাবার",
    "বাড্ডা",
    "বিমানবন্দর (ঢাকা)",
    "ক্যান্টনমেন্ট",
    "ধানমন্ডি",
    "গুলশান",
    "হাতিরঝিল",
    "যাত্রাবাড়ী",
    "কলাবাগান",
    "খিলগাঁও",
    "লালবাগ",
    "মিরপুর",
    "মোহাম্মদপুর",
    "মতিঝিল",
    "পল্টন",
    "রামপুরা",
    "শের-ই-বাংলা নগর",
    "তেজগাঁও শিল্প এলাকা",
    "ওয়ারি",
    "অন্যান্য",
  ];

  interface IFormInput {
    firstName: string;
    lastName: string;
    contactNo: string;
    email: string;
    thana: string;
    street: string;
    orderDetails: string;
    orders: string[];
    dateOfService: string;
  }

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      fullName: {
        firstName: data.firstName,
        lastName: data?.lastName,
      },
      contactNo: data.contactNo,
      email: data.email,
      shippingAddress: {
        thana: data.thana,
        street: data.street,
      },
      dateOfService: date,
      orderedServices: selectedServices,
    };

    //reset all values and fields
    reset();
    setSelectedServices([]);
    setDate(new Date());
    fetch("https://server.10fix.com.bd/api/v1/orders/place-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate(
            `/${data?.data?.orderId}/account/orders/${data?.data?._id}`,
            {
              state: {
                orderId: data.data?.orderId,
                address: {
                  street: data.data?.shippingAddress?.street,
                  thana: data.data?.shippingAddress?.thana,
                },
                email: data.data?.email,
                contactNo: data.data?.contactNo,
                totalOrders: data.data?.orderedServices?.length,
              },
            }
          );
        } else {
          if (data.err?.statusCode === 401) {
            toast.error(
              "দুখিত! আপনার একাউন্টটি ব্লক লিস্টে বিদ্যমান। আনব্লক করতে আমাদের সাথে যোগাযোগ করুন।",
              {
                duration: 5000,
              }
            );
          } else {
            toast.error(
              "দুখিত! আপনার অর্ডারটি সাবমিট হয়নি। পুনরায় চেস্টা করুন"
            );
          }
        }
      })
      .catch(() => {
        toast.error("দুখিত! আপনার অর্ডারটি সাবমিট হয়নি। পুনরায় চেস্টা করুন");
      });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <div className="custom-container mt-[150px] mb-10 sm:mb-[100px]">
        <div className="grid grid-cols-3 gap-[50px] items-top">
          <div className="col-span-3 sm:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  আপনি কোন সার্ভিসটি দিতে চাচ্ছেন{" "}
                  <sup className="text-secondary">*</sup>
                </label>
                <Select
                  required={true}
                  onChange={(value) => {
                    setSelectedServices(
                      value.map((item) => ({
                        id: item.id,
                        name: item.value,
                      }))
                    );
                  }}
                  isMulti
                  name="colors"
                  options={servicesOption}
                  className="basic-multi-select text-[14px] bg-none rounded outline-none"
                  placeholder="সার্ভিসটি সিলেক্ট করুন"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  আপনি ধরনের সার্ভিস নিচে চান
                  <sup className="text-secondary">*</sup>
                </label>
                <select
                  onChange={(e) => {
                    setServiceType(e.target.value);
                  }}
                  id="countries"
                  className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                >
                  <option defaultChecked value="individual">
                    ব্যাক্তিগত সার্ভিস
                  </option>
                  <option value="corporate">প্রাতিষ্ঠানিক সার্ভিস</option>
                </select>
              </div>
              {serviceType === "individual" ? (
                <JustifyGrid>
                  <div className="mb-5">
                    <label htmlFor="name" className="text-sm inline-block mb-2">
                      নামের প্রথম অংশ <sup className="text-secondary">*</sup>
                    </label>
                    <input
                      {...register("firstName", {
                        required: true,
                      })}
                      className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                      type="text"
                      placeholder="আপনার নামের প্রথম অংশ লিখুন"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="name" className="text-sm inline-block mb-2">
                      নামের শেষ অংশ
                    </label>
                    <input
                      {...register("lastName")}
                      className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                      type="text"
                      placeholder="আপনার নামের শেষ অংশ লিখুন"
                    />
                  </div>
                </JustifyGrid>
              ) : (
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    প্রতিষ্ঠান নাম <sup className="text-secondary">*</sup>
                  </label>
                  <input
                    {...register("firstName", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                    type="text"
                    placeholder="আপনার প্রতিষ্ঠান নাম লিখুন"
                  />
                </div>
              )}
              <JustifyGrid>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    মোবাইল নাম্বার <sup className="text-secondary">*</sup>
                  </label>
                  <input
                    {...register("contactNo", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                    type="text"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    ইমেইল এড্রেস <sup className="text-secondary">*</sup>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                    type="text"
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
              </JustifyGrid>
              <JustifyGrid>
                <div className="mb-5">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    আপনি কবে সার্ভিস দিতে চাচ্ছেন
                    <sup className="text-secondary">*</sup>
                  </label>

                  <DatePicker
                    wrapperClassName="w-full"
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                    selected={date}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    আপনার জেলা নির্বাচন করুন
                  </label>
                  <select
                    disabled
                    id="countries"
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                  >
                    <option defaultChecked>ঢাকা</option>
                  </select>
                </div>
              </JustifyGrid>
              <JustifyGrid>
                <div className="mb-5">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    আপনার ঠিকানা প্রদান করুন
                    <sup className="text-secondary">*</sup>
                  </label>
                  <input
                    {...register("street", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                    type="text"
                    placeholder="ঠিকানা লিখুন"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    আপনার থানা নির্বাচন করুন
                    <sup className="text-secondary">*</sup>
                  </label>
                  <select
                    {...register("thana", {
                      required: true,
                    })}
                    id="countries"
                    className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none"
                  >
                    <option defaultChecked>থানা সিলেক্ট করুন</option>
                    {thanas.map((thana) => (
                      <option value={thana} key={thana}>
                        {thana}
                      </option>
                    ))}
                  </select>
                </div>
              </JustifyGrid>
              <div className="mb-5">
                <label htmlFor="name" className="text-sm inline-block mb-2">
                  আপনার ডিভাইসের বিস্তারিত
                  <sup className="text-secondary px-1">*</sup>
                </label>
                <textarea
                  {...register("orderDetails", {
                    required: true,
                  })}
                  className="block w-full p-3 text-[14px] bg-none rounded border-2 border-tertiary outline-none min-h-[120px]"
                  placeholder="বিস্তারিত লিখুন"
                />
                <small className="inline-block px-3 py-2 text-[12px] text-[#0000FF] ">
                  * ডিভাইসের নাম, মডেল ইত্যাদি ও সমস্যা সহ বিস্তারিত লিখুন
                </small>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <input
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <NavLink
                      to="/terms-and-condition"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </NavLink>
                    .
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <button
                  disabled={!checked}
                  className={`bg-secondary text-white px-10 py-3 rounded text-sm ${
                    checked ? "opacity-100" : "opacity-65"
                  }`}
                >
                  মেসেজ পাঠান
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div>
              <img className="w-full" src={sideBannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRequest;
