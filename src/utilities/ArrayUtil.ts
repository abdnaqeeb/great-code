export class ArrayUtil {
    public static sortObjects(arrayOfObjects: any[], _sortingFields: string[]): any[] {
        // if the array of objects is empty, then return it
        if (arrayOfObjects.length === 0) {
            return [...arrayOfObjects];
        }

        let allFields = Object.keys(arrayOfObjects[0]);

        // if the object is empty, then return the same array
        if (allFields.length === 0) {
            return [...arrayOfObjects];
        }

        // filer only the sorting fields that matching the properties of the objects
        _sortingFields = _sortingFields.filter(f => allFields.some(i => f === i));

        // if there is no sorting fields, then return the same objects array in the same order
        if (_sortingFields.length === 0) {
            return [...arrayOfObjects];
        }

        // note: at this point we are sure that the array contains at least one none empty object
        //       and there is one or more of applicable sorting fields, so we can proceed to the 
        //       main sorting functionality

        // shallow coloning of the array of objects
        let sortedObjects = [...arrayOfObjects];

        // define the comparison function to use in sorting
        let compare = (a: any, b: any) => a < b ? -1 : 1;

        // now we can sort the objects array using the compare function and the sorting fields
        sortedObjects.sort((a, b) => {
            let comparison = 0;

            let comparisonList = _sortingFields.map(f => compare(a[f], b[f]));

            comparisonList.some(i => {
                comparison = i;
                return comparison !== 0;
            });

            return comparison;
        });

        return sortedObjects;
    }
}