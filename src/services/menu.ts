export interface MenuItem {
  id: string | number;
  name: string;
  path: string;
  children: MenuSubItem[];
}

interface MenuSubItem extends MenuItem {
  category: string;
  icon: string;
  description: string;
}

const mainMenu: MenuItem[] = [
  {
    id: 1,
    name: "about us",
    path: "/about-us",
    children: [],
  },
  {
    id: 2,
    name: "solutions",
    path: "#",
    children: [
      {
        id: 21,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 22,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 23,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 24,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 25,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 26,
        name: "tasks",
        path: "/products/tasks",
        category: "product",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 27,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 28,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 29,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 210,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 211,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
      {
        id: 212,
        name: "tasks",
        path: "/platforms/tasks",
        category: "platform",
        icon: "",
        description: "Break down any sized project into customized tasks",
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
    children: [],
  },
  {
    id: 4,
    name: "Affiliate Program",
    path: "/affiliate-program",
    children: [],
  },
  {
    id: 5,
    name: "find a partner",
    path: "/find-a-partner",
    children: [],
  },
  {
    id: 6,
    name: "become a partner",
    path: "/become-a-partner",
    children: [],
  },
  {
    id: 7,
    name: "contact us",
    path: "/contact-us",
    children: [],
  },
  {
    id: 8,
    name: "blog",
    path: "/blog",
    children: [],
  },
];

/**
 * getMenusByName
 *
 * @param name name: string
 * @returns Promise<MenuItem[]>
 */
export async function getMenusByName(name: string): Promise<MenuItem[]> {
  try {
    return mainMenu;
  } catch (err: any) {
    throw err;
  }
}
