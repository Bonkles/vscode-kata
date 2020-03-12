// Some mac users might need to change the built-in F12 'Show Dashboard'
// setting in MacOS -> System Preferences -> Mission Control for these to work.

// Can't remember what to do for parameters to Sort?
// If you're like me, you're always looking that stuff up.
// click inside the param list to sort and use the
// 'Trigger Parameter Hints' (⌘+⇧+space)

// Want to see the definition of sort()? Click on it, and hit ⌥+f12.
// Want to open that in a new window? ⌘+k f12.

      const oldestInventorFirst = inventors.sort(function(a, b) {
        return b.year > a.year ? -1 : 1;
      });
      console.table(oldestInventorFirst)



    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];