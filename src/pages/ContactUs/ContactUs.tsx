import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IFormInput {
  fullName: string;
  email: string;
  contactNo: string;
  message: string;
}

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const toastId = toast.loading("আপনার মেসেজটি পাঠানো হচ্ছে!");
    fetch("https://10fix.vercel.app/api/v1/messages/sent-customer-email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("আপনার মেসেজটি পাঠানো হয়েছে!", { id: toastId });

          //reset fields
          reset();
        } else {
          toast.error("দুখিত! আপনার মেসেজটি পাঠানো যায়নি! পুনরায় চেস্টা করুন", {
            id: toastId,
          });
        }
      })
      .catch(() => {
        toast.error("দুখিত! আপনার মেসেজটি পাঠানো যায়নি! পুনরায় চেস্টা করুন", {
          id: toastId,
        });
      });
  };

  return (
    <section className="mb-32">
      <div
        id="map"
        className="relative h-[80vh] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4283290677986!2d90.37124534122287!3d23.803363210822695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d373ff897d%3A0x3d95c53d3069ff25!2s329%20Senpara%20Parbata%20Ln%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1715054456509!5m2!1sen!2sbd"
          width="100%"
          height={480}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="custom-container">
        <div className="mx-0 sm:mx-14 block rounded-lg bg-[#aaaaaa81] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
            <div className="">
              <h3 className="text-2xl font-medium mb-8">আপনার মেসেজ পাঠান</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    আপনার নাম <sup className="text-secondary">*</sup>
                  </label>
                  <input
                    {...register("fullName", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-1 border-tertiary outline-none"
                    type="text"
                    placeholder="আপনার নাম লিখুন"
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
                    className="block w-full p-3 text-[14px] bg-none rounded border-1 border-tertiary outline-none"
                    type="text"
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    মোবাইল নাম্বার
                  </label>
                  <input
                    {...register("contactNo", {
                      required: false,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-1 border-tertiary outline-none"
                    type="text"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm inline-block mb-2">
                    মেসেজ <sup className="text-secondary">*</sup>
                  </label>
                  <textarea
                    {...register("message", {
                      required: true,
                    })}
                    className="block w-full p-3 text-[14px] bg-none rounded border-1 border-tertiary outline-none min-h-[120px]"
                    placeholder="আপনার মেসেজ লিখুন"
                  />
                </div>
                <div className="mb-5">
                  <button className="bg-secondary text-white px-10 py-3 rounded text-sm">
                    মেসেজ পাঠান
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full sm:w-[60%] mx-auto">
              <h3 className="text-2xl font-medium mb-8">ঠিকানা</h3>
              <p className="mb-4 text-[15px]">
                ৩২৯ সেনপাড়া পর্বতা, মিরপুর ১০, ঢাকা-১২১৬
              </p>
              <div className="flex gap-2 items-start mb-4 text-[15px]">
                <p>ইমেইলঃ</p>
                <div>
                  <p>support@10fix.com.bd</p>
                  <p>10fixbangladesh@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 items-start mb-4 text-[15px]">
                <p>মোবাইলঃ</p>
                <div>
                  <p>01605980299</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
