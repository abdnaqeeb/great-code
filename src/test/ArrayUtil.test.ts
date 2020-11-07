import React from 'react';
import { ArrayUtil } from '../utilities/ArrayUtil'

test('test sortObjects', () => {
    const unsortedObjects = [
        { name: 'ali', tall: 180, age: 35 },
        { name: 'sami', tall: 170, age: 35 },
        { name: 'mohd', tall: 180, age: 25 },
        { name: 'sara', tall: 170, age: 25 },
        { name: 'tom', tall: 160, age: 45 },
        { name: 'jone', tall: 170, age: 15 },
        { name: 'peter', tall: 180, age: 15 },
    ];
    const sortedObjects = [
        { name: 'tom', tall: 160, age: 45 },
        { name: 'jone', tall: 170, age: 15 },
        { name: 'sara', tall: 170, age: 25 },
        { name: 'sami', tall: 170, age: 35 },
        { name: 'peter', tall: 180, age: 15 },
        { name: 'mohd', tall: 180, age: 25 },
        { name: 'ali', tall: 180, age: 35 },
    ];

    let sortObjects = ArrayUtil.sortObjects;

    expect(sortObjects(unsortedObjects, ['tall', 'age'])).toEqual(sortedObjects);
});
