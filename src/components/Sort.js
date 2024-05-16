import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
    
    function SortDropdown({ onSelect }) {
        const sortingOptions = [
            "Title",
            "Name",
            "Type of Project",
            "Major",
            "Year",
            "Date Posted"
        ];

    
        const handleSelect = (event) => {
            const selectedType = event.target.textContent;
           onSelect(selectedType);
        };

        const itemElements = sortingOptions.map((item) => {
            return (
                <Dropdown.Item key={item} onClick={handleSelect}>{item}</Dropdown.Item>
            );
        });


        return (
            <Dropdown>
                <Dropdown.Toggle className = "sorted-dropdown">
                  Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {itemElements}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    export default SortDropdown;