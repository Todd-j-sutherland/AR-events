# Project overview

- The main goal of this application is to implement the provided design in a consistent and responsive way.
- I exported assets from Sketch such as the card's image and icon.
- I went through and gathered the required colours as well as the font sizes and weights.
- when it came to the spacing I used the provided design and calculated the spacing between the elements, which I attempted to match as closely as possible.
- each card has a clickable menu button that opens a dropdown menu with options.
- I found that aligning the cards in the centre of the page was a good approach though it does have it drawbacks which I had to add a manual override for the last card.
- The page is responsive and works well on mobile devices.

## Extra features

- The page shows a loading spinner while the data is being fetched (mocked data).
- if there's an error fetching the data a message is displayed to the user.
- input field filters cards
- can create a new card via a create button which opens a modal with a form.
- unit tests and E2E tests are included.

## Technologies used

Vue.js, HTML, CSS, JavaScript
I didn't see the need to use VUEX or VUE router as the application is quite simple and doesn't require any state management or routing.

## Improvements

- I would have liked to add a feature that allows the user to edit the card's details.
- I would have liked to add a feature that allows the user to delete a card.
- I would have liked to add a feature that allows the user to reorder/sort the cards.
- View the card's details in a separate page.

## How to run the project

```
npm install
npm run dev
npm run test:unit
npm run test:e2e
```
