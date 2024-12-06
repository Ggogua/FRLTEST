# Test Plan for Search Functionality

## Objective

Ensure the search functionality of the e-commerce website works as expected under various scenarios.

## Test Scenarios and Test Cases

### Test Scenario 1: Search with an Exact Product Name

**Test Case 1.1**

- **Steps:**
  1. Navigate to the search bar.
  2. Enter the exact name of a product, e.g., `iPhone 14 Pro`.
  3. Click the "Search" button.
- **Expected Result:**
  - The product appears as the first result.
  - Relevant product details (price, image, rating) are displayed.

### Test Scenario 2: Search with Partial Keywords

**Test Case 2.1**

- **Steps:**
  1. Navigate to the search bar.
  2. Enter partial keywords, e.g., `iPhone 14`.
  3. Click the "Search" button.
- **Expected Result:**
  - A list of relevant products, including `iPhone 14 Pro`, `iPhone 14 Plus`, etc., is displayed.

### Test Scenario 3: Search with Misspelled Keywords

**Test Case 3.1**

- **Steps:**
  1. Navigate to the search bar.
  2. Enter a misspelled keyword, e.g., `iPhon 14`.
  3. Click the "Search" button.
- **Expected Result:**
  - The system suggests `Did you mean: iPhone 14?`.
  - Relevant results for `iPhone 14` are displayed.

### Test Scenario 4: Filtering Search Results

**Test Case 4.1**

- **Steps:**
  1. Perform a search for `laptops`.
  2. Apply a filter to show only products under $1000.
- **Expected Result:**
  - The results update to display only laptops priced below $1000.

**Test Case 4.2**

- **Steps:**
  1. Perform a search for `laptops`.
  2. Apply a filter to show only products with a rating of 4 stars or above.
- **Expected Result:**
  - The results update to display only laptops with a 4-star rating or higher.

### Test Scenario 5: Sorting Search Results

**Test Case 5.1**

- **Steps:**
  1. Perform a search for `headphones`.
  2. Sort the results by `Price: Low to High`.
- **Expected Result:**
  - The products are sorted, starting from the lowest price.

### Test Scenario 6: Empty or Invalid Search

**Test Case 6.1**

- **Steps:**
  1. Leave the search bar empty and click "Search."
- **Expected Result:**
  - A message appears: `Please enter a keyword to search.`

**Test Case 6.2**

- **Steps:**
  1. Enter random gibberish, e.g., `asdfghjkl`, and click "Search."
- **Expected Result:**
  - A message appears: `No results found for 'asdfghjkl.' Try a different keyword.`

## Test Data

- **Products in the database:**  
  `iPhone 14 Pro`, `iPhone 14 Plus`, `MacBook Air`, `Bose Headphones`, `Sony Headphones`, `HP Laptop`.
- **Filters:**
  - Price.
  - Rating.
  - Category.

## Deliverables

- Test results with screenshots for each test case.
- Bug report (if any issues are found).
- Suggestions for improvement (if applicable).
