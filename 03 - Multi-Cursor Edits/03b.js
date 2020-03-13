//3b part 1 -  rename all instances of myVar with a double-click,
//then use the 'Add Selection To Next Find Match' (⌘+d) to select them one at a time.
//You can also use (⌘+⇧+L) to select them all at once.
function refactorMeh(){
    var myVar = myVarFromFactoryMethod();
    myVar++;
    myVar--;
    return myVar;
}

//3b Part 2 - use the built-in refactoring (F2).
function refactorMeh(){
    var myVar = myVarFromFactoryMethod();
    myVar++;
    myVar--;
    return myVar;
}

// 3b Part 3 - Say that these library method calls
// were refactored to no longer have a prefix of '_lb'.
// You could just rename them individually one by one.
// In this case, let's practice selecting with ⌘+d, and
// a selection with (⌘+k ⌘+d).

// Use the 'Keyboard Shortcuts' in the VSCode settings
// and click the ⌨︎ to test out your keyboard skillz.
function computeContestWinner(){
    var lb_db_results = lb_getResultFromDB();
    var lb_web_results = lb_getResultFromWeb();
    var lb_user_results = lb_getResultFromUser();

    lb_computeSomething(lb_db_results, lb_web_results, lb_user_results);
}
