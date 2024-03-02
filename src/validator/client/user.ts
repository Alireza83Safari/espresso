import * as yup from "yup";

export const UserSchema = yup.object({
  firstname: yup
    .string()
    .min(3, "نام باید حداقل 3 کاراکتر باشد")
    .max(30, "نام باید حداکثر 30 کاراکتر باشد")
    .required("نام الزامی است"),
  lastname: yup
    .string()
    .min(3, "نام خانوادگی باید حداقل 3 کاراکتر باشد")
    .max(30, "نام خانوادگی باید حداکثر 30 کاراکتر باشد")
    .required("نام خانوادگی الزامی است"),
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
    .max(30, "نام کاربری باید حداکثر 30 کاراکتر باشد"),
  password: yup.string().required("رمز عبور الزامی است"),
});
