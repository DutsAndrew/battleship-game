# battleship-game

<strong>Preview</strong>

![BattleShip (2)](https://user-images.githubusercontent.com/94728848/187804572-280deffa-c3c7-4d6a-a07b-8447c3a7645d.gif)

<strong>How To:</strong>

1. Click Start Game
2. Drag and Drop your boats onto your gameboard, if you want to boats to be placed horizontally instead of vertically; click the change-axis button at the bottom of the screen.
3. After all boats have been placed, the computer will generate it's board.
4. Once the enemy board has appeared click any cell on the opponents board to make an attack, if the attacked cell turns red it indicates a hit. White represents a miss, when you or the computer have sunk a ship the red will change to a darker more maroon red.
5. Reset game on win or when you want to start over.

<strong>What I learned creating this project:</strong>

1. How to drag and drop - more or less this was a relatively easy method to apply. I struggled for a bit to get styling to work correctly when dragging and dropping, but had a lot of fun overall playing with dragenter, dragleave, dragover, and drop.

2. Working with lengthier code - up to this point, this has been the most complex program I've written. The code I wrote in the start-game file was easy to get lost in. But overall, I tried my best to organize it in the way the program flowed and to keep it all as clean as possible.

3. bug handling - this project was my first attempt at using jest and learning TDD (testing) when it comes to building. Without it, I think this project would've been much more difficult. Since creating this app, I've incorporated jest in everything I'm building, it makes spinning something up in code a lot faster instead of console.log()'ing the crap out of everything.

<strong> What I would improve:</strong>

1. Going back I would primarily focus on cleaning up the start-game file. I think it's leaning more on the 'spaghetti code' side of cleanliness; despite their being an obvious flow to it. I think chunking the file it's self into: 1) board creation, 2) adding eventlisteners, 3) drag/drop file, 4) computer generation systems; and connecting it all back to the index file would've been a much wiser choice to begin with.
