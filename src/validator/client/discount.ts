import * as yup from "yup";

export const discountSchema = yup.object().shape({
  code: yup
    .string()
    .required("کد الزامی است")
    .min(2, "حداقل طول کد 2 حرف است")
    .max(20, "حداکثر طول کد 20 حرف است"),
  percent: yup
    .number()
    .required("درصد تخفیف الزامی است")
    .min(1, "حداقل درصد تخفیف 1 است")
    .max(100, "حداکثر درصد تخفیف 100 است"),
  count: yup
    .number()
    .required("تعداد تخفیف الزامی است")
    .min(1, "حداقل تعداد تخفیف 1 است"),
});
