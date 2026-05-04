"use client";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(
      /^[567]\d{8}$/,
      "Phone number must be 9 digits and start with 5, 6, or 7",
    )
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function WorkForm() {
  const [submitError, setSubmitError] = useState(false);
  const [serverResponseStatus, setServerResponseStatus] = useState<
    "error" | "success" | false
  >(false);
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      setSubmitError(false);

      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          phone: `+213${values.phone}`,
        }),
      });

      if (!response.ok) return setServerResponseStatus("error");

      setServerResponseStatus("success");
      resetForm();
    } catch (error) {
      setSubmitError(true);
      setServerResponseStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-30"
    >
      <div className="mx-auto mb-6 max-w-[35rem] lg:mx-0">
        <h1 className="text-center text-5xl font-bold leading-tight md:text-start md:text-8xl">
          <span className="whitespace-nowrap">LET&apos;S WORK</span>
          <br />
          <span className="text-gray-700">TOGETHER</span>
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-2 gap-6 gap-y-4 pt-8">
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs text-gray-400">Name</label>
                <Field
                  name="name"
                  placeholder="Your Name"
                  className="mt-2 w-full rounded-lg bg-gray-700 p-2 text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-xs text-gray-400">Phone Number</label>
                <div className="mt-2 flex w-full items-center gap-1 rounded-lg bg-gray-700 p-2 text-sm">
                  <span>+213</span>
                  <Field
                    name="phone"
                    type="number"
                    placeholder="x xx xx xx xx"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs text-gray-400">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-lg bg-gray-700 p-2 text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs text-gray-400">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="mt-2 min-h-32 w-full rounded-lg bg-gray-700 p-2 text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`col-span-2 mt-2 w-full rounded-lg bg-red-700 p-2 text-sm transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {isSubmitting
                  ? "Sending..."
                  : serverResponseStatus === "error"
                    ? "something went wrong !! ⚠"
                    : serverResponseStatus === "success"
                      ? "Submitted ✓"
                      : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </motion.section>
  );
}
