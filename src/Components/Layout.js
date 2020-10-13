import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
export default function LayoutComponent() {
    return (
        <>
            <Header />
            <div className="conten-layout">
                <Sidebar />
                <div className="conten-info">
                    <Content />
                </div>
            </div>
        </>
    )
}
