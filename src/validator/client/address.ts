import * as yup from "yup";

const addressSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("نام را وارد کنید")
    .min(2, "حداقل طول نام  باید 1 کاراکتر باشد")
    .max(40, "حداکثر طول نام باید 40 کاراکتر باشد"),
  lastname: yup
    .string()
    .required("نام خانوادگی را وارد کنید")
    .min(2, "حداقل طول نام خانوادگی باید 1 کاراکتر باشد")
    .max(40, "حداکثر طول نام خانوادگی باید 40 کاراکتر باشد"),
  phone: yup
    .number()
    .required("شماره را وارد کنید")
    .transform((originalValue) => {
      const parsedValue = parseInt(String(originalValue), 10);
      return isNaN(parsedValue) ? undefined : parsedValue;
    }),
  plaque: yup
    .number()
    .required("پلاک را وارد کنید")
    .transform((originalValue) => {
      const parsedValue = parseInt(String(originalValue), 10);
      return isNaN(parsedValue) ? undefined : parsedValue;
    }),
  city: yup
    .string()
    .required("شهر را وارد کنید")
    .min(2, "حداقل طول شهر باید 1 کاراکتر باشد")
    .max(20, "حداکثر طول شهر باید 20 کاراکتر باشد"),
  address: yup
    .string()
    .required("آدرس را وارد کنید")
    .min(10, "حداقل طول آدرس باید 10 کاراکتر باشد")
    .max(200, "حداکثر طول آدرس باید200 کاراکتر باشد"),
});

export { addressSchema };
