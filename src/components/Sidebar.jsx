import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/contants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
            {categories.map((category) => (
                <button
                    key={category.name}
                    type='button'
                    className={`category-btn ${category.name === selectedCategory && 'category-selected'}`}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    <span className={`category-span-1 ${category.name === selectedCategory ? 'selected-span1' : 'unselected-span1'}`}>
                        {<category.icon />}
                    </span>
                    <span className={`${category.name === selectedCategory ? 'selected-span2' : 'unselected-span2'}`}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar