# Granite Table / Scorecard

The current state of this micro is used for rendering the scorecard and table front-end.

## Option Attributes

### datatables - `Boolean`

Activated the 3rd party plugin datatables.js

### paging - `Boolean`

Turn on pagination

### page_length - `Integer`

How may rows (records) to display on a single page

## Record Attributes

### value - `String or Integer`

The value to be displayed in the cell. This can also be used for calculating a different output based on predefined parameters.

### href - `URL`

Body cells will wrap the `value` with the provided URL.

### color_label - `HEX` or `RGB/RGBA`

Header cells with a defined color label will display a 2px bottom border with the provided color.
Body cells with a defined color label will display a 2px left border with the provided color.

### text_align - `String` (left, center, right)

Value alignment inside the table cell. Default value is `left`.

### strength - `Boolean`

Function call that returns the `value` wrapped in a div with a dynamic class name based on the `value`.

```javascript
function strength(newCell, cell) {
  if (cell.value <= 50) {
    newCell.innerHTML = `<span class="g__weak">${cell.value}</span>`;
  } else if (cell.value > 50 && cell.value < 75) {
    newCell.innerHTML = `<span class="g__moderate">${cell.value}</span>`;
  } else {
    newCell.innerHTML = `<span class="g__strong">${cell.value}</span>`;
  }
  return newCell;
}
```

### percent_change - `Boolean`

Function call that adds a dyanmic class to the table cell and returns a formatted `value`. Positive numbers include an up arrow and negative numbers include a down arrow.

```javascript
function percentChange(newCell, cell) {
  if (cell.value > 0) {
    newCell.classList.add("g__strong");
    newCell.innerHTML = `<i class="far fa-long-arrow-up"></i> ${cell.value}%`;
  } else if (cell.value === 0) {
    newCell.classList.add("g__moderate");
    newCell.innerHTML = `${cell.value}%`;
  } else {
    newCell.classList.add("g__weak");
    let number = cell.value.toString();
    newCell.innerHTML = `<i class="far fa-long-arrow-down"></i> ${number.slice(
      1
    )}%`;
  }
  return newCell;
}
```

### tooltip - `String`

The tooltip string in rendered as an HTML block. You have complete control over the content.
