/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.css */ \"./src/stylesheets/style.css\");\n/* harmony import */ var _scripts_start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/start-game */ \"./src/scripts/start-game.js\");\n\n\n\n\n\nwindow.onload = function () {\n  (0,_scripts_start_game__WEBPACK_IMPORTED_MODULE_1__.createGameBoards)();\n};\n\n(function attachMenuEventListeners() {\n  const startGame = document.querySelector('#start-game');\n  startGame.addEventListener('click', _scripts_start_game__WEBPACK_IMPORTED_MODULE_1__.startGameButton);\n  const resetGame = document.querySelector('#reset-game');\n  resetGame.addEventListener('click', _scripts_start_game__WEBPACK_IMPORTED_MODULE_1__.resetGameButton);\n})();\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/scripts/start-game.js":
/*!***********************************!*\
  !*** ./src/scripts/start-game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameBoards\": () => (/* binding */ createGameBoards),\n/* harmony export */   \"resetGameButton\": () => (/* binding */ resetGameButton),\n/* harmony export */   \"startGameButton\": () => (/* binding */ startGameButton)\n/* harmony export */ });\n\n\nfunction createGameBoards() {\n  const gameBoard = document.querySelector('#game-board');\n  const playerOneBoard = document.querySelector('#player-one-board');\n  const computerBoard = document.querySelector('#computer-board');\n  const createPlayerOneBoard = createGameBoardCells('player', playerOneBoard);\n  const createComputerBoard = createGameBoardCells('computer', computerBoard);\n  gameBoard.classList.add('game-board-hidden');\n  return {\n    createPlayerOneBoard,\n    createComputerBoard\n  };\n}\n\nfunction createGameBoardCells(player, playerBoard) {\n  const boardSize = 10;\n  let cellCount = counter();\n  let rowCount = counter();\n\n  for (let row = 0; row < boardSize; row++) {\n    const boardRow = document.createElement('div');\n    boardRow.classList.add(\"game-board-row\");\n    boardRow.setAttribute('id', \"row-\".concat(rowCount()));\n\n    for (let cell = 0; cell < boardSize; cell++) {\n      const boardCell = document.createElement('div');\n      boardCell.classList.add('game-board-cell');\n      boardCell.setAttribute('id', \"\".concat(player, \"-\").concat(cellCount()));\n      boardRow.appendChild(boardCell);\n    }\n\n    playerBoard.appendChild(boardRow);\n  }\n}\n\nfunction counter() {\n  let counter = 0;\n\n  function increaseCounter() {\n    return counter += 1;\n  }\n\n  return increaseCounter;\n}\n\nfunction startGameButton() {\n  const computerContainer = document.querySelector('#computer-container');\n\n  if (computerContainer.classList.contains('computer-container-hidden')) {\n    return;\n  }\n\n  onlyDisplayPlayerOneBoard();\n  addBoatSelectionBox();\n  addBoatsToBox();\n  addAxisSwitching();\n  enableDragAndDrop();\n}\n\nfunction onlyDisplayPlayerOneBoard() {\n  const gameBoard = document.querySelector('#game-board');\n  const computerContainer = document.querySelector('#computer-container');\n  gameBoard.classList.remove('game-board-hidden');\n  computerContainer.classList.add('computer-container-hidden');\n}\n\nfunction addBoatSelectionBox() {\n  const gameBoard = document.querySelector('#game-board');\n  const boatContainer = document.createElement('div');\n  boatContainer.setAttribute('id', 'boat-container');\n  const labelForPlacingBoat = document.createElement('p');\n  labelForPlacingBoat.setAttribute('id', 'label-for-placing-boat');\n  labelForPlacingBoat.textContent = 'Place Your Boats Captain!';\n  const boatSelectionBox = document.createElement('div');\n  boatSelectionBox.setAttribute('id', 'boat-selection-box');\n  boatSelectionBox.classList.add('display-y-axis');\n  boatContainer.appendChild(labelForPlacingBoat);\n  boatContainer.appendChild(boatSelectionBox);\n  gameBoard.appendChild(boatContainer);\n}\n\nfunction addBoatsToBox() {\n  const boatSelectionBox = document.querySelector('#boat-selection-box');\n  const cellWidth = document.querySelector('.game-board-cell').clientWidth;\n  const cellHeight = document.querySelector('.game-board-cell').clientHeight;\n  const carrierIcon = document.createElement('div');\n  carrierIcon.setAttribute('id', 'carrier-player');\n  carrierIcon.classList.add('player-boat');\n  const carrierHeight = cellHeight * 5 + 8;\n  carrierIcon.style.height = \"\".concat(carrierHeight, \"px\");\n  carrierIcon.style.width = \"\".concat(cellWidth, \"px\");\n  carrierIcon.draggable = 'true';\n  const battleshipIcon = document.createElement('div');\n  battleshipIcon.setAttribute('id', 'battleship-player');\n  battleshipIcon.classList.add('player-boat');\n  const battleshipHeight = cellHeight * 4 + 7;\n  battleshipIcon.style.height = \"\".concat(battleshipHeight, \"px\");\n  battleshipIcon.style.width = \"\".concat(cellWidth, \"px\");\n  battleshipIcon.draggable = 'true';\n  const cruiserIcon = document.createElement('div');\n  cruiserIcon.setAttribute('id', 'cruiser-player');\n  cruiserIcon.classList.add('player-boat');\n  const cruiserHeight = cellHeight * 3 + 6;\n  cruiserIcon.style.height = \"\".concat(cruiserHeight, \"px\");\n  cruiserIcon.style.width = \"\".concat(cellWidth, \"px\");\n  cruiserIcon.draggable = 'true';\n  const submarineIcon = document.createElement('div');\n  submarineIcon.setAttribute('id', 'submarine-player');\n  submarineIcon.classList.add('player-boat');\n  const submarineHeight = cellHeight * 3 + 6;\n  submarineIcon.style.height = \"\".concat(submarineHeight, \"px\");\n  submarineIcon.style.width = \"\".concat(cellWidth, \"px\");\n  submarineIcon.draggable = 'true';\n  const destroyerIcon = document.createElement('div');\n  destroyerIcon.setAttribute('id', 'destroyer-player');\n  destroyerIcon.classList.add('player-boat');\n  const destroyerHeight = cellHeight * 2 + 3;\n  destroyerIcon.style.height = \"\".concat(destroyerHeight, \"px\");\n  destroyerIcon.style.width = \"\".concat(cellWidth, \"px\");\n  destroyerIcon.draggable = 'true';\n  boatSelectionBox.appendChild(carrierIcon);\n  boatSelectionBox.appendChild(battleshipIcon);\n  boatSelectionBox.appendChild(cruiserIcon);\n  boatSelectionBox.appendChild(submarineIcon);\n  boatSelectionBox.appendChild(destroyerIcon);\n}\n\nfunction addAxisSwitching() {\n  const main = document.querySelector('#main-document');\n  const axisButton = document.createElement('button');\n  axisButton.setAttribute('id', 'axis-switch');\n  axisButton.classList.add('y-axis');\n  axisButton.textContent = 'Place on Y-Axis';\n  axisButton.addEventListener('click', changeAxis);\n  main.appendChild(axisButton);\n}\n\nfunction changeAxis() {\n  const axisSwitch = document.querySelector('#axis-switch');\n  const boats = document.querySelectorAll('.player-boat');\n  const boatSelectionBox = document.querySelector('#boat-selection-box');\n\n  if (axisSwitch.classList.contains('y-axis')) {\n    boats.forEach(function (boat) {\n      const currentHeight = boat.style.height;\n      const currentWidth = boat.style.width;\n      boat.style.width = currentHeight;\n      boat.style.height = currentWidth;\n    });\n    boatSelectionBox.classList.remove('display-y-axis');\n    boatSelectionBox.classList.add('display-x-axis');\n    axisSwitch.classList.remove('y-axis');\n    axisSwitch.classList.add('x-axis');\n  } else if (axisSwitch.classList.contains('x-axis')) {\n    boats.forEach(function (boat) {\n      const currentHeight = boat.style.height;\n      const currentWidth = boat.style.width;\n      boat.style.width = currentHeight;\n      boat.style.height = currentWidth;\n    });\n    boatSelectionBox.classList.remove('display-x-axis');\n    boatSelectionBox.classList.add('display-y-axis');\n    axisSwitch.classList.remove('x-axis');\n    axisSwitch.classList.add('y-axis');\n  }\n}\n\nfunction enableDragAndDrop() {\n  const playerBoats = document.querySelectorAll('.player-boat');\n  const gameBoardCells = document.querySelectorAll('.game-board-cell');\n  playerBoats.forEach(function (boat) {\n    boat.addEventListener('dragstart', function () {\n      boat.classList.add('dragging');\n      console.log('drag started');\n    });\n    boat.addEventListener('dragend', function () {\n      boat.classList.remove('dragging');\n      console.log('dragend');\n    });\n  });\n  gameBoardCells.forEach(function (cell) {\n    cell.addEventListener('dragover', function () {\n      console.log(cell);\n      const boat = document.querySelector('.dragging');\n      cell.appendChild(boat);\n    });\n  });\n}\n\nfunction resetGameButton() {\n  console.log('reseting game');\n  location.reload();\n}\n\n//# sourceURL=webpack://battleship-game/./src/scripts/start-game.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #FFEAEE;\\n}\\n\\n#battleship-logo-favicon {\\n  filter: invert(35%) sepia(74%) saturate(5549%) hue-rotate(200deg) brightness(101%) contrast(100%);\\n}\\n\\n#header {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  margin: 0;\\n  height: 17vh;\\n  width: 100vw;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: black;\\n}\\n\\n#battleship-logo {\\n  background-color: white;\\n  width: 5vw;\\n  height: 8vh;\\n  margin-left: 1%;\\n}\\n\\n#menu {\\n  background-color: pink;\\n  width: 20vw;\\n  height: 15vh;\\n  display: flex;\\n  margin: 0;\\n  flex-flow: column nowrap;\\n  justify-content: space-between;\\n}\\n\\n#website-title {\\n  background-color: green;\\n  height: 10vh;\\n  width: 20vw;\\n  margin: 0;\\n  font-size: 4.72em;\\n}\\n\\n#menu-button-container {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  height: 5vh;\\n  width: 20vw;\\n}\\n\\n#start-game {\\n  background-color: orange;\\n  height: 5vh;\\n  width: 20vw;\\n  margin: 0;\\n  font-size: 1.25em;\\n}\\n\\n#reset-game {\\n  background-color: cyan;\\n  height: 5vh;\\n  width: 20vw;\\n  margin: 0;\\n  font-size: 1.25em;\\n}\\n\\n#wins-tracker {\\n  background-color: purple;\\n  width: 5vw;\\n  height: 10vh;\\n  margin-right: 1%;\\n}\\n\\n#main-document {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  margin: 0;\\n  width: 100vw;\\n  height: 83vh;\\n  background-color: burlywood;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#game-board {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-around;\\n  align-items: center;\\n  margin: 0;\\n  width: 90vw;\\n  height: 70vh;\\n  background-color: aquamarine;\\n}\\n\\n#player-one-container, #computer-container {\\n  width: 40vw;\\n  height: 60vh;\\n  background-color: chocolate;\\n}\\n\\n#player-one-title, #computer-title {\\n  background-color: aquamarine;\\n  width: 40vw;\\n  height: 7vh;\\n  margin: 0;\\n  font-size: 3em;\\n  display: flex;\\n  align-items: center;\\n  color: azure;\\n}\\n\\n#player-one-board, #computer-board {\\n  margin: 0;\\n  width: 40vw;\\n  height: 53vh;\\n  display: flex;\\n  flex-flow: row wrap;\\n}\\n\\n.game-board-row{\\n  margin: 0;\\n  background-color: pink;\\n  flex: 1 1 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: stretch;\\n  align-items: stretch;\\n}\\n\\n.game-board-cell {\\n  display: flex;\\n  flex: 1 1 100%;\\n  border: 1px solid rgb(0,0,0, 0.4);\\n}\\n\\n.game-board-cell:nth-child(1n) {\\n  border-left: none\\n}\\n\\n.game-board-cell:nth-child(10n) {\\n  border-right: none;\\n}\\n\\n#row-1 * {\\n  border-top: none;\\n}\\n\\n#row-10 * {\\n  border-bottom: none;\\n}\\n\\n/* STYLING FOR FREEZING BOARD BEFORE GAME HAS STARTED */\\n.game-board-hidden {\\n  display: none;\\n  visibility: hidden;\\n}\\n\\n.computer-container-hidden {\\n  display: none;\\n  visibility: hidden;\\n}\\n\\n/* boat selection styling */\\n\\n#boat-container {\\n  width: 40vw;\\n  height: 60vh;\\n  background-color: #096B72;\\n}\\n\\n#label-for-placing-boat {\\n  background-color: aquamarine;\\n  width: 40vw;\\n  height: 7vh;\\n  margin: 0;\\n  font-size: 3em;\\n  display: flex;\\n  align-items: center;\\n  color: azure;\\n}\\n\\n#boat-selection-box {\\n  margin: 0;\\n  width: 40vw;\\n  height: 53vh;\\n}\\n\\n.player-boat {\\n  background-color: black;\\n  cursor: move;\\n}\\n\\n/* for drag and drop styling */\\n.player-boat.dragging {\\n  opacity: .5;\\n}\\n\\n#axis-switch {\\n  width: 10vw;\\n  height: 5vh;\\n  font-size: 1em;\\n  border: 3px solid red;\\n}\\n\\n.display-y-axis {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.display-x-axis {\\n  display: flex;\\n  flex-flow: column wrap;\\n  justify-content: space-around;\\n  align-items: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;