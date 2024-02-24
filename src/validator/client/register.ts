import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "حداقل طول نام کاربری باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول نام کاربری باید 40 کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  firstname: Yup.string()
    .min(2, "حداقل طول نام باید 2 کاراکتر باشد")
    .max(20, "حداکثر طول نام باید 20 کاراکتر باشد")
    .required("نام الزامی است"),
  lastname: Yup.string()
    .min(3, "حداقل طول نام خانوادگی باید 3 کاراکتر باشد")
    .max(20, "حداکثر طول نام خانوادگی باید 20 کاراکتر باشد")
    .required("نام خانوادگی الزامی است"),
  password: Yup.string()
    .matches(
      /^[A-Za-z]{2}@\d{6}$/,
      "رمزعبور باید شامل حروف بزرگ، حروف کوچک، عدد و نماد باشد و طول آن بین 8 تا 20 کاراکتر باشد"
    )
    .required("رمزعبور الزامی است"),
});

export { registerSchema };
