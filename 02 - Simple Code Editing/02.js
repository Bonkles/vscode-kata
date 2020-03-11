// 01 - Place  your cursor next to any curly brace '{' or '}'.
// Then use the 'Go to Bracket' command (⇧ ⌘ \) to jump to the matching brace.
function ijustcanteven() {

    for (var i=0; i<10; i++){

        if (i % 2 != 0){
            console.log("I CAN'T EVEN");
        }
    }
  }

// 02 - This code block has a very helpful comment just above it- but
// they used hashtags instead of //.  the 'Toggle Line Comment' command
// (⌘ /) comes to the rescue!
#Quack is a method that quacks.
#Quack quack quack.
function quack() {
    console.log("quack!");
}

// 02b - Commenting an entire code block.
// Since this function is broken, let's comment it with the
// 'Toggle Block Comment' command (⇧+⌥+A).
function commentMeImBroken() {
    //Coach Z says...
    console.lourg("bleh");
    throw new BrokenStuffException;
  }



// 03 - VS Code can expand your selection for you intelligently.
// Place your cursor over the 'console.log' statement, and then
// use the 'Expand Selection' (⌃+⇧+_→) and 'Shrink Selection' (⌃+⇧+←)commands
// to grow/shrink the selection.

function tooNestedForMyOwnGood() {

if (true) {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                        if (true) {
                            if (true) {
                                if (true) {
                                    if (true) {
                                        if (true) {
                                            if (true) {
                                                console.log("truth, brah.");
                                            }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
