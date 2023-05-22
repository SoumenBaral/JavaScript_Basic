function woodNeeded(chair,table,bed) {
    const chair_wood_needed = 2;
    const table_wood_needed = 4;
    const bed_wood_needed   = 8;

    const tableWood= table_wood_needed*table;
    const chairWood = chair_wood_needed*chair;
    const bedWood = bed_wood_needed*bed;
    
    const total_Wood = tableWood+chairWood+bedWood;
    return total_Wood;
}
console.log(woodNeeded(1,1,2));