import * as yup from "yup";
export const coffeeSchema = yup.object().shape({
  name: yup.string().required("نام الزامی است"),
  seed: yup.string().required("دانه الزامی است"),
  seedType: yup.string().required("نوع دانه الزامی است"),
  caffeine: yup.string().required("کافئین الزامی است"),
  price: yup
    .number()
    .required("قیمت الزامی است")
    .required("شماره را وارد کنید")
    .transform((originalValue) => {
      const parsedValue = parseInt(String(originalValue), 10);
      return isNaN(parsedValue) ? undefined : parsedValue;
    }),
  description: yup.string().required("توضیحات الزامی است"),
});
