import { FaBox, FaComment, FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const productCategory = [
  { id: 1, titel: "تجهیزات خانگی", image: "/image/aa.jpg" },
  { id: 2, titel: "تجهیزات کافی شاپ", image: "/image/coffeeEquipment.jpg" },
  { id: 3, titel: "اسپرسوساز", image: "/image/espersosaz.png" },
  { id: 4, titel: "قهوه", image: "/image/ghahve.webp" },
  { id: 5, titel: "بار سرد", image: "/image/mohoto.png" },
];

export const productFooterBtn = [
  { id: 1, title: "توضیحات", showMenuValue: "description" },
  { id: 2, title: "توضیحات تکمیلی", showMenuValue: "completDesc" },
  { id: 3, title: "نظرات", showMenuValue: "comments" },
];

export const accountSidebarItem = [
  { id: 1, title: "پیشخوان", href: "/my-account/dashboard" },
  { id: 2, title: "سفارش‌ها", href: "/my-account/orders" },
  { id: 2, title: "نظرات", href: "/my-account/comments" },
  { id: 3, title: "آدرس", href: "/my-account/address" },
];

export const panelMenuItems = [
  {
    icon: (
      <RxDashboard className="ml-1 text-white md:text-lg xs:text-2xl text-lg" />
    ),
    text: "داشبورد",
    href: "/panel/dashboard",
  },
  {
    icon: <FaBox className="ml-1 text-white md:text-lg xs:text-2xl text-lg" />,
    text: "محصولات",
    href: "/panel/products",
  },
  {
    icon: (
      <MdProductionQuantityLimits className="ml-1 text-white md:text-lg xs:text-2xl text-lg" />
    ),
    text: "سفارشات",
    href: "/panel/orders",
  },
  {
    icon: (
      <FaComment className="ml-1 text-white md:text-lg xs:text-2xl text-lg" />
    ),
    text: "کامنت",
    href: "/panel/comments",
  },
  {
    icon: <FaUser className="ml-1 text-white md:text-lg xs:text-2xl text-lg" />,
    text: "کاربران",
    href: "/panel/users",
  },
];
