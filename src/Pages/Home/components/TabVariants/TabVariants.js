import React from 'react'

import {Routes} from '../../../../routes'

import Football from './contents/Football/Football'
import Hockey from './contents/Hockey/Hockey'
import Tennis from './contents/Tennis/Tennis'
import Basketball from './contents/Basketball/Basketball'
import Tab from '../../../../components/Tab/Tab'

import TabMenu from '../../../../components/Tab/components/TabMenu/TabMenu'
import TabPanel from '../../../../components/Tab/components/TabPanel/TabPanel'

import { Football as iconFootball } from './icons/Football'
import { Hockey as iconHockey } from './icons/Hockey'
import { Tennis as iconTennis } from './icons/Tennis'
import { Basketball as iconBasketball } from './icons/Basketball'

import './TabVariants.scss'

const TabVariants = ({ component }) => {

    let tabVariantsList = [
        {
            path: Routes.page.footballIndex,
            className: '',
            icon: iconFootball,
            caption: 'Футбол',
            badge: 127
        },
        {
            path: Routes.page.hockeyIndex,
            className: '',
            icon: iconHockey,
            caption: 'Хоккей',
            badge: 0
        },
        {
            path: Routes.page.tennisIndex,
            className: '',
            icon: iconTennis,
            caption: 'Тенис',
            badge: 1
        },
        {
            path: Routes.page.basketballIndex,
            className: '',
            icon: iconBasketball,
            caption: 'Баскетбол',
            badge: 0
        }
    ]

    const handleSwitchComponent = () => {
        switch (component) {
            case 'football':
                return <Football/>
            case 'hockey':
                return <Hockey/>
            case 'tennis':
                return <Tennis/>
            case 'basketball':
                return <Basketball/>
            default:
                return <Football/>
        }
    }
    
    return (
        <Tab className="tab--variants">
            <TabMenu
                items={tabVariantsList}
                configuration={{
                    badge: true,
                    icon: true
                }}
            />
            <TabPanel>
                {handleSwitchComponent()}
            </TabPanel>
        </Tab>
    )
}

export default TabVariants
