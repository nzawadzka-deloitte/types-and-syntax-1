describe('unit testing - types and syntax - 1', () => {
    test('defines a dummy test', () => {
        expect(true).toBe(true);
    });

    test('defines primitive types precisely', () => {
        expect(typeof 2021).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof "2021").toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof true).toEqual( /* YOUR ANSWER HERE */ );
        let activity = "Bootcamp";
        expect(typeof activity).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof activity.length).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('defines numbers precisely', () => {
        // The Number.isInteger() method checks if the number is an integer value

        // The toString() method converts a number into a string

        let amount = 19.95;

        expect(amount).toBeGreaterThan( /* YOUR ANSWER HERE */ );
        expect(amount).toBeLessThan( /* YOUR ANSWER HERE */ );

        expect(Number.isInteger(amount)).toEqual( /* YOUR ANSWER HERE */ );

        expect(amount.toFixed(1)).toEqual( /* YOUR ANSWER HERE */ );
        expect(amount.toFixed()).toEqual( /* YOUR ANSWER HERE */ );

        expect(amount.toString()).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('converting to number types', () => {
        // The Number() method converts JavaScript variables into numbers
        let amount = 19.95,
            stringAmount = "19.95";

        expect(Number(stringAmount)).toEqual( /* YOUR ANSWER HERE */ );
        expect(Number(true)).toEqual( /* YOUR ANSWER HERE */ );
        expect(Number(false)).toEqual( /* YOUR ANSWER HERE */ );

        expect(parseInt(amount)).toEqual( /* YOUR ANSWER HERE */ );
        expect(parseInt(stringAmount)).toEqual( /* YOUR ANSWER HERE */ );

        expect(parseFloat(amount)).toEqual( /* YOUR ANSWER HERE */ );
        expect(parseFloat(stringAmount)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('defines strings precisely', () => {
        // The toLowerCase() method converts a string into lower case characters

        // The toUpperCase() method converts a string into upper case characters

        // The charAt() method returns the char at a given position (index)

        // The substring() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the ending index (position).'

        let name = "Zakk Wylde";

        expect(name.length).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.toLowerCase()).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.charAt(5)).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.substring(0,4)).toEqual( /* YOUR ANSWER HERE */ );

        // chaining methods

        expect(name.toLowerCase().substring(0,4)).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.toUpperCase().substring(1,2)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('finding substrings in a string', () => {
        // The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

        // The search() method searches a string for a specified value and returns the position of the match.

        // The slice() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the ending index (position).'

        // The substr() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the length of the desires substring (number).

        let name = "Zakk Wylde";

        expect(name.indexOf("Wylde")).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.search("Zakk")).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.slice(5,10)).toEqual( /* YOUR ANSWER HERE */ );
        expect(name.substr(0,4)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('manipulating strings', () => {
        // The replace() method replaces a specified value with another value in a string.

        // The concat() method joins two or more strings.

        // The trim() method removes whitespace from both sides of a string.

        // The split() method converts a string into an array.
        // The method takes one parameter: the separator. eg.:
        // let text = "My String";
        // text.split(" "); // Split by space, returns: ["My", "String"];
        // text.split(""); // Split by empty string, returns: ["M", "y", " ", "S", "t", "r", "i", "n", "g"];

        let name = "John Lennon",
            firstName = "Johnny",
            secondName = "Cash",
            reallyMessyText = "   Some really messy text     ",
            ringOfFire = "And it burns, burns, burns - the ring of fire, the ring of fire.";

        expect(name.replace("Lennon", "R. Cash")).toEqual( /* YOUR ANSWER HERE */ );
        expect(firstName.concat(" ", secondName)).toEqual( /* YOUR ANSWER HERE */ );
        expect(reallyMessyText.trim()).toEqual( /* YOUR ANSWER HERE */ );
        expect(ringOfFire.split(",")[2].trim()).toEqual( /* YOUR ANSWER HERE */ );
        expect(ringOfFire.split("-")[1].trim()).toEqual( /* YOUR ANSWER HERE */ );
        expect(ringOfFire.split(" ")[0].trim()).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('defines arrays precisely', () => {
        let cars = ["Saab", "Volvo", "BMW"],
            instances = [
                cars instanceof String,
                cars instanceof Number,
                cars instanceof Boolean,
                cars instanceof Symbol,
                cars instanceof Array,
                cars instanceof Object,
                cars instanceof Function
            ];

        expect(cars.length).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars[2]).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars.indexOf("Volvo")).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof cars).toEqual( /* YOUR ANSWER HERE */ );
        expect(Array.isArray(cars)).toEqual( /* YOUR ANSWER HERE */ );

        /* SWAP THE INDEX 99 TO THE CORRECT VALUE */
        expect(instances[99]).toEqual(true);
    });

    test('array manipulations', () => {
        // The push() method adds an element as the last element of the array

        // The unshift() method adds an element as the first element of the array

        // The pop() method removes the last element of an array

        // The shift() method removes the first element of an array

        // The includes() method checks if an element exists in the array and returns true or false

        // The indexOf() method returns the index of a given element. If the element is not found, it returns -1

        // The join() method joins all array elements (separated with a comma) into a string.

        let cars = ["Saab", "Volvo", "BMW"];

        cars.push("Audi");
        cars.unshift("Porsche");
        expect(cars.length).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars.indexOf("Audi")).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars.indexOf("Porsche")).toEqual( /* YOUR ANSWER HERE */ );

        cars[1] = "Ferrari";

        expect(cars.includes("Ferrari")).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars.includes("Saab")).toEqual( /* YOUR ANSWER HERE */ );
        expect(cars.indexOf("Saab")).toEqual( /* YOUR ANSWER HERE */ );

        // easy way for checking the last element of an array: Array.length - 1
        cars.pop();
        expect(cars[cars.length - 1]).toEqual( /* YOUR ANSWER HERE */ );

        cars.shift();
        expect(cars[0]).toEqual( /* YOUR ANSWER HERE */ );

        expect(cars.join()).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('advanced array manipulations', () => {
        // The reverse() method reverses the order of the elements in an array

        // The sort() method sorts the items of an array
        // By default, the sort() method sorts the values as strings in alphabetical and ascending order.
        // This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
        // Because of this, the sort() method will produce an incorrect result when sorting numbers.
        // You can fix this by providing a "compare function".

        let reverseCompareFunction = function(a, b){
            /* ... */
        }

        // A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
        // function(a, b){return a-b}
        // When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

        // Example:

        // When comparing 40 and 100, the sort() method calls the compare function(40,100).
        // The function calculates 40-100, and returns -60 (a negative value).
        // The sort function will sort 40 as a value lower than 100.

        let cars = ["Saab", "Volvo", "BMW", "Audi", "Porsche"],
            stringNumbers  = ["25", 8, "100", 10, 25, "42", "8"];


        expect(cars.indexOf("BMW")).toEqual( /* YOUR ANSWER HERE */ );

        cars.sort();
        expect(cars.indexOf("BMW")).toEqual( /* YOUR ANSWER HERE */ );

        cars.reverse();
        expect(cars.indexOf("BMW")).toEqual( /* YOUR ANSWER HERE */ );

        stringNumbers.sort(reverseCompareFunction);
        expect(stringNumbers.indexOf("8")).toEqual(6);
        expect(stringNumbers.indexOf("25")).toEqual(2);
        expect(stringNumbers.indexOf(25)).toEqual(3);
    });

    test('working with maps', () => {
        let myMap = new Map();
        myMap.set("a", /* YOUR ANSWER HERE */ );
        myMap.set("b", /* YOUR ANSWER HERE */ );
        myMap.set("c", /* YOUR ANSWER HERE */ );

        expect(myMap.get("a")).toEqual("Hello world");
        expect(myMap.get("b")).toEqual({ hello: "world" });
        expect(myMap.get("c")).toEqual(123);
        expect(myMap.size).toEqual( /* YOUR ANSWER HERE */ );

        myMap.delete("c");
        expect(myMap.size).toEqual( /* YOUR ANSWER HERE */ );
    });
})
