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
    name: "Activities",
    path: "/activities",
    icon: "/assets/images/icons/icon3.png",
    collapse: true,
    children: []
  },
  {
    name: "Profile",
    path: "/profile/",
    icon: "/assets/images/icons/icon4.png",
    collapse: true,
    children: [
      {
        name: "User Profile",
        path: "/profile/all",
      },
      {
        name: "My Profile Feed",
        path: "/profile/feed",
      },
    ]
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: "/assets/images/icons/icon5.png",
    collapse: true,
    children: []
  },
]
