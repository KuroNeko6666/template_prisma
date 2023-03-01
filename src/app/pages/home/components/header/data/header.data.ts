export const HEADER_MENU = [
  {
    name: "Home",
    path: "/",
    icon: "/assets/images/icons/icon1.png",
    collapse: true,
    children: []
  },
  {
    name: "Company",
    path: "/company",
    icon: "/assets/images/icons/icon2.png",
    collapse: true,
    children: [
      {
        name: "Companies",
        path: "/company/companies",
      },
      {
        name: "Companies Profile",
        path: "/company/company-profile",
      },
    ]
  },
  {
    name: "Projects",
    path: "/#",
    icon: "/assets/images/icons/icon3.png",
    collapse: true,
    children: []
  },
  {
    name: "Profile",
    path: "/#",
    icon: "/assets/images/icons/icon4.png",
    collapse: true,
    children: [
      {
        name: "User Profile",
        path: "/#",
      },
      {
        name: "My Profile Feed",
        path: "/#",
      },
    ]
  },
  {
    name: "Jobs",
    path: "/#",
    icon: "/assets/images/icons/icon5.png",
    collapse: true,
    children: []
  },
]
