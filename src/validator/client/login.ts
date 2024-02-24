import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "حداقل طول نام کاربری باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول نام کاربری باید 40 کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(8, "حداقل طول رمزعبور باید 8 کاراکتر باشد")
    .max(20, "حداکثر طول رمزعبور باید 20 کاراکتر باشد")
    .required("رمزعبور الزامی است"),
});

export { loginSchema };
