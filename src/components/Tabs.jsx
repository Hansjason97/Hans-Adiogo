import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

function Tabs(props) {

    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState(props.content[0]);

  return (
    <div className='flex flex-col gap-5 md:flex-row'>
        <div role='tablist' className='flex flex-row md:flex-col'>
            { props.content.map((tab, index) =>(
                <button className={ currentTab === props.content[index] ? 'tab-title text-sm bg-secondaryDark text-primary font-mono': 'tab-title text-sm font-mono'} key={index} onClick={()=>setCurrentTab(props.content[index])}>
                    {tab.title}
                </button>
            )) }
        </div>
        <div className='flex flex-col px-5 max-w-lg'>
            <h4>{t(currentTab.role)}
            <a href="" className='customLink ml-2'>@ {currentTab.company}</a></h4>
            <p className='font-mono text-xs mt-1 mb-4'>
                {t(currentTab.date)}
            </p>
            <ul role='list' className='technologies'>
                { currentTab.elements.map((item, index) => (
                    <li className='font-sans text-base' key={index}>{t(item)}</li>
                )) }
            </ul>
        </div>
    </div>
  )
}

export default Tabs