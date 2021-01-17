import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Routes } from '../../../../routes'

import Badge from '../../../../components/Badge/Badge'

const Menu = ({ page }) => {

    let location = useLocation()

    const menuList = [
        {
            name: 'Все',
            path: Routes.type.all,
            badge: '127'
        },
        {
            name: 'Live',
            path: Routes.type.live,
            badge: '2'
        },
        {
            name: 'Завершенные',
            path: Routes.type.completed,
            badge: '57'
        },
        {
            name: 'Запланированные',
            path: Routes.type.planned,
            badge: '73'
        },
        {
            name: 'С прогнозами',
            path: Routes.type.forecast,
        },
        {
            name: 'Лучшие коэффиценты',
            path: Routes.type.best,
        },
    ]

    return (
        <div className="menu">
            <ul className="menu__list">
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index} className="menu__item">
                                <Link
                                    key={index}
                                    to={page + item.path}
                                    className={`menu__link ${page + item.path === location.pathname ? 'menu__link--active' : ''}`}
                                >
                                    {item.name}
                                    {
                                        item.badge &&
                                        <Badge className="badge--menu" caption={item.badge}/>
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Menu
