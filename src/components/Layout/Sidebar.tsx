import { useState } from 'react'
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs'
import { GrPersonalComputer } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";



const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    const Navbar = [
        { title: "Dashboard", spacing: true },
        {
            title: "Almacén", spacing: true,
            submenu: true,
            openMenu: false,
            submenuItems: [
                { title: "Categorías" },
                { title: "Productos" },
                { title: "Compras" },
                { title: "Proveedores" }
            ],
        },
        {
            title: "Administración", spacing: true,
            submenu: true,
            openMenu: false,
            submenuItems: [
                { title: "Ventas" },
                { title: "Clientes" },
                { title: "Trabajadores" },
                { title: "Reportes" },
            ],
        },
        {
            title: 'Restaurante', spacing: true,
            submenu: true,
            openMenu: false,
            submenuItems: [
                { title: "Salón y Mesas" },
                {
                    title: "Carta de Comidas",
                    submenu: true,
                    openMenu: false,
                    submenuItems: [
                        { title: "Carta de Comidas" },
                        { title: "Carta de Menús" }
                    ]
                },
            ],
        },
        {
            title: "Cocina", spacing: true,
            submenu: true,
            openMenu: false,
            submenuItems: [
                { title: "Pedidos" },
                { title: "Sacar productos" }
            ]
        },
        {
            title: "Bar", spacing: true,
            submenu: true,
            openMenu: false,
            submenuItems: [
                { title: "Carta de Tragos" },
                { title: "Pedidos" }
            ]
        }
    ]

    function openMenu(index: number) {
        if (!Navbar[index].openMenu) {
            Navbar[index].openMenu = true
        } else {
            Navbar[index].openMenu = false
        }
    }

    return (
        <div className={`bg-blue-900 h-screen p-5 pt-8
        ${open ? "w-72" : "w-20"} relative duration-300`}>
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
                {Navbar.map((item, index) => (
                    <>
                        <li key={index}
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
                                <BsChevronDown className={`${subMenuOpen && "rotate-180"}`}
                                    onClick={() => { setSubMenuOpen(!subMenuOpen); openMenu(index) }} />
                            )}
                        </li>

                        {
                            item.submenu && item.openMenu && subMenuOpen && open && (
                                <ul>
                                    {item.submenuItems.map((subItem, subIndex) => (
                                        <li key={subIndex}
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