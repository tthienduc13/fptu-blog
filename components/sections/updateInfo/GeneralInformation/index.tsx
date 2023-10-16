import { Formik, Form } from "formik";
import React from "react";
import { toast } from "react-toastify";
import InputForm from "@/components/InputForm";
import { updateInfoSchema } from "@/app/validation";
import { getCookie } from "cookies-next";
import { updateInfo } from "@/apis/profile";
type updateProfile = {
  first_name: string;
  last_name: string;
  department: string;
  major: string;
};
function GeneralInformation() {
  const onSubmit = async (values: updateProfile, actions: any) => {
    const accessToken = getCookie("accessToken");
    const user_id = getCookie("user_id") as string;
    try {
      if (accessToken) {
        console.log(values);
        const response = await updateInfo(values, user_id);
        console.log(response);
        toast.success("Save information successfully");
      }
    } catch (error) {}
    // toast.success("Save information successfully");
  };
  return (
    <>
      <main className="w-full h-full flex flex-col items-center justify-center ">
        <div className="w-full gap-5 p-[20px] flex flex-col">
          <h1 className="text-2xl font-bold">General Information</h1>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              department: "",
              major: "",
            }}
            validationSchema={updateInfoSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className=" flex justify-between flex-wrap">
                  <div className=" flex mb-4 w-[calc(50%-20px)] flex-col">
                    <div className="text-sm font-medium block leading-5 mb-2">
                      First name:
                    </div>
                    <InputForm
                      label="first_name"
                      name="first_name"
                      type="text"
                      id="first_name"
                      placeholder="Jonh"
                    ></InputForm>
                  </div>
                  <div className=" flex mb-4 w-[calc(50%-20px)] flex-col">
                    <div className="text-sm font-medium block leading-5 mb-2">
                      Last name:
                    </div>
                    <InputForm
                      label="last_name"
                      name="last_name"
                      type="text"
                      id="last_name"
                      placeholder="Doe"
                    ></InputForm>
                  </div>
                  <div className=" flex mb-4 w-[calc(50%-20px)] flex-col">
                    <div className="text-sm font-medium block leading-5 mb-2">
                      Department:
                    </div>
                    <InputForm
                      label="department"
                      name="department"
                      type="text"
                      id="department"
                      placeholder="Software Engineer"
                    ></InputForm>
                  </div>
                  <div className=" flex mb-4 w-[calc(50%-20px)] flex-col">
                    <div className="text-sm font-medium block leading-5 mb-2">
                      Major:
                    </div>
                    <InputForm
                      label="major"
                      name="major"
                      type="text"
                      id="major"
                      placeholder="Software Engineer"
                    ></InputForm>
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className=" bg-[#0065A9] disabled:opacity-50 hover:bg-[#005294] px-6 py-2 font-medium rounded-lg text-white text-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}

export default GeneralInformation;
