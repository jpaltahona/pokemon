import React from 'react'
import FilterComponen from './FilterComponent';
import TypesPokemon from './typesPokemon';
import { FaFilter } from "react-icons/fa";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <h4>Filtros <FaFilter /></h4>
            <TypesPokemon />
        </div>
    )
}
