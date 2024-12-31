import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl ">
          <h2 className="text-4xl font-semibold text-center text-backgroundColor ">
            Book Now
          </h2>
          <div className="flex flex-col ">
            <input
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              className="px-3 py-2 bg-[#d5f2ec] rounded-lg "
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="your Email"
              className="px-3 py-2 bg-[#d5f2ec] rounded-lg "
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              className="px-3 py-2 bg-[#d5f2ec] rounded-lg "
            />
          </div>
          <div className="flex gap-5">
            <Button title="Book Appointment" />
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500  "
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
