export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Create Task",
        url: "/",
        icon: "home.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Lab Work",
        url: "/lab",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Data Curation",
        url: "/datacuration",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Data Analysis",
        url: "/analysis",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Development",
        url: "/development",
        icon: "order.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};
export const originalData = [
  {
    "_id": "64fed9160a50ec21b030fcf5",
    "proj_id": 1,
    "proj_name": "PROBIO",
  },
  {
    "_id": "64fed9950a50ec21b030fcf6",
    "proj_id": 2,
    "proj_name": "PSFF",
  },
  {
    "_id": "64fed9bc0a50ec21b030fcf7",
    "proj_id": 3,
    "proj_name": "iPCM",
  },
  {
    "_id": "64fed9dd0a50ec21b030fcf8",
    "proj_id": 4,
    "proj_name": "ALASCCA",
  }
];
export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    name:"Johan",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"2",
    description:"hello",
    status:"completed",
  },
  {
    id: 2,
    name:"Venki",
    createdAt:"22.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"1",
    description:"hello",
    status:"completed",
  },
  {
    id: 3,
    name:"Johan",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"3",
    description:"hello",
    status:"completed",
  },
  {
    id: 4,
    name:"Karthick",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"CRCR",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 5,
    name:"Viswaa",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 6,
    createdAt:"2.9.2022",
    name:"Sarath",
    Category:"Labwork",
    project:"CRCR",
    order:"16",
    description:"hello",
    status:"completed",
  },
  {
    id: 7,
    name:"Johan",
    createdAt:"2.8.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 8,
    name:"Sarath",
    createdAt:"2.5.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 9,
    name:"Viswaa",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 10,
    createdAt:"25.3.2022",
    name:"Venki",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 11,
    name:"Johan",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 12,
    name:"Sarath",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"11",
    description:"hello",
    status:"completed",
  },
  {
    id: 13,
    name:"Karthick",    createdAt:"21.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 14,
    name:"Viswaa",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 15,
    name:"Venki",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
];

export const products = [
  {
    id: 1,
    name:"Johan",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"2",
    description:"hello",
    status:"completed",
  },
  {
    id: 2,
    name:"Venki",
    createdAt:"22.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"1",
    description:"hello",
    status:"completed",
  },
  {
    id: 3,
    name:"Johan",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"3",
    description:"hello",
    status:"completed",
  },
  {
    id: 4,
    name:"Karthick",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"CRCR",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 5,
    name:"Viswaa",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 6,
    createdAt:"2.9.2022",
    name:"Sarath",
    Category:"Labwork",
    project:"CRCR",
    order:"16",
    description:"hello",
    status:"completed",
  },
  {
    id: 7,
    name:"Johan",
    createdAt:"2.8.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 8,
    name:"Sarath",
    createdAt:"2.5.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 9,
    name:"Viswaa",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 10,
    createdAt:"25.3.2022",
    name:"Venki",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 11,
    name:"Johan",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 12,
    name:"Sarath",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"11",
    description:"hello",
    status:"completed",
  },
  {
    id: 13,
    name:"Karthick",    createdAt:"21.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 14,
    name:"Viswaa",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 15,
    name:"Venki",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
];

export const analysis = [
  {
    id: 1,
    name:"Johan",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"2",
    description:"hello",
    status:"completed",
  },
  {
    id: 2,
    name:"Venki",
    createdAt:"22.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"1",
    description:"hello",
    status:"completed",
  },
  {
    id: 3,
    name:"Johan",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"3",
    description:"hello",
    status:"completed",
  },
  {
    id: 4,
    name:"Karthick",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"CRCR",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 5,
    name:"Viswaa",
    createdAt:"12.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 6,
    createdAt:"2.9.2022",
    name:"Sarath",
    Category:"Labwork",
    project:"CRCR",
    order:"16",
    description:"hello",
    status:"completed",
  },
  {
    id: 7,
    name:"Johan",
    createdAt:"2.8.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 8,
    name:"Sarath",
    createdAt:"2.5.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 9,
    name:"Viswaa",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 10,
    createdAt:"25.3.2022",
    name:"Venki",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 11,
    name:"Johan",
    createdAt:"23.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 12,
    name:"Sarath",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"11",
    description:"hello",
    status:"completed",
  },
  {
    id: 13,
    name:"Karthick",    createdAt:"21.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 14,
    name:"Viswaa",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
  {
    id: 15,
    name:"Venki",
    createdAt:"2.3.2022",
    Category:"Labwork",
    project:"Probio",
    order:"10",
    description:"hello",
    status:"completed",
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
