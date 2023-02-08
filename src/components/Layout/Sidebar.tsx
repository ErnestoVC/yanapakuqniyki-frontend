import { useState } from 'react'
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs'
import { GrPersonalComputer } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = [
    {
        id: 1,
        title: "Dashboard",
        spacing: true,
        submenu: false,
        openMenu: false,
        submenuItems: []
    },
    {
        id: 2,
        title: "Almacén",
        spacing: true,
        submenu: true,
        openMenu: false,
        submenuItems: [
            {
                title: "Categorías",
                id: 7,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Productos",
                id: 8,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Compras",
                id: 9,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Proveedores",
                id: 10,
                submenu: false,
                openMenu: false,
                submenuItems: []
            }
        ],
    },
    {
        id: 3,
        title: "Administración", spacing: true,
        submenu: true,
        openMenu: false,
        submenuItems: [
            {
                title: "Ventas",
                id: 11,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Clientes",
                id: 12,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Trabajadores",
                id: 13,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Reportes",
                id: 14,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
        ],
    },
    {
        id: 4,
        title: 'Restaurante', spacing: true,
        submenu: true,
        openMenu: false,
        submenuItems: [
            {
                title: "Salón y Mesas",
                id: 15,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                id: 16,
                title: "Carta de Comidas",
                submenu: true,
                openMenu: false,
                submenuItems: [
                    {
                        title: "Carta de Comidas",
                        id: 21,
                        submenu: false,
                        openMenu: false,
                        submenuItems: []
                    },
                    {
                        title: "Carta de Menús",
                        id: 22,
                        submenu: false,
                        openMenu: false,
                        submenuItems: []
                    }
                ]
            },
        ],
    },
    {
        id: 5,
        title: "Cocina", spacing: true,
        submenu: true,
        openMenu: false,
        submenuItems: [
            {
                title: "Pedidos",
                id: 17,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Sacar productos",
                id: 18,
                submenu: false,
                openMenu: false,
                submenuItems: []
            }
        ]
    },
    {
        id: 6,
        title: "Bar", spacing: true,
        submenu: true,
        openMenu: false,
        submenuItems: [
            {
                title: "Carta de Tragos",
                id: 19,
                submenu: false,
                openMenu: false,
                submenuItems: []
            },
            {
                title: "Pedidos",
                id: 20,
                submenu: false,
                openMenu: false,
                submenuItems: []
            }
        ]
    }
]

const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const [navBar, setNavBar] = useState(Navbar)

    const openSubeMenuClick = (index: number) => {

        const updatedObjet = navBar.map((item, i) => {
            if (item.id === index) {
                return { ...item, openMenu: !item.openMenu }
            }
            return item
        })

        setNavBar(updatedObjet)

    };


    return (
        <div className={`bg-blue-900 p-5 pt-8
        ${open ? "w-72 h-ful duration-300" : "w-20 h-screen duration-300"} relative duration-300`}>
            <BsArrowLeftShort className={`bg-white text-blue-900
            text-3xl rounded-full absolute 
            ${open ? "left-[270px]" : "left-[60px] rotate-180"} 
            top-8 border border-blue-900 cursor-pointer duration-300`}
                onClick={() => setOpen(!open)} />
            <div className='inline-flex'>
                <GrPersonalComputer className={`bg-blue-900 text-gray-500 
                text-4xl rounded cursor-pointer block float-left mr-2 duration-500 
                    ${!open && "rotate-[360deg]"}`} />
                <h1 className={`text-white origin-left font-medium text-2xl 
                    ${!open && "scale-0"}`}>
                    Yanapakuqniyki
                </h1>
            </div>
            <ul className='pt-2'>
                {navBar.map(item => (
                    <>
                        <li key={item.id}
                            className={`text-white text-sm flex items-center
                            gap-x-4 cursor-pointer p-2 hover:bg-sky-500 rounded-md
                            ${item.spacing ? "mt-9" : "mt-2"}
                        `}>
                            <span className='text-2xl block float-left'>
                                <RiDashboardFill />
                            </span>
                            <span className={`text-base font-medium flex-1
                            duration-200 ${!open && "hidden"}`}>
                                {item.title}
                            </span>
                            {item.submenu && open && (
                                <BsChevronDown className={`${item.openMenu && "rotate-180"}`}
                                    onClick={() => { openSubeMenuClick(item.id) }} />
                            )}
                        </li>

                        {
                            item.submenu && item.openMenu && open && (
                                <ul>
                                    {item.submenuItems.map(subItem => (
                                        <li key={subItem.id}
                                            className='text-white text-sm flex items-center gap-x-4 
                                        cursor-pointer p-2 px-5 hover:bg-sky-500 rounded-md'
                                        >
                                            {subItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;