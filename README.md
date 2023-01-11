# Battleship project 
### from The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-battleship)

-- [Live preview](https://octavian-sn.github.io/odin-battleship/)

## Built with
- HTML, CSS, JS
- Jest for test

## Project Review

I started out by making the ship module which was rather straightforward and easy, the more difficult part was building around tests made with Jest, and moreover, what tests to create, since this is a TDD project and the concept was rather new, I found it rather confusing at first, but that was about to change quickly.

When I reached the gameboard module, I was beginning to come up with tests to build around much easier. The more code I added to the module and the more complex it became, the more I noticed the practicality and efficiency of TDD, since it would not let the main functionality of the module stray from it's intended path. Simple, basic tests ensured the functionality of evolving complex code.

I was soon bound to discover a major issue thanks to one of my tests. When trying to implement the random ships, I figured I'd need to test hitting a position twice, which in my code should've returned undefined. Lo and behold, the cell was not changing it's content because I was reassigning the variable containing the reference to the gameboard cell.

Moving onwards, after resolving that pesky bug, I created the Player module, which I wasn't sure at first what exactly should it be and contain, since the curriculum didn't refer to it as a factory, as it did with the previous two objects.

Going at it from a pseudocode standpoint, I figured it should be able to do what a normal human would do, attack, observe and keep track of the results, then repeat the process and also, that this object would be needed for the computer. As such I created a Player module, which would create a robot player, that would keep track of it's possible attacks and the recommended attacks based on previous attacks output.